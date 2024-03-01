import React, { useState } from "react";
import { clock } from "../../assets";

const EventTime = () => {
  const [showInputs, setShowInputs] = useState(false);

  const handleButtonClick = () => {
    setShowInputs(!showInputs); // Toggles the state
  };

  return (
    <div className="w-[45%]">
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin saatı
      </h4>
      <button
        className="inline-flex justify-between items-center rounded-[8px] bg-[#f2f2f2] w-full h-[44px] px-[20px]"
        onClick={handleButtonClick}
      >
        <span className="font-[16px] text-[#919191]">
          Saat aralığını qeyd edin
        </span>
        <span>
          <img src={clock} alt="" />
        </span>
      </button>
      {showInputs && (
        <div className="flex mt-2">
          <input
            type="text"
            className="rounded-[8px] bg-[#f2f2f2] w-[calc(50%-5px)] h-[44px] px-[20px] mr-2"
            placeholder="Başlangıç Saati"
          />
          <input
            type="text"
            className="rounded-[8px] bg-[#f2f2f2] w-[calc(50%-5px)] h-[44px] px-[20px] ml-2"
            placeholder="Bitiş Saati"
          />
        </div>
      )}
    </div>
  );
};

export default EventTime;
