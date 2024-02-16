const ExperienceCard = ({ imgSrc, content, time, place }) => {
  return (
    <div className="w-[295px] mx-auto bg-white rounded-t-[8px] overflow-hidden">
      <img
        className="w-full h-[200px] object-cover"
        src={imgSrc}
        alt="Experience Card Image"
      />
      <div className="pt-[16px] space-y-[8px]">
        <h5 className="font-[600] text-[18px]">{content}</h5>
        <p className="flex items-center space-x-3 w-full text-[16px] font-[400]">
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {time}
          </span>
          <span className="relative pl-2 after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-[#2B2C34] after:size-[4px] after:rounded-full">
            {place}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;
