import { Link } from "react-router-dom";

function Logo({ clearActiveLink, img }) {
  const handleLogoClick = () => {
    // Call the function to clear active link state in the parent component
    clearActiveLink();
  };
  return (
    <div>
      <Link to="/" onClick={handleLogoClick}>
        <img src={img} alt="" className="w-[150px] lg:w-[200px] object-cover" />
      </Link>
    </div>
  );
}

export default Logo;
