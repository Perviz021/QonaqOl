import Navbar from "./Navbar";
import headerBg from "../../assets/img/header-bg.png";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <div className="h-screen w-full relative overflow-hidden pt-[52px]">
      <img
        src={headerBg}
        alt="header background"
        className="absolute inset-0 img-cover"
      />
      <Navbar />
      <HeaderContent />
    </div>
  );
}

export default Header;
