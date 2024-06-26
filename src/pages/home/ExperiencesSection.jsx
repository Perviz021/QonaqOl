import ExperienceCard from "../../components/widgets/ExperienceCard";

import { arrowRight, loader } from "../../assets";
import { useEffect, useState } from "react";
import { getEvents } from "../../utils/apiUtils";
import { Link } from "react-router-dom";
function ExperiencesSection() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getEvents().then((res) => setData(res.data));
  }, []);
  useEffect(() => {
    const popularEvents =
      data && data.sort((a, b) => b.viewCount - a.viewCount);
    setData(popularEvents);
  }, [data]);

  return (
    <section className="w-full lg:w-[1240px] lg:mx-auto px-[20px] mt-[40px] lg:mt-[80px] mb-[62px] lg:mb-[150px]">
      <h1 className="w-full unbounded unbounded-600 text-[24px] mb-[40px] lg:mb-[60px] flex text-center justify-between items-center">
        Populyar tədbirlər
        <Link to={"/events"}>
          <img src={arrowRight} alt="" />
        </Link>
      </h1>

      {/* Experiences Cards */}
      {data == null ? (
        <div className="w-full  flex items-center justify-center">
          <img src={loader} alt="" className="size-[50px]" />
        </div>
      ) : (
        <>
          <div className="lg:mx-auto">
            {/* First Row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-[20px] gap-y-[20px] lg:gap-y-44">
              {data &&
                data
                  .slice(0, 8)
                  .map((el, i) => (
                    <ExperienceCard
                      id={el.id}
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
        </>
      )}
    </section>
  );
}

export default ExperiencesSection;
