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
    <div className="px-[20px] lg:mx-auto w-full lg:w-[1240px] flex items-center justify-between mt-[10px] lg:mt-[20px]">
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
