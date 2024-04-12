import { Link } from "react-router-dom";

function Logo({ img }) {
  return (
    <div>
      <Link to="/">
        <img src={img} alt="" className="w-[150px] lg:w-[200px] object-cover" />
      </Link>
    </div>
  );
}

export default Logo;
