import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const LoginButton = ({ isLoggedIn, onLogin, onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {!isLoggedIn ? (
        <button
          onClick={toggleDropdown}
          className={`w-[190px] py-[10px] rounded-t-[8px] relative z-10 ${
            dropdownOpen ? "rounded-t-[8px]" : "rounded-[8px]"
          } bg-[#2B2C34] border-[0.5px] text-white inline-flex items-center space-x-[4px] justify-center`}
        >
          <span className="text-[14px] font-[400]">Bizə qoşul</span>
        </button>
      ) : (
        <button
          onClick={toggleDropdown}
          className={`w-[190px] py-[10px] rounded-t-[8px] ${
            dropdownOpen ? "rounded-t-[8px]" : "rounded-[8px]"
          } bg-[#2B2C34] border-[0.5px] text-white inline-flex items-center space-x-[4px] justify-center`}
        >
          <span className="text-[14px] font-[400]">Hesabım</span>
        </button>
      )}
      {dropdownOpen && (
        <div className="absolute right-0 w-full bg-[#f1f1f1] overflow-hidden rounded-b-[8px] z-10">
          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-[#2B2C34] hover:bg-gray-200 text-[14px] font-normal"
              >
                Daxil ol
              </NavLink>
              <NavLink
                to="/signup"
                className="block px-4 py-2 text-[#2B2C34] hover:bg-gray-200 text-[14px] font-normal"
              >
                Qeydiyyatdan keç
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/profile"
                className="block px-4 py-2 text-[#2B2C34] hover:bg-gray-200 text-[14px] font-normal"
              >
                Profil
              </NavLink>
              <button
                onClick={onLogout}
                className="block w-full text-left px-4 py-2 text-[#2B2C34] hover:bg-gray-200 text-[14px] font-normal"
              >
                Çıxış
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default LoginButton;
