import Logo from "./Logo";
import Menus from "./Menus";
import { navBtn } from "../../assets";

function Navbar() {
  return (
    <div className="mx-auto w-[1240px] flex items-center justify-between">
      <Logo />
      <Menus />
      <button className="w-[190px] py-[10px] rounded-[8px] bg-[#2B2C34] border-[0.5px] text-white inline-flex items-center space-x-[4px] justify-center">
        <img src={navBtn} alt="" className="size-[24px]" />
        <span className="text-[14px] font-[400]">Bizə qoşul</span>
      </button>
    </div>
  );
}

export default Navbar;
