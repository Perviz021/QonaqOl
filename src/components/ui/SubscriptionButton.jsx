import { directbox } from "../../assets";

const SubscriptionButton = () => {
  return (
    <>
      <button className="inline-flex items-center w-[90%]">
        <input
          type="text"
          placeholder="Email ünvanı"
          className="px-[20px] py-[12px] flex-1 bg-white text-[#000] border-none border-transparent focus:border-transparent focus:ring-0 placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#474744]"
        />
        <span className="flex items-center space-x-[8px] px-[54px] bg-[#FFCE00] h-[48px] rounded-r-[8px]">
          <img src={directbox} alt="" />
          Abunə ol
        </span>
      </button>
    </>
  );
};

export default SubscriptionButton;
