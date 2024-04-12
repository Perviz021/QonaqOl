import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import Menus from "./Menus";
import { useMediaQuery } from "@uidotdev/usehooks";
import { logo } from "../../assets";

function Navbar() {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div
      className={`${
        isMobile
          ? "w-full relative z-30 px-[20px] pt-[10px]"
          : "w-[1240px] mx-auto  mt-[10px]"
      } flex items-center justify-between`}
    >
      <Logo img={logo} />
      {!isMobile ? (
        <>
          <Menus />
          <LoginButton />
        </>
      ) : (
        <div className="flex items-center space-x-[8px]">
          <LoginButton />
          <Menus />
        </div>
      )}
    </div>
  );
}

export default Navbar;
