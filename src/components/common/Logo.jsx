import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="px-[12px] py-[8px]">
      <Link
        to="/"
        className="font-bold text-[18px] leading-[28px] text-[#313131] unbounded unbounded-700"
      >
        Qonaqol.az
      </Link>
    </div>
  );
}

export default Logo;
