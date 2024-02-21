import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

import { signupBg } from "../../assets";

function SignUpPage() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldsFilled, setFieldsFilled] = useState(false);
  const [fullnameValid, setFullnameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length <= 10;
  };

  const handleFullnameChange = (e) => {
    const value = e.target.value;
    setFullname(value.slice(0, 40)); // Limit fullname to 40 characters
    setFieldsFilled(value && email && password && confirmPassword);
    setFullnameValid(value.length <= 40); // Validate fullname length
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setFieldsFilled(fullname && value && password && confirmPassword);
    setEmailValid(isEmailValid(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setFieldsFilled(fullname && email && value && confirmPassword);
    setPasswordValid(isPasswordValid(value));
    setPasswordMatch(value === confirmPassword); // Check if passwords match
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setFieldsFilled(fullname && email && password && value);
    setConfirmPasswordValid(value === password); // Validate confirm password match
    setPasswordMatch(password === value); // Check if passwords match
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div style={{ visibility: imageLoaded ? "visible" : "hidden" }}>
      <div className="flex h-screen">
        {/* Left Side (Image) */}
        <div className="w-1/2">
          <img
            src={signupBg}
            alt=""
            className={`w-full h-full object-cover ${
              imageLoaded ? "" : "hidden"
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

              {/* Fullname Input */}
              <div
                className={`mb-[20px] ${
                  !fullnameValid ? "border-red-500" : ""
                }`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !fullnameValid ? "border-red-500" : ""
                  }`}
                  id="fullname"
                  type="text"
                  value={fullname}
                  onChange={handleFullnameChange}
                  placeholder="Ad Soyad"
                />
              </div>

              {/* Email Input */}
              <div
                className={`mb-[20px] ${!emailValid ? "border-red-500" : ""}`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !emailValid ? "border-red-500" : ""
                  }`}
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="E-poçt"
                />
              </div>

              {/* Password Input */}
              <div
                className={`mb-[20px] relative ${
                  !passwordValid ? "border-red-500" : ""
                }`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !passwordValid ? "border-red-500" : ""
                  }`}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
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

              {/* Confirm Password */}
              <div
                className={`mb-[24px] relative ${
                  !confirmPasswordValid ? "border-red-500" : ""
                }`}
              >
                <input
                  className={`appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0 ${
                    !confirmPasswordValid ? "border-red-500" : ""
                  }`}
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  maxLength={10}
                  placeholder="Şifrəni təsdiqləyin"
                />
                <div
                  className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Login Button */}
              {fieldsFilled && passwordMatch && (
                <div className="flex flex-col items-center justify-center space-y-[8px]">
                  <button
                    className={`bg-[#FFCE00] text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline`}
                    type="button"
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
                <span className="text-[#0074C6]">Xidmət Şərtləri</span>
                və <span className="#0074C6">Məxfilik Siyasətini</span> qəbul
                etmiş olursunuz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
