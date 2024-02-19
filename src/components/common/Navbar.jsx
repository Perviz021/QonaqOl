import React, { useState } from "react";
import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import Menus from "./Menus";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="mx-auto w-[1240px] flex items-center justify-between mt-[20px]">
      <Logo />
      <Menus isLoggedIn={isLoggedIn} />
      <LoginButton
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default Navbar;
