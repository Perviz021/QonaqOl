import Navbar from "./Navbar";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <div className="h-screen w-full bg-[#fff] overflow-hidden pt-[52px]">
      <Navbar />
      <HeaderContent />
    </div>
  );
}

export default Header;
