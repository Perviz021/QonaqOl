import { useMediaQuery } from "@uidotdev/usehooks";
import { directbox } from "../../assets";

const SubscriptionButton = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <>
      <button
        className={`${
          isMobile ? "w-full" : "w-[90%]"
        } inline-flex items-center`}
      >
        <input
          type="text"
          placeholder="Email ünvanı"
          className={`${
            isMobile
              ? "py-[9px] text-[14px] flex-1"
              : "py-[12px] lg:placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#474744]"
          } px-[20px] bg-white text-[#000] border-none border-transparent focus:border-transparent focus:ring-0 rounded-l-[8px]`}
        />
        <span
          className={`${
            isMobile
              ? "text-[14px] px-[10px] h-[40px] w-[102px]"
              : "text-[16px] px-[54px] h-[48px]"
          } flex items-center space-x-[8px] cursor-pointer bg-[#FFCE00] rounded-r-[8px]`}
        >
          <img
            src={directbox}
            alt=""
            className={`${isMobile ? "size-[20px]" : "size-[25px]"}`}
          />
          Abunə ol
        </span>
      </button>
    </>
  );
};

export default SubscriptionButton;
