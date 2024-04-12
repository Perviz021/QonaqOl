import { useState } from "react";
import { money } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";

const EventPrice = ({ onEventPriceChange }) => {
  const [price, setPrice] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const handleChange = (e) => {
    // Ensure only numbers are entered
    const inputPrice = e.target.value.replace(/[^0-9]/g, "");

    setPrice(inputPrice);
    onEventPriceChange(Number(inputPrice));
  };

  return (
    <div className={`${isMobile ? "w-full" : "w-[50%]"}`}>
      <h4 className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]">
        Qiymət
      </h4>
      <div className="relative">
        <span className="absolute top-[11px] left-[20px]">AZN</span>
        <input
          type="text"
          className="input-default border-none placeholder:text-[#00000066] !pl-[60px]"
          placeholder="1 nəfər üçün"
          value={price}
          onChange={handleChange}
        />
        <span className="absolute right-[20px] top-[10px]">
          <img src={money} alt="" />
        </span>
      </div>
    </div>
  );
};

export default EventPrice;
