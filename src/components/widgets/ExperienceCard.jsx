const ExperienceCard = ({ imgSrc, content, time, place, price, imgHeight }) => {
  return (
    <div className="w-[295px] mx-auto bg-white rounded-t-[8px] overflow-hidden">
      <div className={`w-full h-[197px] relative overflow-hidden`}>
        <img className="img-cover" src={imgSrc} alt="Experience Card Image" />
        <span className="absolute bottom-[10px] right-[10px] font-[500] text-[14px] bg-[#101010] rounded-[16px] p-[8px] opacity-55 text-[#fff]">
          {price}
        </span>
      </div>
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
