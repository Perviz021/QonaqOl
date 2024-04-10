import React, { useState } from "react";
import { chevronDown, clock } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const EventTime = ({ onStartTimeChange, onEndTimeChange }) => {
  const [showTimeInputs, setShowTimeInputs] = useState(false);
  const [showStartTimeInputs, setShowStartTimeInputs] = useState(false);
  const [showEndTimeInputs, setShowEndTimeInputs] = useState(false);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const startTimeOptions = [];
  const endTimeOptions = [];
  for (let hour = 9; hour < 20; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      // Convert hour and minute to string with leading zeros if necessary
      let hourStr = hour < 10 ? "0" + hour.toString() : hour.toString();
      let minuteStr = minute === 0 ? "00" : minute.toString();

      // Concatenate hour and minute with ':' separator
      let time = hourStr + ":" + minuteStr;

      // Add time to the array
      startTimeOptions.push(time);
      endTimeOptions.push(time);
    }
  }
  startTimeOptions.push("20:00");
  endTimeOptions.push("20:00");

  const handleStartTime = (start) => {
    setStartTime(start);
    onStartTimeChange(start);
    setShowStartTimeInputs(false);
  };

  const handleEndTime = (end) => {
    setEndTime(end);
    onEndTimeChange(end);
    setShowEndTimeInputs(false);
  };

  return (
    <div className={`${isMobile ? "w-full" : "w-[50%]"}`}>
      <h4 className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin saatı
      </h4>

      <div
        className="flex items-center justify-between bg-[#f2f2f2] rounded-lg py-[10px] px-[20px] cursor-pointer"
        onClick={() => setShowTimeInputs(!showTimeInputs)}
      >
        <span
          className={`text-[#000] ${
            startTime && endTime ? "" : "text-[#00000066]"
          } leading-[24px]`}
        >
          {startTime && endTime
            ? `${startTime} - ${endTime}`
            : "Saat aralığını qeyd edin"}
        </span>
        <span>
          <img src={clock} alt="" />
        </span>
      </div>

      {showTimeInputs && (
        <div className="flex items-start mt-[14px] mr-[78px] space-x-[40px]">
          {/* Start Time Inputs */}
          <div className="w-[136px]">
            <div
              className="rounded-[4px] bg-[#f2f2f2] px-[8px] py-[3.5px] h-[44px]"
              onClick={() => setShowStartTimeInputs(!showStartTimeInputs)}
            >
              <p className="text-[#919191CC] text-[8px]">Başlayır</p>
              <div className="flex items-center justify-around py-[4px]">
                <span className="text-[10px]">{startTime || "09:00"}</span>
                <span>
                  <img src={chevronDown} alt="" className="size-[16px]" />
                </span>
              </div>
            </div>
            {showStartTimeInputs && (
              <div className="w-[94px] rounded-[4px] mt-[4px] h-[304px] overflow-auto">
                {startTimeOptions.map((start, index) => (
                  <div
                    className="bg-[#f2f2f2] border-b border-b-[#fff] text-[12px] flex justify-center items-center py-[6px] cursor-default"
                    key={index}
                    onClick={() => handleStartTime(start)}
                  >
                    {start}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* End Time Inputs */}
          <div className="w-[136px]">
            <div
              className="rounded-[4px] bg-[#f2f2f2] px-[8px] py-[3.5px] h-[44px]"
              onClick={() => setShowEndTimeInputs(!showEndTimeInputs)}
            >
              <p className="text-[#919191CC] text-[8px]">Bitir</p>
              <div className="flex items-center justify-around py-[4px]">
                <span className="text-[10px]">{endTime || "13:00"}</span>
                <span>
                  <img src={chevronDown} alt="" className="size-[16px]" />
                </span>
              </div>
            </div>
            {showEndTimeInputs && (
              <div className="w-[94px] rounded-[4px] mt-[4px] h-[304px] overflow-auto">
                {endTimeOptions.map((end, index) => (
                  <div
                    className="bg-[#f2f2f2] border-b border-b-[#fff] text-[12px] flex justify-center items-center py-[6px] cursor-default"
                    key={index}
                    onClick={() => handleEndTime(end)}
                  >
                    {end}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventTime;
