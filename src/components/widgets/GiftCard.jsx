import React from "react";

const GiftCard = ({ imgSrc, showPopup }) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img src={imgSrc} alt="" />
      </div>
      <span className="mt-[24px]">
        <button
          onClick={showPopup}
          className="border-[#E5E5E5] border rounded-[8px] px-[70px] h-[44px] shrink-0"
        >
          İndi al
        </button>
      </span>
    </div>
  );
};

export default GiftCard;
