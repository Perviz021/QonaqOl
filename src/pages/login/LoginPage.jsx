import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { RiArrowGoBackFill } from "react-icons/ri";
import { loginBg1, loader } from "../../assets";
import {
  googleSignup,
  handleImageLoad,
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const isValid = value.trim() === "" || isEmailValid(value);
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        fieldsFilled: !!value && !!prevData.password,
        emailValid: isValid,
      }));
    } else {
      setFormState((prevData) => ({
        ...prevData,
        [name]: value,
        fieldsFilled: !!prevData.email && !!value,
        passwordValid: isPasswordValid(value),
      }));
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

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
              <button
                className="inline-flex justify-center items-center space-x-1 bg-gray-200 text-black text-[16px] font-normal h-[34px] px-[20px] rounded-[8px] mb-[30px] focus:outline-none focus:shadow-outline"
                onClick={handleBack}
              >
                <span>Geri</span>
                <span>
                  <RiArrowGoBackFill />
                </span>
              </button>
              <div className="bg-white rounded mb-[16px]">
                <h2 className="text-[40px] font-[600] mb-[36px]">Daxil ol</h2>

                <div className={`mb-[20px]`}>
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
                    onClick={() =>
                      togglePasswordVisibility("showPassword", setFormState)
                    }
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
                  <span className="#0074C6">Məxfilik Siyasətini</span> qəbul
                  etmiş olursunuz
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
