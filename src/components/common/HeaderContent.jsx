import {
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
  loader,
} from "../../assets";
import { useState } from "react";
import ExperienceCard from "../widgets/ExperienceCard";
import { useMediaQuery } from "@uidotdev/usehooks";
import SearchEvent from "./SearchEvent";

function HeaderContent() {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState(null);
  const [expSection, setExpSection] = useState(false);
  const handleCategoryChange = (category) => {
    setCategory(category);
  };
  const handleStartedDateChange = (date) => {
    setStartEventDate(date);
  };

  const handleEndedDateChange = (date) => {
    setEndEventDate(date);
  };
  const fetchData = () => {
    if (
      category === null &&
      startEventDate.length == 0 &&
      endEventDate.length == 0
    ) {
      alert("fieldleri doldur");
    } else {
      getEventsBetweenCategoryAndDate(startEventDate, endEventDate, category)
        .then((res) => setData(res.data))
        .catch((err) => {
          setData([]);
          setCategory("");
        })
        .finally(() => {
          setExpSection(true);
          setCategoryToggle(false);
          setDateToggle(false);
        });
    }
  };
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width: 1024px)");

  return (
    <>
      <div
        className={`${
          isMobile
            ? "w-full"
            : "w-[1240px] mx-auto mt-[70px] mb-[120px] flex items-start justify-between space-x-[50px]"
        }`}
      >
        <div
          className={`${
            isMobile ? "w-full px-[20px]" : "w-[50%]"
          } flex flex-col h-full relative z-30`}
        >
          <h1
            className={`${
              isMobile
                ? "text-[26px] unbounded-600 text-center text-[#000000CC]"
                : "text-[50px] unbounded-700 text-[#333333]"
            } unbounded`}
          >
            {!isMobile ? (
              <>
                Növbəti <br /> macəranızı <br /> bizimlə kəşf edin
              </>
            ) : (
              <>
                Növbəti macəranızı <br /> bizimlə kəşf edin
              </>
            )}
          </h1>
          <p
            className={`${
              isMobile && "text-center"
            } text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-[20px] lg:my-[35px] mb-[40px]`}
          >
            Qonaqol.az ilə əyləncə dünyasını kəşf edin. Ölkəmizdə olan
            masterklasslardan seminarlara qədər sizin üçün xüsusi olaraq
            hazırlanmış mükəmməl tədbirləri təcrübə edin.
          </p>

          {/* Search Part */}
          <SearchEvent
            data={data}
            setData={setData}
            setExpSection={setExpSection}
          />
        </div>

        {isDesktop && (
          <div className="w-[551px] shrink-0 relative bottom-[20px]">
            <div className="grid grid-cols-2">
              <span className="relative z-30 left-[30px]">
                <img
                  src={headerImg1}
                  alt=""
                  className="w-[200px] h-[280px] rounded-[90px] object-cover shrink-0"
                />
              </span>
              <span className="relative bg-img bg-img1">
                <img
                  src={headerImg2}
                  alt=""
                  className="w-[280px] h-[180px] rounded-[90px] object-cover shrink-0"
                />
              </span>
              <span className="relative top-[20px] left-[20px] w-[280px] h-[180px] rounded-[90px] overflow-hidden">
                <img src={headerImg3} alt="" className="img-cover shrink-0" />
              </span>
              <span className="relative bottom-[80px] left-[50px] bg-img bg-img2">
                <img
                  src={headerImg4}
                  alt=""
                  className="w-[200px] h-[280px] rounded-[90px] object-cover shrink-0"
                />
              </span>
            </div>
          </div>
        )}
      </div>
      {expSection ? (
        <div className="w-[1240px] mx-auto">
          {!data ? (
            <div className="w-full h-screen flex items-center justify-center">
              <img src={loader} alt="" />
            </div>
          ) : data.length == 0 ? (
            <div>Axtarış nəticəsinə uyğun tədbir yoxdur</div>
          ) : (
            <>
              <h5 className="unbounded text-[#333333] unbounded-600 text-[24px]  ">
                {category}
              </h5>
              <div className="grid grid-cols-3 gap-5 gap-y-32 mt-20 pb-20 cursor-pointer">
                {data.map((el, i) => (
                  <ExperienceCard
                    name={el?.eventName}
                    key={i}
                    id={el?.id}
                    imgSrc={el?.mainPhotoUrl}
                    content={el?.description}
                    time={el?.eventDate}
                    place={el?.eventLocation}
                    price={`${el?.eventPrice} AZN`}
                    imgHeight="200px"
                  />
                ))}
              </div>
            </>
          )}
        </div>
      ) : null}
    </>
  );
}

export default HeaderContent;
