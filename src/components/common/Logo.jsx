import { Link } from "react-router-dom";

function Logo({ color, clearActiveLink }) {
  const textColor = color ? color : "#313131";

  const handleLogoClick = () => {
    // Call the function to clear active link state in the parent component
    clearActiveLink();
  };
  return (
    <div className="px-[12px] py-[8px]">
      <Link
        to="/"
        className={`text-[18px] leading-[28px] 
          text-${[textColor]} unbounded unbounded-700`}
        onClick={handleLogoClick}
      >
        Qonaqol.az
      </Link>
    </div>
  );
}

export default Logo;
