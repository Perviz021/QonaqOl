import React, { useState, useEffect, useRef } from "react";
import { chevronDown, chevronUp } from "../../assets";

const optionsMap = {
  "Kənd həyatı": "COUNTRY_LIFE",
  Kamplar: "CAMPING",
  Rəssamlıq: "PAINTING",
  "Yemək hazırlama": "COOKING",
  Dulusçuluq: "POTTERY",
  Musiqi: "MUSIC",
};

const EventCategory = ({ options, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    const englishOption = optionsMap[option]; // Map Azerbaijani option to English version
    onCategoryChange(englishOption); // Call the callback function with the English uppercase version
  };

  return (
    <div>
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Kateqoriya
      </h4>
      <div className="text-left relative" ref={dropdownRef}>
        <div>
          <button
            type="button"
            className={`inline-flex justify-between items-center w-full ${
              isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
            } border-transparent focus:border-transparent focus:ring-0 px-[20px] h-[44px] bg-[#f2f2f2] text-[16px] font-[400] focus:outline-none`}
            onClick={toggleMenu}
          >
            <span
              className={`${selectedOption ? "text-black" : "text-[#919191]"}`}
            >
              {selectedOption ? selectedOption : "Kateqroyanı seçin"}
            </span>
            <img src={isOpen ? chevronUp : chevronDown} alt="" />
          </button>
        </div>

        {isOpen && (
          <div className="origin-top-right absolute right-0 w-full rounded-b-[8px] border-transparent focus:border-transparent focus:ring-0 bg-[#f2f2f2]  focus:outline-none z-20 py-[20px] space-y-[16px]">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block w-full text-left pl-[20px] text-[16px] text-[#616161] hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCategory;
