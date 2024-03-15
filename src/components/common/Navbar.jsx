import { useState } from "react";
import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import Menus from "./Menus";

function Navbar() {
  const [activeNavLink, setActiveNavLink] = useState("");

  const clearActiveLink = () => {
    setActiveNavLink("");
  };

  return (
    <div className="mx-auto w-[1240px] flex items-center justify-between mt-[20px]">
      <Logo clearActiveLink={clearActiveLink} />
      <Menus
        activeNavLink={activeNavLink}
        setActiveNavLink={setActiveNavLink}
      />
      <LoginButton />
    </div>
  );
}

export default Navbar;
