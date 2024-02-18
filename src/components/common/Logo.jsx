import { Link } from "react-router-dom";

function Logo({ color }) {
  const textColor = color ? color : "#313131";
  return (
    <div className="px-[12px] py-[8px]">
      <Link
        to="/"
        className={`text-[18px] leading-[28px] 
          text-${[textColor]} unbounded unbounded-700`}
      >
        Qonaqol.az
      </Link>
    </div>
  );
}

export default Logo;
