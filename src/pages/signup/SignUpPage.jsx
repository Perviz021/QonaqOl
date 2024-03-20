import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { signupBg, loader } from "../../assets";
import {
  googleSignup,
  handleImageLoad,
  handleSubmit,
  isEmailValid,
  isPasswordValid,
  togglePasswordVisibility,
} from "../../utils/authUtils";

function SignUpPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    imageLoaded: false,
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fieldsFilled: false,
    emailValid: true,
    // passwordValid: true,
    showPassword: false,
    showConfirmPassword: false,
    passwordMatch: false,
    loading: false,
  });

  // isPasswordValid(formState.password);

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const trimmedValue = value.trim();

    setFormState((prevState) => ({
      ...prevState,
      [id]: value,
      fieldsFilled:
        !!prevState.fullName &&
        !!prevState.email &&
        !!prevState.password &&
        !!prevState.confirmPassword &&
        trimmedValue !== "",
      emailValid:
        id === "email"
          ? trimmedValue === "" || isEmailValid(trimmedValue)
          : prevState.emailValid,
      passwordMatch:
        id === "confirmPassword"
          ? trimmedValue === prevState.password
          : id === "password"
          ? trimmedValue === prevState.confirmPassword
          : prevState.passwordMatch,
    }));
  };

  isEmailValid(formState.email);

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
            onLoad={() => handleImageLoad(setFormState)}
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-1/2 flex items-center relative">
          {!formState.loading && (
            <div className="w-[60%] mx-auto">
              <button
                className="inline-flex items-center justify-center space-x-1 bg-gray-200 text-black text-[16px] font-normal h-[34px] px-[20px] mt-2 rounded-[8px] mb-[16px] focus:outline-none focus:shadow-outline"
                onClick={handleBack}
              >
                <span>Geri</span>
                <span>
                  <RiArrowGoBackFill />
                </span>
              </button>
              {/* Login Form */}
              <div className="bg-white rounded mb-[16px]">
                {/* Title */}
                <h2 className="text-[40px] font-[600] mb-[20px]">
                  Qeydiyyatdan keç
                </h2>

                <form
                  onSubmit={(e) =>
                    handleSubmit(
                      e,
                      undefined,
                      formState,
                      setFormState,
                      navigate
                    )
                  }
                >
                  <div className="mb-[18px]">
                    <input
                      className="appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0"
                      id="fullName"
                      type="text"
                      value={formState.fullName}
                      onChange={handleInputChange}
                      placeholder="Ad Soyad"
                      maxLength={40}
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
                  <div className="mb-[18px] relative">
                    <input
                      className="appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0"
                      id="password"
                      type={formState.showPassword ? "text" : "password"}
                      value={formState.password}
                      onChange={handleInputChange}
                      maxLength={10}
                      placeholder="Şifrə"
                    />
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility("showPassword", setFormState)
                      }
                    >
                      {formState.showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  </div>
                  {/* Confirm Password */}
                  <div className="mb-[22px] relative">
                    <input
                      className="appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] pr-[40px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] focus:border-transparent focus:ring-0"
                      id="confirmPassword"
                      type={formState.showConfirmPassword ? "text" : "password"}
                      value={formState.confirmPassword}
                      onChange={handleInputChange}
                      maxLength={10}
                      placeholder="Şifrəni təsdiqləyin"
                    />
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-[10px] cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility(
                          "showConfirmPassword",
                          setFormState
                        )
                      }
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
                        formState.fieldsFilled &&
                        formState.passwordMatch &&
                        formState.emailValid &&
                        formState.fullName
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
                  onClick={(e) =>
                    googleSignup(e, "signup", formState, setFormState, navigate)
                  }
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
