import { FacebookShareButton, WhatsappShareButton } from "react-share";

const Share = ({ shareUrl }) => {
  const copiedFn = () => {
    navigator.clipboard.writeText(window.location.href);
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
            <img src="/src/assets/icons/facebook.svg" alt="" /> FaceBook
          </span>
        </FacebookShareButton>
        <WhatsappShareButton title="whatsapp" url={shareUrl}>
          <span className="flex items-center gap-2">
            <img src="/src/assets/icons/instagram.svg" alt="" /> Whatsapp
          </span>
        </WhatsappShareButton>
        <span
          className="flex items-center gap-2 cursor-pointer"
          onClick={copiedFn}
        >
          <img src="/src/assets/icons/copy-success.svg" alt="" /> Link copied
        </span>
      </div>
    </div>
  );
};

export default Share;
