import { useMediaQuery } from "@uidotdev/usehooks";
import { close, done } from "../../assets";

const PopupMessage = ({
  textMessage,
  handleContinueButtonClick,
  setShowSuccessPopup,
}) => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full px-[20px] flex justify-center items-center bg-black bg-opacity-50">
      <div
        className={`${
          isMobile
            ? "size-[353px] pt-[76px] pb-[43px] px-[26px]"
            : "w-[480px] pt-[104px] pb-[75px] px-[101px]"
        } bg-white rounded-[8px] flex flex-col items-center justify-center relative`}
      >
        <button
          className="absolute top-[28px] right-[28px]"
          onClick={setShowSuccessPopup(false)}
        >
          <img src={close} alt="" />
        </button>
        <span
          className={`${
            isMobile ? "size-[80px]" : "size-[100px]"
          } p-[25px] inline-flex justify-center items-center mb-[33px] bg-[#44AA55] rounded-full`}
        >
          <img src={done} alt="" />
        </span>
        <p className="text-base mb-[47px] text-center">{textMessage}</p>
        <button
          onClick={handleContinueButtonClick}
          className="bg-[#FFCE00] text-black h-[40px] w-[278px] text-[12px] rounded-[8px] focus:outline-none"
        >
          Davam et
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
