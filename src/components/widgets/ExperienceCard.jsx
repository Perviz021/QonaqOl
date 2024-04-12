import { Link } from "react-router-dom";
import { month } from "../../mock/static";

const ExperienceCard = ({
  id,
  name,
  imgSrc,
  content,
  time,
  place,
  price,
  imgWidth,
  imgHeight,
}) => {
  // const event_name = name && name.replace(/\s+/g, "-");
  const productName = name.replace(/\s+/g, "-");

  const imageClass =
    imgWidth && imgHeight
      ? `lg:w-[${imgWidth}] lg:h-[${imgHeight}]`
      : "lg:w-full lg:h-[197px]";

  return (
    <Link
      to={`/events/${productName}?id=${id}`}
      className={`mx-auto bg-white rounded-t-[8px] ${imageClass}`}
    >
      <div className="relative lg:w-full lg:h-full overflow-hidden w-[150px] h-[120px]">
        <img
          className={`w-full h-full ${imageClass} object-cover rounded-t-[8px] lg:rounded-[8px] flex items-center justify-center`}
          src={imgSrc}
          alt="Experience Card Image"
        />
        <span className="absolute bottom-[10px] right-[10px] font-[500] text-[8px] lg:text-[14px] bg-[#101010] rounded-[16px] p-[8px] opacity-55 text-[#fff]">
          {price}
        </span>
      </div>
      <div className="pt-[12px] lg:pt-[16px] space-y-[8px]">
        <h5 className="font-[600] text-[12px] leading-[20px] lg:text-[18px]">
          {name.length < 35 ? name : name.slice(0, 25) + "..."}
        </h5>
        <p className="flex items-center space-x-3 w-full text-[8px] lg:text-[16px] font-[400]">
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {`${time[2]} ${month[time[1] - 1]}`}
          </span>
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {place.length < 35 ? place : place.slice(0, 25) + "..."}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default ExperienceCard;
