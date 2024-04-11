import React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const GiftCard = ({ imgSrc, showPopup }) => {
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");

  return (
    <div className={`${isMobile ? "w-full" : ""} flex flex-col items-center`}>
      <div className={`${isMobile ? "w-full" : ""}`}>
        <img src={imgSrc} alt="" />
      </div>
      <span className={`${isMobile ? "w-full" : ""} mt-[24px]`}>
        <button
          onClick={showPopup}
          className={`${
            isMobile ? "w-full" : "px-[70px]"
          } border-[#E5E5E5] border rounded-[8px] h-[44px] shrink-0`}
        >
          İndi al
        </button>
      </span>
    </div>
  );
};

export default GiftCard;
