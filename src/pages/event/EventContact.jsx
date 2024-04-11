import React, { useState } from "react";

const EventContact = ({ onPhoneNumberChange }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const placeholder = "+994 XX XXX XX XX";

  const handleInputChange = (e) => {
    let inputValue = e.target.value;
    // Allow only digits and limit input to 12 characters
    inputValue = inputValue.replace(/\D/g, "").slice(0, 12);

    // Remove "+994" if the input only contains it
    if (inputValue === "+994" || inputValue === "994") {
      setPhoneNumber("");
    } else {
      // Ensure the input starts with +994 only if it doesn't already start with it
      if (!inputValue.startsWith("+994")) {
        if (inputValue.startsWith("994")) {
          inputValue = "+" + inputValue;
        } else {
          inputValue = "+994" + inputValue;
        }
      }
      setPhoneNumber(inputValue);
      onPhoneNumberChange(inputValue);
    }
  };

  return (
    <div>
      <h4 className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]">
        Əlaqə
      </h4>
      <input
        type="text"
        placeholder={phoneNumber ? phoneNumber : placeholder}
        className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px] placeholder:text-[#00000066]"
        value={phoneNumber}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default EventContact;
