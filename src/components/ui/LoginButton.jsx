import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const LoginButton = () => {
  const [token, setToken] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

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

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem("accessToken");
    // Clear token state
    setToken(null);
    // Close dropdown
    setDropdownOpen(false);
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`w-[190px] py-[10px] rounded-t-[8px] relative z-10 ${
          dropdownOpen ? "rounded-t-[8px]" : "rounded-[8px]"
        } bg-[#2B2C34] border-[0.5px] text-white inline-flex items-center space-x-[4px] justify-center`}
      >
        <span className="text-[14px] font-[400]">
          {!token ? "Bizə qoşul" : "Hesabım"}
        </span>
      </button>

      {dropdownOpen && (
        <div className="absolute right-0 w-full bg-[#f1f1f1] overflow-hidden rounded-b-[8px] z-10">
          {!token ? (
            <>
              <NavLink
                to="/login"
                className="block px-4 py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
              >
                Daxil ol
              </NavLink>
              <NavLink
                to="/signup"
                className="block px-4 py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
              >
                Qeydiyyatdan keç
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to="/"
                className="block px-4 py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
              >
                Profil
              </NavLink>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
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
