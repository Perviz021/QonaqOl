import React, { useState, useRef, useEffect } from "react";
import { money } from "../../assets";

const EventPrice = ({ onPriceChange }) => {
  const [price, setPrice] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input when component mounts
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    // Ensure only numbers are entered
    const inputPrice = event.target.value.replace(/\D/g, "");
    setPrice(inputPrice);
    onPriceChange(Number(inputPrice)); // Pass the price as a number to the parent component
  };

  const handleKeyDown = (event) => {
    // Handle Backspace key
    if (event.key === "Backspace") {
      // Prevent default behavior to avoid removing the ' AZN' text
      event.preventDefault();
      // Remove the last character from price
      setPrice(price.slice(0, -1));
      onPriceChange(Number(price.slice(0, -1))); // Pass the updated price as a number to the parent component
    }
  };

  return (
    <div className="w-[45%]">
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Qiymət
      </h4>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="1 nəfər üçün nəzərdə tutulan (AZN)"
          className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px]"
          value={price ? price + " AZN" : ""}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <span className="absolute right-[20px] top-[10px] cursor-pointer">
          <img src={money} alt="" />
        </span>
      </div>
    </div>
  );
};

export default EventPrice;
