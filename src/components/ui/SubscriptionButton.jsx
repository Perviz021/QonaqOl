import { useMediaQuery } from "@uidotdev/usehooks";
import { directbox } from "../../assets";
import { useState } from "react";
import { isEmailValid } from "../../utils/authUtils";

const SubscriptionButton = () => {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const [email, setEmail] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleClick = (value) => {
    if (isEmailValid(value)) {
      setEmail("");
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } else {
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);
    }
  };

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
          value={email}
          className={`${
            isMobile
              ? "py-[9px] text-[14px] w-[218px]"
              : "w-[400px] py-[12px] placeholder:text-[16px] placeholder:font-[400] placeholder:text-[#474744]"
          } px-[20px] bg-white text-[#000] border-none border-transparent focus:border-transparent focus:ring-0 rounded-l-[8px]`}
          onChange={(e) => handleEmail(e)}
        />
        <span
          onClick={() => handleClick(email)}
          className={`${
            isMobile
              ? "text-[14px] px-[10px] h-[40px] justify-center"
              : "text-[16px] px-[54px] h-[48px] justify-center"
          } flex items-center flex-1 space-x-[8px] cursor-pointer bg-[#FFCE00] rounded-r-[8px]`}
        >
          <img
            src={directbox}
            alt=""
            className={`${isMobile ? "size-[20px]" : "size-[25px]"}`}
          />
          <span>Abunə ol</span>
        </span>
      </button>

      {showSuccessMessage && (
        <div className="relative flex justify-center">
          <span className="inline-flex message success show">
            Abunəliyiniz üçün təşəkkür edirik!
          </span>
        </div>
      )}

      {showErrorMessage && (
        <div className="relative flex justify-center">
          <span className="inline-flex message error show">
            E-poçt formatı yanlışdır!
          </span>
        </div>
      )}
    </>
  );
};

export default SubscriptionButton;
