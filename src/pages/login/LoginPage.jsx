import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

import { loginBg } from "../../assets";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    imageLoaded: false,
    email: "",
    password: "",
    fieldsFilled: false,
    emailValid: true,
    passwordValid: true,
    showPassword: false,
  });

  const handleImageLoad = () => {
    setFormData((prevData) => ({
      ...prevData,
      imageLoaded: true,
    }));
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length <= 10;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      fieldsFilled:
        name === "email"
          ? !!value && !!prevData.password
          : !!prevData.email && !!value,
      emailValid: name === "email" ? isEmailValid(value) : prevData.emailValid,
      passwordValid:
        name === "password" ? isPasswordValid(value) : prevData.passwordValid,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleSignIn = async () => {
    try {
      // Make a POST request to the backend for signing in
      const response = await fetch(
        "https://qonaqol.onrender.com/qonaqol/api/v1/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      if (response.ok) {
        // If sign-in is successful, parse response and extract token
        const data = await response.json();
        const token = data.token;
        // Store the token in local storage
        localStorage.setItem("token", token);
        // Redirect user to main page
        navigate("/");
      } else {
        console.error("Sign-in failed");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const {
    imageLoaded,
    email,
    password,
    fieldsFilled,
    emailValid,
    passwordValid,
    showPassword,
  } = formData;

  return (
    <div style={{ visibility: imageLoaded ? "visible" : "hidden" }}>
      <div className="flex h-screen">
        <div className="w-1/2">
          <img
            src={loginBg}
            alt=""
            className={`w-full h-full object-cover ${
              imageLoaded ? "" : "hidden"
            }`}
            onLoad={handleImageLoad}
          />
        </div>

        <div className="w-1/2 flex items-center">
          <div className="w-[60%] mx-auto">
            <div className="bg-white rounded mb-[16px]">
              <h2 className="text-[40px] font-[600] mb-[36px]">Daxil ol</h2>

              <div
                className={`mb-[20px] ${!emailValid ? "border-red-500" : ""}`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !emailValid ? "border-red-500" : ""
                  }`}
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  placeholder="E-poçt"
                />
              </div>

              <div
                className={`mb-[6px] relative ${
                  !passwordValid ? "border-red-500" : ""
                }`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !passwordValid ? "border-red-500" : ""
                  }`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  maxLength={10}
                  placeholder="Şifrə"
                />
                <div
                  className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <p className="text-end cursor-pointer text-[#0078CC] text-[10px] font-normal mb-[24px]">
                Şifrəni unutmusunuz?
              </p>

              <div className="flex flex-col items-center justify-center space-y-[8px]">
                <button
                  className={`${
                    isEmailValid(email) &&
                    isPasswordValid(password) &&
                    fieldsFilled
                      ? "bg-[#FFCE00]"
                      : "bg-gray-300"
                  } text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline`}
                  type="button"
                  onClick={handleSignIn}
                >
                  Daxil ol
                </button>
                <p className="text-center flex items-center text-[12px] leading-[20px]">
                  Qonaqol.az-da yenisiniz?{" "}
                  <NavLink to="/signup" className="underline ml-1">
                    Qeydiyyatdan keçin
                  </NavLink>
                </p>
              </div>
            </div>

            <div className="mb-[16px] w-full flex items-center justify-center">
              <hr className="border-t border-[#c6c6c6] inline-block w-[45%] mr-1" />
              <span className="text-gray-500 text-[12px]">və ya</span>
              <hr className="border-t border-[#c6c6c6] inline-block w-[45%] ml-1" />
            </div>

            <div className="flex flex-col items-center justify-center">
              <button
                className="bg-[#2B2C34] text-white text-[16px] h-[44px] rounded-[8px] focus:outline-none focus:shadow-outline inline-flex items-center w-full justify-center space-x-[10px]"
                type="button"
              >
                <span className="size-[20px]">
                  <FaGoogle />
                </span>
                <span>Google ilə davam et</span>
              </button>
              <p className="text-[12px] py-3 text-[#2B2B2B] text-center font-normal">
                Hesabınıza giriş edərək və ya yeni hesab yaradaraq{" "}
                <span className="text-[#0074C6]">Xidmət Şərtləri</span> və{" "}
                <span className="#0074C6">Məxfilik Siyasətini</span> qəbul etmiş
                olursunuz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;