import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { loginBg1, loader, success, error } from "../../assets";
import {
  googleSignup,
  handleImageLoad,
  handleInputChange,
  handleSignIn,
  isEmailValid,
  isPasswordValid,
  togglePasswordVisibility,
} from "../../utils/authUtils";

function LoginPage() {
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    imageLoaded: false,
    email: "",
    password: "",
    fieldsFilled: false,
    emailValid: true,
    passwordValid: true,
    showPassword: false,
    loading: false,
  });

  const {
    imageLoaded,
    email,
    password,
    fieldsFilled,
    emailValid,
    passwordValid,
    showPassword,
    loading,
  } = formState;

  isEmailValid(email);
  isPasswordValid(password);

  return (
    <div style={{ visibility: imageLoaded ? "visible" : "hidden" }}>
      <div className="flex h-screen">
        <div className="w-1/2">
          <img
            src={loginBg1}
            alt=""
            className={`w-full h-full object-cover ${
              imageLoaded ? "" : "hidden"
            }`}
            onLoad={() => handleImageLoad(setFormState)}
          />
        </div>

        <div className="w-1/2 flex items-center relative">
          {!loading && (
            <div className="w-[60%] mx-auto">
              <div className="bg-white rounded mb-[16px]">
                <h2 className="text-[40px] font-[600] mb-[36px] unbounded unbounded-600">
                  Daxil ol
                </h2>

                {/* Email field */}
                <div className="mb-[20px] relative">
                  <input
                    className={`input-default 
                    ${
                      email
                        ? emailValid
                          ? "border-[#00C408] focus:border-[#00C408]"
                          : "border-[#FF4E4E] focus:border-[#FF4E4E]"
                        : "border-none"
                    }`}
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) =>
                      handleInputChange(e, formState, setFormState, "login")
                    }
                    placeholder="E-poçt"
                  />

                  {email !== "" && emailValid && (
                    <span className="absolute top-1/2 right-[20px] -translate-y-1/2">
                      <img src={success} alt="" />
                    </span>
                  )}

                  {email !== "" && !emailValid && (
                    <span className="absolute top-[10px] right-[20px]">
                      <img src={error} alt="" />
                    </span>
                  )}

                  {email !== "" && !emailValid && (
                    <p className="text-[#FF4E4E] text-[12px] leading-[20px]">
                      E-poçt yanlışdır
                    </p>
                  )}
                </div>

                {/* Password field */}
                <div className="mb-[6px] relative">
                  <input
                    className={`input-default ${
                      password && !passwordValid
                        ? "border-[#FF4E4E] focus:border-[#FF4E4E]"
                        : "border-none"
                    }`}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) =>
                      handleInputChange(e, formState, setFormState, "login")
                    }
                    minLength={8}
                    maxLength={20}
                    placeholder="Şifrə"
                  />

                  {password !== "" && passwordValid && (
                    <div
                      className="absolute top-0 right-0 h-full flex items-center pr-[20px] cursor-pointer"
                      onClick={() =>
                        togglePasswordVisibility("showPassword", setFormState)
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                  )}
                  {password !== "" && !passwordValid && (
                    <span className="absolute top-[10px] right-0 flex items-center pr-[20px]">
                      <img src={error} alt="" />
                    </span>
                  )}

                  {password !== "" && !passwordValid && (
                    <p className="text-[#FF4E4E] text-[12px] leading-[20px]">
                      Şifrə minimum 8 simvoldan ibarət olmalıdır
                    </p>
                  )}
                </div>

                <p className="text-end text-[#0078CC] text-[10px] font-normal mb-[24px]">
                  <span className="cursor-pointer">Şifrəni unutmusunuz?</span>
                </p>

                <div className="flex flex-col items-center justify-center space-y-[8px]">
                  <button
                    className={`${
                      isEmailValid(email) &&
                      isPasswordValid(password) &&
                      fieldsFilled
                        ? "bg-[#FFCE00]"
                        : "bg-[#f1dd8b] pointer-events-none"
                    } text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline`}
                    type="button"
                    onClick={(e) =>
                      handleSignIn(
                        e,
                        undefined,
                        formState,
                        setFormState,
                        navigate
                      )
                    }
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
                  onClick={(e) =>
                    googleSignup(e, "login", formState, setFormState, navigate)
                  }
                >
                  <span className="size-[20px]">
                    <FaGoogle />
                  </span>
                  <span>Google ilə davam et</span>
                </button>
                <p className="text-[12px] py-3 text-[#2B2B2B] text-center font-normal">
                  Hesabınıza giriş edərək və ya yeni hesab yaradaraq{" "}
                  <span className="text-[#0074C6]">Xidmət Şərtləri</span> və{" "}
                  <span className="text-[#0074C6]">Məxfilik Siyasətini</span>{" "}
                  qəbul etmiş olursunuz
                </p>
              </div>
            </div>
          )}
          {loading && (
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

export default LoginPage;
