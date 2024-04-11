import React, { useState, useRef, useEffect } from "react";
import { money } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const EventPrice = ({ onEventPriceChange }) => {
  const [price, setPrice] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const handleChange = (event) => {
    // Ensure only numbers are entered
    const inputPrice = event.target.value.replace(/\D/g, "");
    setPrice(inputPrice);
    onEventPriceChange(Number(inputPrice)); // Pass the price as a number to the parent component
  };

  const handleKeyDown = (event) => {
    // Handle Backspace key
    if (event.key === "Backspace") {
      // Prevent default behavior to avoid removing the ' AZN' text
      event.preventDefault();
      // Remove the last character from price
      setPrice(price.slice(0, -1));
      onEventPriceChange(Number(price.slice(0, -1))); // Pass the updated price as a number to the parent component
    }
  };

  return (
    <div className={`${isMobile ? "w-full" : "w-[50%]"}`}>
      <h4 className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]">
        Qiymət
      </h4>
      <div className="relative">
        <input
          type="text"
          placeholder={
            isMobile
              ? "1 nəfər üçün (AZN)"
              : "1 nəfər üçün nəzərdə tutulan (AZN)"
          }
          className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px] placeholder:text-[#00000066]"
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
