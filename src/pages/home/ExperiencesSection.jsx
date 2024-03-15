import ExperienceCard from "../../components/widgets/ExperienceCard";

import { arrowRight } from "../../assets";
import { useEffect, useState } from "react";
import { getEvents } from "../../utils/apiUtils";
function ExperiencesSection() {
  const [data, setData] = useState(null);
  const [click, setClick] = useState(null);

  useEffect(() => {
    getEvents().then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    const popularEvents =
      data && data.sort((a, b) => b.viewCount - a.viewCount);
    setData(popularEvents);
  }, [data]);

  return (
    <section
      id="experiences"
      className="w-[1240px] mx-auto mt-[80px] mb-[150px]"
    >
      <h1 className="unbounded unbounded-600 text-[24px] mb-[60px] flex justify-between items-center">
        Populyar tədbirlər
        <span>
          <img src={arrowRight} alt="" />
        </span>
      </h1>

      {/* Experiences Cards */}
      <div className="container mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-44">
          {data &&
            data
              .slice(0, 8)
              .map((el, i) => (
                <ExperienceCard
                  id={el._id}
                  name={el?.eventName}
                  key={i}
                  imgSrc={el?.mainPhotoUrl}
                  content={el?.description}
                  time={el?.eventDate}
                  place={el?.eventLocation}
                  price={`${el?.eventPrice} AZN`}
                  imgHeight="200px"
                />
              ))}
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;
