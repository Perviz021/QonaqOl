import React from "react";
import { done } from "../../assets";

const PopupMessage = ({ textMessage, handleContinueButtonClick }) => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-[500px] pt-[80px] pb-[80px] px-[100px] rounded-[8px] flex flex-col items-center justify-center">
        <span className="p-[25px] inline-flex justify-center items-center mb-[33px] bg-[#44AA55] rounded-full w-[100px] h-[100px]">
          <img src={done} alt="" />
        </span>
        <p className="text-[20px] leading-[28px] font-[600] mb-[59px] text-center">
          {textMessage}
        </p>
        <button
          onClick={handleContinueButtonClick}
          className="bg-[#FFCE00] text-black h-[48px] w-[278px] text-[16px] rounded-[8px] focus:outline-none"
        >
          Davam et
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
