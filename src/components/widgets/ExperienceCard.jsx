import { useEffect } from "react";
import { Link } from "react-router-dom";
import { month } from "../../mock/static";

const ExperienceCard = ({
  name,
  imgSrc,
  content,
  time,
  place,
  price,
  imgWidth,
  imgHeight,
}) => {
  const event_name = name && name.replace(/\s+/g, "-");

  const imageClass =
    imgWidth && imgHeight
      ? `w-[${imgWidth}] h-[${imgHeight}]`
      : "w-full h-[197px]";

  return (
    <Link
      to={`/events/${event_name}`}
      className={`mx-auto bg-white rounded-t-[8px] ${imageClass}`}
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          className={`${imageClass} object-cover rounded-[8px]`}
          src={imgSrc}
          alt="Experience Card Image"
        />
        <span className="absolute bottom-[10px] right-[10px] font-[500] text-[14px] bg-[#101010] rounded-[16px] p-[8px] opacity-55 text-[#fff]">
          {price}
        </span>
      </div>
      <div className="pt-[16px] space-y-[8px]">
        <h5 className="font-[600] text-[18px]">{content}</h5>
        <p className="flex items-center space-x-3 w-full text-[16px] font-[400]">
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {`${time[2]} ${month[time[1] - 1]}`}
          </span>
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {place}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
