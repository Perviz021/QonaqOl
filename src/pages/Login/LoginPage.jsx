import React from "react";

import { loginBg } from "../../assets";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side (Image) */}
      <div className="w-1/2">
        <img src={loginBg} alt="" />
      </div>

      {/* Right Side (Login Form) */}
      <div className="w-1/2 flex items-center">
        <div className="w-[60%] mx-auto">
          {/* Login Form */}
          <div className="bg-white rounded mb-[16px]">
            {/* Title */}
            <h2 className="text-[40px] font-[600] mb-[36px]">Daxil ol</h2>

            {/* Email Input */}
            <div className="mb-[20px]">
              <input
                className="appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] border-transparent focus:border-transparent focus:ring-0"
                id="email"
                type="email"
                placeholder="E-poçt"
              />
            </div>

            {/* Password Input */}
            <div className="mb-[6px]">
              <input
                className="appearance-none rounded-[8px] text-[16px] font-[400] w-full py-[10px] px-[20px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#f2f2f2] border-transparent focus:border-transparent focus:ring-0"
                id="password"
                type="password"
                placeholder="Şifrə"
              />
            </div>

            {/* Forget Password Link */}
            <div className="text-right mb-[24px]">
              <a
                className="text-[12px] font-normal text-blue-500 hover:text-blue-700"
                href="#"
              >
                Şifrəni unutmusunuz?
              </a>
            </div>

            {/* Login Button */}
            <div className="flex flex-col items-center justify-center space-y-[8px]">
              <button
                className="bg-[#FFCE00] hover:bg-yellow-300 text-black text-[16px] font-normal h-[44px] w-full rounded-[8px] focus:outline-none focus:shadow-outline"
                type="button"
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
  );
}

export default LoginPage;
