import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import {
  add,
  favourites,
  logout,
  profile,
  profile2,
  profileCircle,
  profileCircleFilled,
  receipt,
} from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const LoginButton = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");
  const [token, setToken] = useState(null);
  const [active, setActive] = useState("");

  const location = useLocation();
  const currentPath = location.pathname;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("activePage", active);
    setActive(localStorage.getItem("activePage"));
  }, [active]);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleClick = () => {
    navigate("/create-event");
  };

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
    // Remove token, userId from local storage
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    // Clear token state
    setToken(null);
    // Close dropdown
    setDropdownOpen(false);
    // Reload the page
    window.location.reload();
  };

  return (
    <>
      {isMobile && (
        <div>
          <NavLink to="/login">
            <img
              src={currentPath === "/" ? profileCircle : profileCircleFilled}
              alt=""
            />
          </NavLink>
        </div>
      )}
      {isDesktop && (
        <>
          <div className="flex gap-[24px]">
            {token && (
              <button className="bg-[#FFCE00] border-transparent w-[190px] py-[8px] h-[43px] relative z-10  flex  justify-center items-center rounded-[8px] text-black font-[400] text-[16px]">
                <Link
                  to={"/create-event"}
                  className="flex items-center gap-1"
                  onClick={handleClick}
                >
                  <img src={add} className="size-6" alt="" /> Tədbir yarat
                </Link>
              </button>
            )}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className={`w-[190px] py-[10px] rounded-t-[8px] relative z-10 ${
                  dropdownOpen ? "rounded-t-[8px]" : "rounded-[8px]"
                } bg-[#2B2C34] border-[0.5px] text-white`}
              >
                <span className="text-[14px] font-[400] flex justify-center items-center space-x-[4px]">
                  {!token ? (
                    <>
                      <span>
                        <img src={profile2} alt="" className="text-white" />
                      </span>
                      <span>Bizə qoşul</span>
                    </>
                  ) : (
                    <>
                      <span>
                        <img src={profile2} alt="" className="text-white" />
                      </span>
                      <span>Hesabım</span>
                    </>
                  )}
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
                      <div
                        onClick={() => {
                          setActive("1");
                          navigate("/account");
                        }}
                        className="flex justify-start cursor-pointer items-center w-full space-x-[12px] pl-[30px] py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] "
                      >
                        <span>
                          <img src={profile} alt="" />
                        </span>
                        <span>Profilim</span>
                      </div>
                      <div
                        onClick={() => {
                          setActive("3");
                          navigate("/account");
                        }}
                        className="flex items-center cursor-pointer justify-start space-x-[12px] w-full pl-[30px] py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
                      >
                        <span>
                          <img src={receipt} alt="" />
                        </span>
                        <span>Rezervlərim</span>
                      </div>
                      <div
                        onClick={() => {
                          setActive("4");
                          navigate("/account");
                        }}
                        // onClick={handleLogout}
                        className="flex items-center cursor-pointer justify-start space-x-[12px] w-full pl-[30px] py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
                      >
                        <span>
                          <img src={favourites} alt="" />
                        </span>
                        <span>Bəyəndiklərim</span>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="flex items-center justify-start space-x-[12px] w-full pl-[30px] py-2 text-[#2B2C34] text-center hover:bg-gray-200 text-[14px] font-normal"
                      >
                        <span>
                          <img src={logout} alt="" />
                        </span>
                        <span>Çıxış</span>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default LoginButton;
