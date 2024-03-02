import React, { useState } from "react";

const EventAddress = () => {
  const [addressValue, setAddressValue] = useState("");
  return (
    <div>
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">Ünvan</h4>
      <input
        type="text"
        value={addressValue}
        onChange={(e) => setAddressValue(e.target.value)}
        placeholder="Küç, prospekt, mənzil, ev"
        className="text-[16px] bg-[#f2f2f2] w-full border-transparent focus:border-transparent focus:ring-0 rounded-[8px] px-[20px]"
      />
    </div>
  );
};

export default EventAddress;
