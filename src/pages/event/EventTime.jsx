import React, { useState } from "react";
import { clock } from "../../assets";

const EventTime = () => {
  const [showStartInput, setShowStartInput] = useState(false);
  const [showEndInput, setShowEndInput] = useState(false);

  const handleStartInputClick = () => {
    setShowStartInput(!showStartInput);
    setShowEndInput(!showEndInput); // Close the end input if open
  };

  const startTimeOptions = [];
  for (let hour = 9; hour <= 12; hour++) {
    startTimeOptions.push(`${hour}:00`);
    startTimeOptions.push(`${hour}:30`);
  }

  const endTimeOptions = [];
  for (let hour = 13; hour <= 16; hour++) {
    endTimeOptions.push(`${hour}:00`);
    endTimeOptions.push(`${hour}:30`);
  }

  return (
    <div className="w-[45%]">
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin saatı
      </h4>
      <button className="inline-flex justify-between items-center rounded-[8px] mb-[17px] bg-[#f2f2f2] w-full h-[44px] px-[20px]">
        <span
          className="font-[16px] text-[#919191]"
          onClick={handleStartInputClick}
        >
          Saat aralığını qeyd edin
        </span>
        <span>
          <img src={clock} alt="" />
        </span>
      </button>
      {showStartInput && (
        <div className="flex justify-evenly">
          <select
            className="rounded-[8px] bg-[#f2f2f2] w-[136px] h-[44px] px-[20px] border-transparent focus:border-transparent focus:ring-0"
            defaultValue=""
          >
            {startTimeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
          <select
            className="rounded-[8px] bg-[#f2f2f2] w-[136px] h-[44px] px-[20px] border-transparent focus:border-transparent focus:ring-0"
            defaultValue=""
          >
            {endTimeOptions.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default EventTime;
