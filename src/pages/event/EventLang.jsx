import React, { useState, useEffect, useRef } from "react";
import { global } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const EventLang = ({ onLangChange }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState("");
  const dropdownRef = useRef(null);
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

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
    let englishLang = "";
    switch (lang) {
      case "Azərbaycan":
        englishLang = "AZERBAIJANI";
        break;
      case "English":
        englishLang = "ENGLISH";
        break;
      case "Русский":
        englishLang = "RUSSIAN";
        break;
      default:
        englishLang = "";
    }

    setSelectedLang(lang);
    setShowDropdown(false);
    onLangChange(englishLang); // Pass the selected language to the parent component
  };

  return (
    <div
      className={`${isMobile ? "w-full" : "w-[50%]"} relative`}
      ref={dropdownRef}
    >
      <h4 className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin dili
      </h4>
      <div className="relative">
        <input
          type="text"
          readOnly
          placeholder={selectedLang || "Dili seçin"}
          onClick={toggleDropdown}
          className={`text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] cursor-pointer px-[20px] placeholder:${
            selectedLang ? "text-black" : "text-[#00000066]"
          }`}
        />
        <span
          className="absolute right-[20px] top-[10px] cursor-pointer"
          onClick={toggleDropdown}
        >
          <img src={global} alt="" />
        </span>
        {showDropdown && (
          <div className="absolute top-full left-0 z-10 mt-1 w-full bg-[#f2f2f2] rounded-[8px]">
            <ul className="px-2">
              <li
                onClick={() => handleLangSelection("Azərbaycan")}
                className="cursor-pointer p-2 hover:bg-gray-100"
              >
                Azərbaycan
              </li>
              <li
                onClick={() => handleLangSelection("English")}
                className="cursor-pointer p-2 hover:bg-gray-100 border-y border-[#fff]"
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
