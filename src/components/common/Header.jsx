import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderContent from "./HeaderContent";

function Header() {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div
      className={`${
        isMobile ? "pt-[80px] pb-[218px] headerBgMobile" : "bottom-[10px] z-50"
      } w-full bg-[#fff]`}
    >
      <HeaderContent />
    </div>
  );
}

export default Header;
