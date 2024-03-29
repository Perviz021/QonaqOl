import { useState } from "react";
import { FacebookShareButton, WhatsappShareButton } from "react-share";
import { copy, copySuccess, facebook, whatsapp } from "../../../assets";

const Share = ({ shareUrl }) => {
  const [success, setSuccess] = useState(false);
  const copiedFn = () => {
    navigator.clipboard.writeText(window.location.href);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };
  return (
    <div className="relative w-[192px] p-5 flex items-center justify-center h-[169px] bg-[#f6f6f6] rounded-[4px] ">
      <div
        className=" absolute -top-[15px] right-0 w-0 h-0 
  border-l-[12px] border-l-transparent
  border-b-[15px] border-b-[#F6F6F6]
  border-r-[12px] border-r-transparent"
      ></div>
      <div className="flex flex-col gap-5">
        <FacebookShareButton title="facebook" url={shareUrl}>
          <span className="flex items-center gap-2">
            <img src={facebook} alt="" /> Facebook
          </span>
        </FacebookShareButton>
        <WhatsappShareButton title="whatsapp" url={shareUrl}>
          <span className="flex items-center gap-2">
            <img src={whatsapp} alt="" /> Whatsapp
          </span>
        </WhatsappShareButton>
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={copiedFn}
        >
          {success ? (
            <>
              <img src={copySuccess} alt="" /> Link copied
            </>
          ) : (
            <>
              <img src={copy} alt="" /> Copy Link
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Share;
