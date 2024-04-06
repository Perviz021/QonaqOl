import { directbox } from "../../assets";

const SubscriptionButton = () => {
  return (
    <>
      <button className="inline-flex items-center lg:w-[90%]">
        <input
          type="text"
          placeholder="Email ünvanı"
          className="px-[20px] py-[9px] lg:py-[12px] flex-1 bg-white text-[#000] border-none border-transparent focus:border-transparent focus:ring-0 text-[14px] lg:placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#474744] rounded-l-[8px]"
        />
        <span className="flex items-center space-x-[8px] text-[14px] lg:text-[16px] px-[10px] lg:px-[54px] bg-[#FFCE00] h-[40px] lg:h-[48px] rounded-r-[8px]">
          <img src={directbox} alt="" className="size-[20px] lg:size-[25px]" />
          Abunə ol
        </span>
      </button>
    </>
  );
};

export default SubscriptionButton;
