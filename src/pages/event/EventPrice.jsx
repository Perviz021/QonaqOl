import React, { useState } from "react";
import { money } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const EventPrice = ({ onEventPriceChange }) => {
  const [price, setPrice] = useState("");

  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const handleChange = (event) => {
    // Extract numeric characters only from input value
    const inputPrice = event.target.value.replace(/\D/g, "");

    // Update price state with the numeric value
    setPrice(inputPrice);

    // Pass the price as a number to the parent component
    onEventPriceChange(Number(inputPrice));
  };

  const handleKeyDown = (event) => {
    // Handle Backspace key
    if (event.key === "Backspace") {
      // Prevent default behavior to avoid unwanted side effects
      event.preventDefault();

      // Remove the last character from price state
      const updatedPrice = price.slice(0, -1);

      // Update price state with the updated value
      setPrice(updatedPrice);

      // Pass the updated price as a number to the parent component
      onEventPriceChange(Number(updatedPrice));
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
          placeholder="AZN 1 nəfər üçün"
          className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px] placeholder:text-[#00000066]"
          value={price !== "" ? `${price} AZN` : ""}
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
