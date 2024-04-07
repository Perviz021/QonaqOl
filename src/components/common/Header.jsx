import { useMediaQuery } from "@uidotdev/usehooks";
import HeaderContent from "./HeaderContent";

function Header() {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div
      className={`${
        isMobile ? "pt-[80px] pb-[218px]" : "bottom-[10px]"
      } w-full bg-[#fff] z-50`}
    >
      <HeaderContent />
    </div>
  );
}

export default Header;
