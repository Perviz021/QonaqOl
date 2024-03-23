// EventTime.js
import React, { useState } from "react";
import { clock } from "../../assets";

const EventTime = ({ onStartTimeChange, onEndTimeChange }) => {
  const [showTimeInputs, setShowTimeInputs] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleTimeInputClick = (e) => {
    e.preventDefault();
    setShowTimeInputs(!showTimeInputs);
  };

  const startTimeOptions = [];
  for (let hour = 9; hour <= 21; hour++) {
    startTimeOptions.push(`${hour}:00`);
    startTimeOptions.push(`${hour}:30`);
  }

  const endTimeOptions = [];
  for (let hour = 9; hour <= 21; hour++) {
    endTimeOptions.push(`${hour}:00`);
    endTimeOptions.push(`${hour}:30`);
  }

  const handleStartTimeChange = (e) => {
    const start = e.target.value;
    setStartTime(start);
    onStartTimeChange(start);
  };

  const handleEndTimeChange = (e) => {
    const end = e.target.value;
    setEndTime(end);
    onEndTimeChange(end);
  };

  return (
    <div className="w-[45%]">
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin saatı
      </h4>
      <button
        onClick={(e) => handleTimeInputClick(e)}
        className="inline-flex justify-between items-center rounded-[8px] mb-[17px] bg-[#f2f2f2] w-full h-[44px] px-[20px]"
      >
        <span className="font-[16px] text-[#919191]">
          Saat aralığını qeyd edin
        </span>
        <span>
          <img src={clock} alt="" />
        </span>
      </button>
      {showTimeInputs && (
        <div className="flex justify-between">
          <div className="w-[45%]">
            <p className="text-[#919191] bg-[#f2f2f2] text-[12px] flex flex-col rounded-t-[8px] pt-2 pb-0 pl-3 relative top-1">
              <span>Başlayır</span>
            </p>
            <select
              className="rounded-b-[8px] text-[12px] bg-[#f2f2f2] w-full h-[44px] px-[20px] border-transparent focus:border-transparent focus:ring-0"
              value={startTime}
              onChange={handleStartTimeChange}
            >
              <option value="" className="text-center">
                Saatı qeyd edin
              </option>
              {startTimeOptions.map((time, index) => (
                <option key={index} value={time} className="text-center">
                  {time}
                </option>
              ))}
            </select>
          </div>
          <div className="w-[45%]">
            <p className="text-[#919191] bg-[#f2f2f2] text-[12px] flex flex-col rounded-t-[8px] pt-2 pb-0 pl-3 relative top-1">
              <span>Bitir</span>
            </p>
            <select
              className="rounded-b-[8px] text-[12px] bg-[#f2f2f2] w-full h-[44px] px-[20px] border-transparent focus:border-transparent focus:ring-0"
              value={endTime}
              onChange={handleEndTimeChange}
            >
              <option value="" className="text-center">
                Saatı qeyd edin
              </option>
              {endTimeOptions.map((time, index) => (
                <option key={index} value={time} className="text-center">
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTime;
