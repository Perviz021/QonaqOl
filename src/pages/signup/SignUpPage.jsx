import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { signupBg } from "../../assets";

function SignUpPage() {
  const [formState, setFormState] = useState({
    imageLoaded: false,
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    fieldsFilled: false,
    fullnameValid: true,
    emailValid: true,
    passwordValid: true,
    confirmPasswordValid: true,
    showPassword: false,
    showConfirmPassword: false,
    passwordMatch: false,
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

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]:
        id === "email" ? value : value.slice(0, id === "fullname" ? 40 : 10),
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
          : value.length <= (id === "fullname" ? 40 : 10),
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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch(
        "https://qonaqol.onrender.com/api/v1/auth/signup",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: formState.fullname,
            email: formState.email,
            password: formState.password,
            confirmPassword: formState.confirmPassword,
          }),
        }
      );

      if (response.ok) {
        // Handle success
        console.log("User signed up successfully!");
      } else {
        // Handle error
        console.error("Error signing up:", response.statusText);
      }
    } catch (error) {
      console.error("Error signing up:", error.message);
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
        <div className="w-1/2 flex items-center">
          <div className="w-[60%] mx-auto">
            {/* Login Form */}
            <div className="bg-white rounded mb-[16px]">
              {/* Title */}
              <h2 className="text-[40px] font-[600] mb-[36px]">
                Qeydiyyatdan keç
              </h2>

              <form onSubmit={handleSubmit}>
                {" "}
                {/* Added onSubmit handler */}
                {/* Fullname Input */}
                <div
                  className={`mb-[20px] ${
                    !formState.fullnameValid ? "border-red-500" : ""
                  }`}
                >
                  <input
                    className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                      !formState.fullnameValid ? "border-red-500" : ""
                    }`}
                    id="fullname"
                    type="text"
                    value={formState.fullname}
                    onChange={handleInputChange}
                    placeholder="Ad Soyad"
                  />
                </div>
                {/* Email Input */}
                <div
                  className={`mb-[20px] ${
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
                  className={`mb-[20px] relative ${
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
                  className={`mb-[24px] relative ${
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
                    {formState.showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                {/* Sign Up Button */}
                {formState.fieldsFilled && formState.passwordMatch && (
                  <div className="flex flex-col items-center justify-center space-y-[8px]">
                    <button
                      className={`bg-[#FFCE00] text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline`}
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
                )}
              </form>
            </div>

            {/* Or Separator */}
            <div className="mb-[16px] w-full flex items-center justify-center">
              <hr className="border-t border-[#c6c6c6] inline-block w-[45%] mr-1" />
              <span className="text-gray-500 text-[12px]">və ya</span>
              <hr className="border-t border-[#c6c6c6] inline-block w-[45%] ml-1" />
            </div>

            {/* Google Signin Button */}
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
                <span className="text-[#0074C6] mr-1">Xidmət Şərtləri</span>
                və <span className="text-[#0074C6]">
                  Məxfilik Siyasətini
                </span>{" "}
                qəbul etmiş olursunuz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
