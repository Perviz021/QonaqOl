import React, { useState } from "react";

const EventAddress = ({ onAddressChange }) => {
  const [addressValue, setAddressValue] = useState("");

  const handleChange = (e) => {
    const address = e.target.value;
    setAddressValue(address);
    onAddressChange(address); // Pass the address value to the parent component
  };

  return (
    <div>
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">Ünvan</h4>
      <input
        type="text"
        value={addressValue}
        onChange={handleChange}
        placeholder="Küç, prospekt, mənzil, ev"
        className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px]"
      />
    </div>
  );
};

export default EventAddress;
