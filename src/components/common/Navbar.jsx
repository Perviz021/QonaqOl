import Logo from "./Logo";
import Menus from "./Menus";

function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 mx-auto w-[1240px] flex items-center justify-between">
      <Logo />
      <Menus />
      <button className="h-[56px] rounded-[27px] px-[36px] bg-[#CFCFCF] bg-opacity-20 border-[3px] text-white text-[20px] font-medium">
        Bizə qoşul!
      </button>
    </div>
  );
}

export default Navbar;
