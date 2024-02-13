import { useState } from "react";

const SubscriptionButton = () => {
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setShowPlaceholder(false); // Hide placeholder when user starts typing
  };

  return (
    <button className="relative w-[495px] inline-flex items-center justify-center bg-[#FFFFFE] overflow-hidden border border-[#6246EA] text-[#2B2C34] text-[14px] font-inter font-[400] rounded-[13px]">
      <input
        type="text"
        value={email}
        onChange={handleInputChange}
        placeholder={showPlaceholder ? "Email Address" : ""}
        className="text-[#2B2C34] outline-none border-none focus:outline-none flex-1 px-[26px] py-[21px]"
      />
      <span className="absolute right-0 top-0 bottom-0 flex items-center justify-center  fomt-bold font-inter text-[14px] text-[#FFFFFE] bg-[#6246EA] py-[21px] px-[26px]">
        Subscribe
      </span>
    </button>
  );
};

export default SubscriptionButton;
