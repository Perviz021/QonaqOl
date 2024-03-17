import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { signupBg, loader } from "../../assets";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../lib/firebase";

const provider = new GoogleAuthProvider();

function SignUpPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    imageLoaded: false,
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fieldsFilled: false,
    fullNameValid: true,
    emailValid: true,
    passwordValid: true,
    confirmPasswordValid: true,
    showPassword: false,
    showConfirmPassword: false,
    passwordMatch: false,
    loading: false,
  });

  const handleImageLoad = () => {
    setFormState((prevState) => ({ ...prevState, imageLoaded: true }));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length <= 10;
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const refreshToken = async () => {
    const navigate = useNavigate();

    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await fetch(
        "https://qonaqol.onrender.com/qonaqol/api/v1/auth/refresh",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: refreshToken,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const newAccessToken = data.accessToken;
        const newRefreshToken = data.refreshToken;
        // Update tokens in local storage
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", newRefreshToken);
        return newAccessToken;
      } else {
        console.error("Error refreshing token:", response.statusText);
        // Optionally, handle invalid or expired refresh token
        // For example, clear tokens from local storage and redirect to login page
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error refreshing token:", error.message);
      // Handle network errors or other exceptions
      // Optionally, clear tokens from local storage and redirect to login page
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]:
        id === "email" ? value : value.slice(0, id === "fullName" ? 40 : 10),
      fieldsFilled:
        id !== "confirmPassword"
          ? {
              ...prevState.fieldsFilled,
              [id]: value !== "",
            }
          : prevState.fieldsFilled,
      [`${id}Valid`]:
        id === "email"
          ? isEmailValid(value)
          : id === "password"
          ? isPasswordValid(value)
          : id === "confirmPassword"
          ? value === formState.password
          : value.length <= (id === "fullName" ? 40 : 10),
      passwordMatch:
        id === "password"
          ? value === formState.confirmPassword
          : id === "confirmPassword"
          ? value === formState.password
          : prevState.passwordMatch,
    }));
  };

  const toggleVisibility = (field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleSubmit = async (e, user = null) => {
    e.preventDefault(); // Prevent default form submission
    setFormState((prevData) => ({
      ...prevData,
      loading: true,
    }));
    try {
      let payload = {};
      if (!user) {
        // If user is not provided (normal sign up)
        payload = {
          fullName: formState.fullName,
          email: formState.email,
          password: formState.password,
          confirmPassword: formState.confirmPassword,
        };
      } else {
        // If user is provided (sign up with Google)
        payload = {
          fullName: user?.displayName,
          email: user?.email,
          password: user?.uid.slice(0, 10), // Using user UID as password
          confirmPassword: user?.uid.slice(0, 10), // Using user UID as confirmation password
        };
      }

      const response = await fetch(
        "https://qonaqol.onrender.com/qonaqol/api/v1/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Handle success
        console.log("User signed up successfully!");
        const data = await response.json();
        const { userId, tokenPair } = data;
        const { accessToken, refreshToken } = tokenPair;

        // Store userId, accessToken, and refreshToken in local storage
        localStorage.setItem("userId", userId);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/"); // Navigate to login page using useNavigate
      } else {
        if (response.status === 401) {
          // If token is expired or invalid, try refreshing the token
          const newAccessToken = await refreshToken();
          if (newAccessToken) {
            // If a new access token is obtained, retry the signup
            return handleSubmit(e);
          } else {
            // If unable to refresh token, handle error appropriately
            console.error("Unable to refresh token. Please try again later.");
          }
        } else {
          // Handle other errors
          console.error("Error signing up:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
    } finally {
      setFormState((prevData) => ({
        ...prevData,
        loading: false,
      }));
    }
  };

  const googleSignup = async (e) => {
    try {
      const data = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(data);
      const token = credential.accessToken;
      const user = data.user;

      handleSubmit(e, user);
    } catch (error) {
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(credential);
    }
  };

  return (
    <div style={{ visibility: formState.imageLoaded ? "visible" : "hidden" }}>
      <div className="flex h-screen">
        {/* Left Side (Image) */}
        <div className="w-1/2">
          <img
            src={signupBg}
            alt=""
            className={`w-full h-full object-cover ${
              formState.imageLoaded ? "" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-1/2 flex items-center relative">
          {!formState.loading && (
            <div className="w-[60%] mx-auto">
              <button
                className="bg-gray-200 text-black text-[16px] font-normal h-[34px] px-[20px] mt-2 rounded-[8px] mb-[16px] focus:outline-none focus:shadow-outline"
                onClick={handleBack}
              >
                Geri Qayıt
              </button>
              {/* Login Form */}
              <div className="bg-white rounded mb-[16px]">
                {/* Title */}
                <h2 className="text-[40px] font-[600] mb-[20px]">
                  Qeydiyyatdan keç
                </h2>

                <form onSubmit={handleSubmit}>
                  <div
                    className={`mb-[18px] ${
                      !formState.fullNameValid ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                        !formState.fullNameValid ? "border-red-500" : ""
                      }`}
                      id="fullName"
                      type="text"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      placeholder="Ad Soyad"
                    />
                  </div>
                  {/* Email Input */}
                  <div
                    className={`mb-[18px] ${
                      !formState.emailValid ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                        !formState.emailValid ? "border-red-500" : ""
                      }`}
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder="E-poçt"
                    />
                  </div>
                  {/* Password Input */}
                  <div
                    className={`mb-[18px] relative ${
                      !formState.passwordValid ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                        !formState.passwordValid ? "border-red-500" : ""
                      }`}
                      id="password"
                      type={formState.showPassword ? "text" : "password"}
                      value={formState.password}
                      onChange={handleInputChange}
                      maxLength={10}
                      placeholder="Şifrə"
                    />
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                      onClick={() => toggleVisibility("showPassword")}
                    >
                      {formState.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                  {/* Confirm Password */}
                  <div
                    className={`mb-[22px] relative ${
                      !formState.confirmPasswordValid ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                        !formState.confirmPasswordValid ? "border-red-500" : ""
                      }`}
                      id="confirmPassword"
                      type={formState.showConfirmPassword ? "text" : "password"}
                      value={formState.confirmPassword}
                      onChange={handleInputChange}
                      maxLength={10}
                      placeholder="Şifrəni təsdiqləyin"
                    />
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                      onClick={() => toggleVisibility("showConfirmPassword")}
                    >
                      {formState.showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </div>
                  </div>
                  {/* Sign Up Button */}
                  <div className="flex flex-col items-center justify-center space-y-[8px]">
                    <button
                      className={`${
                        formState.fieldsFilled && formState.passwordMatch
                          ? "bg-[#FFCE00]"
                          : "bg-[#F1dd8b] pointer-events-none"
                      }  text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline`}
                      type="submit"
                    >
                      Qeydiyyat
                    </button>
                    <p className="text-center flex items-center text-[12px] leading-[20px]">
                      Artıq qeydiyyatdan keçmisiniz?{" "}
                      <NavLink to="/login" className="underline ml-1">
                        Daxil olun
                      </NavLink>
                    </p>
                  </div>
                </form>
              </div>

              {/* Or Separator */}
              <div className="mb-[14px] w-full flex items-center justify-center">
                <hr className="border-t border-[#c6c6c6] inline-block w-[45%] mr-1" />
                <span className="text-gray-500 text-[12px]">və ya</span>
                <hr className="border-t border-[#c6c6c6] inline-block w-[45%] ml-1" />
              </div>

              {/* Google Signin Button */}
              <div className="flex flex-col items-center justify-center">
                <button
                  className={`bg-[#2B2C34] text-white text-[16px] h-[44px] rounded-[8px] focus:outline-none focus:shadow-outline inline-flex items-center w-full justify-center space-x-[10px]`}
                  type="button"
                  onClick={(e) => googleSignup(e)}
                >
                  <span className="size-[20px]">
                    <FaGoogle />
                  </span>
                  <span>Google ilə davam et</span>
                </button>
                <p className="text-[12px] py-3 text-[#2B2B2B] text-center font-normal">
                  Hesabınıza giriş edərək və ya yeni hesab yaradaraq{" "}
                  <span className="text-[#0074C6] mr-1">Xidmət Şərtləri</span>
                  və <span className="text-[#0074C6]">
                    Məxfilik Siyasətini
                  </span>{" "}
                  qəbul etmiş olursunuz
                </p>
              </div>
            </div>
          )}

          {formState.loading && (
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 size-full bg-[#fff]">
              <img src={loader} className="size-[80px]" alt="" />
              <span>Loading...</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
