import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { signupBg, loader, success, error } from "../../assets";
import {
  googleSignup,
  handleImageLoad,
  handleInputChange,
  handleSignup,
  isEmailValid,
  isPasswordValid,
  togglePasswordVisibility,
} from "../../utils/authUtils";

function SignUpPage() {
  const navigate = useNavigate();
  const { search } = useLocation();
  let params;
  let data;
  if (search) {
    params = new URLSearchParams(search);
    data = params.get("data");
  }

  const [formState, setFormState] = useState({
    imageLoaded: false,
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    fieldsFilled: false,
    emailValid: true,
    passwordValid: true,
    showPassword: false,
    showConfirmPassword: false,
    passwordMatch: false,
    loading: false,
  });

  const {
    imageLoaded,
    fullName,
    email,
    password,
    confirmPassword,
    fieldsFilled,
    emailValid,
    passwordValid,
    showPassword,
    showConfirmPassword,
    passwordMatch,
    loading,
  } = formState;

  isPasswordValid(password);
  isEmailValid(email);

  const handleFullName = (event) => {
    const { id, value } = event.target;
    // Regular expression to match only letters
    const onlyLetters = /^[a-zA-Z\s]*$/;
    if (onlyLetters.test(value) || value === "") {
      setFormState((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
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
              formState.imageLoaded ? "" : "hidden"
            }`}
            onLoad={() => handleImageLoad(setFormState)}
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-1/2 flex items-center relative">
          {!loading && (
            <div className="w-[60%] mx-auto">
              {/* Login Form */}
              <div className="bg-white rounded mb-[16px]">
                {/* Title */}

                <h2
                  className={`${
                    !data ? "text-[40px] mb-[18px]" : "text-[30px] mb-[18px]"
                  } w-[480px] unbounded unbounded-600`}
                >
                  {!data
                    ? "Qeydiyyatdan keç"
                    : "Tədbir yaratmaq üçün qeydiyyatdan keçin"}
                </h2>

                <form
                  onSubmit={(e) =>
                    handleSignup(
                      e,
                      undefined,
                      formState,
                      setFormState,
                      navigate
                    )
                  }
                >
                  <div className="mb-[20px] relative">
                    <input
                      className={`input-default ${
                        fullName
                          ? "border-[#00C408] focus:border-[#00C408]"
                          : "border-none"
                      }`}
                      id="fullName"
                      type="text"
                      value={formState.fullName}
                      onChange={(e) =>
                        // handleInputChange(e, formState, setFormState, "signup")
                        handleFullName(e)
                      }
                      placeholder="Ad Soyad"
                      maxLength={40}
                    />

                    {fullName !== "" && (
                      <span className="absolute top-1/2 right-[20px] -translate-y-1/2">
                        <img src={success} alt="" />
                      </span>
                    )}
                  </div>
                  {/* Email Input */}
                  <div className="mb-[20px] relative">
                    <input
                      className={`input-default ${
                        email
                          ? emailValid
                            ? "border-[#00C408] focus:border-[#00C408]"
                            : "border-[#FF4E4E] focus:border-[#FF4E4E]"
                          : "border-none"
                      }`}
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) =>
                        handleInputChange(e, formState, setFormState, "signup")
                      }
                      placeholder="E-poçt"
                    />
                    {email !== "" && emailValid && (
                      <span className="absolute top-1/2 right-[20px] -translate-y-1/2">
                        <img src={success} alt="" />
                      </span>
                    )}

                    {email !== "" && !emailValid && (
                      <span className="absolute top-[22px] right-[20px] -translate-y-1/2">
                        <img src={error} alt="" />
                      </span>
                    )}

                    {email !== "" && !emailValid && (
                      <p className="text-[#FF4E4E] text-[12px] leading-[20px]">
                        E-poçt yanlışdır
                      </p>
                    )}
                  </div>
                  {/* Password Input */}
                  <div className="mb-[20px] relative">
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
                        handleInputChange(e, formState, setFormState, "signup")
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
                  {/* Confirm Password */}
                  <div className="mb-[24px] relative">
                    <input
                      className={`input-default ${
                        confirmPassword && !passwordMatch
                          ? "border-[#FF4E4E] focus:border-[#FF4E4E]"
                          : "border-none"
                      }`}
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) =>
                        handleInputChange(e, formState, setFormState, "signup")
                      }
                      minLength={8}
                      maxLength={20}
                      placeholder="Şifrəni təsdiqləyin"
                    />
                    {confirmPassword !== "" && passwordMatch && (
                      <div
                        className="absolute top-0 right-0 h-full flex items-center pr-[20px] cursor-pointer"
                        onClick={() =>
                          togglePasswordVisibility(
                            "showConfirmPassword",
                            setFormState
                          )
                        }
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </div>
                    )}
                    {confirmPassword !== "" && !passwordMatch && (
                      <span className="absolute top-[10px] right-0 flex items-center pr-[20px]">
                        <img src={error} alt="" />
                      </span>
                    )}

                    {confirmPassword !== "" && !passwordMatch && (
                      <p className="text-[#FF4E4E] text-[12px] leading-[20px]">
                        Şifrələr uyğun deyil
                      </p>
                    )}
                  </div>
                  {/* Sign Up Button */}
                  <div className="flex flex-col items-center justify-center space-y-[12px]">
                    <button
                      className={`${
                        fullName &&
                        email &&
                        password &&
                        confirmPassword &&
                        emailValid &&
                        passwordValid &&
                        passwordMatch
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
