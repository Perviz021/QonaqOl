import { useState } from "react";
import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import Menus from "./Menus";
import { useMediaQuery } from "@uidotdev/usehooks";

function Navbar() {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const [activeNavLink, setActiveNavLink] = useState("");

  const clearActiveLink = () => {
    setActiveNavLink("");
  };

  return (
    <div
      className={`${
        isMobile
          ? "w-full relative z-30 px-[20px]"
          : "w-[1240px] mx-auto mt-[20px]"
      } flex items-center justify-between`}
    >
      <Logo clearActiveLink={clearActiveLink} />
      {!isMobile ? (
        <>
          <Menus
            activeNavLink={activeNavLink}
            setActiveNavLink={setActiveNavLink}
          />
          <LoginButton />
        </>
      ) : (
        <div className="flex items-center space-x-[8px]">
          <LoginButton />
          <Menus
            activeNavLink={activeNavLink}
            setActiveNavLink={setActiveNavLink}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
