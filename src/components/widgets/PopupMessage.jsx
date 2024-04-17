import { useMediaQuery } from "@uidotdev/usehooks";
import { close, done } from "../../assets";

const PopupMessage = ({
  textMessage,
  handleContinueButtonClick,
  setShowSuccessPopup,
}) => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full px-[20px] flex justify-center items-center bg-black bg-opacity-50">
      <div
        className={`${
          isMobile
            ? "size-[353px] pt-[76px] pb-[43px] px-[26px]"
            : "w-[480px] pt-[104px] pb-[67px] px-[53px]"
        } bg-white rounded-[8px] flex flex-col items-center justify-center relative`}
      >
        <button
          className="absolute top-[28px] right-[28px] lg:top-[12px] lg:right-[12px]"
          onClick={closePopup}
        >
          <img src={close} alt="" />
        </button>
        <span className="size-[80px] lg:size-[100px] p-[25px] inline-flex justify-center items-center bg-[#44AA55] rounded-full">
          <img src={done} alt="" />
        </span>
        <p className="text-base text-center my-[26px]">{textMessage}</p>
        <button
          onClick={handleContinueButtonClick}
          className="bg-[#FFCE00] text-black h-[48px] w-[278px] text-base rounded-[8px] focus:outline-none"
        >
          Davam et
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
