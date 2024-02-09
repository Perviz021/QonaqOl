import { FiSearch } from "react-icons/fi";

function HeaderContent() {
  return (
    <div className="w-[630px] top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2 text-white text-center p-[45px]">
      <h1 className="text-[60px] font-medium leading-[79px] mb-[40px]">
        Make good use of your time
      </h1>
      <button className="w-full inline-flex items-center justify-between h-[62px] bg-[#fff] rounded-[88px] pl-[44px] border-[#fff] border-[1px] focus:outline-none">
        <span className="text-[20px] font-[400] text-[#878787]">
          Where are you going?
        </span>
        <span className="text-white h-full bg-[#FFCE00] inline-flex items-center space-x-2 rounded-[88px] px-[40px]">
          <FiSearch className="text-[22px]" />
          <span className="text-[20px] font-[400]">Search</span>
        </span>
      </button>
    </div>
  );
}

export default HeaderContent;
