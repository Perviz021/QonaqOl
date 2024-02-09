import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src="./logo.png" alt="logo image" className="w-[200px] " />
      </Link>
    </div>
  );
}

export default Logo;
