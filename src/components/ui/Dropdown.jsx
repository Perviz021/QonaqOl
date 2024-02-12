import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Kateqoriyalar");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown-button inline-flex justify-center w-[168px] bg-[#F2F4FF]  shadow-sm px-4 py-2 font-medium text-[#1D275F] focus:outline-none text-[14px] rounded-[50px]`}
        onClick={toggleDropdown}
      >
        <span>{selectedOption}</span>
        {isOpen ? (
          <FiChevronUp className="-mr-1 ml-2 h-5 w-5" />
        ) : (
          <FiChevronDown
            className="-mr-1 ml-2 h-5 w-5"
            onClick={toggleDropdown}
          />
        )}
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 -ml-1 w-full rounded-[16px] overflow-hidden shadow-lg focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1 bg-[#F2F4FF]" role="none">
            <button
              onClick={() => handleOptionSelect("Sport")}
              className="block w-full text-left px-4 py-2 text-sm text-[#1D275F] cursor-default"
              role="menuitem"
            >
              İdman
            </button>
            <button
              onClick={() => handleOptionSelect("Clay")}
              className="block w-full text-left px-4 py-2 text-sm text-[#1D275F] cursor-default"
              role="menuitem"
            >
              Dulusçuluq
            </button>
            <button
              onClick={() => handleOptionSelect("Cooking")}
              className="block w-full text-left px-4 py-2 text-sm text-[#1D275F] cursor-default"
              role="menuitem"
            >
              Cooking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
