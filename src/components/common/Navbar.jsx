import LoginButton from "../ui/LoginButton";
import Logo from "./Logo";
import Menus from "./Menus";

function Navbar() {
  return (
    <div className="mx-auto w-[1240px] flex items-center justify-between mt-[20px]">
      <Logo />
      <Menus />
      <LoginButton />
    </div>
  );
}

export default Navbar;
