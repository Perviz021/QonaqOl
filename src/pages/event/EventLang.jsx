import React, { useState, useEffect, useRef } from "react";
import { global } from "../../assets";

const EventLang = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLangSelection = (lang) => {
    setSelectedLang(lang);
    setShowDropdown(false);
  };

  return (
    <div className="w-[45%] relative" ref={dropdownRef}>
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin dili
      </h4>
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={selectedLang || "Dili seçin"}
          onClick={toggleDropdown}
          className={`text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] cursor-pointer px-[20px] ${
            selectedLang ? "text-black" : "text-[#919191]"
          }`}
        />
        <span
          className="absolute right-[20px] top-[10px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={global} alt="" />
        </span>
        {showDropdown && (
          <div className="absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            <ul>
              <li
                onClick={() => handleLangSelection("Azərbaycan")}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                Azərbaycan
              </li>
              <li
                onClick={() => handleLangSelection("English")}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                English
              </li>
              <li
                onClick={() => handleLangSelection("Русский")}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                Русский
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventLang;
