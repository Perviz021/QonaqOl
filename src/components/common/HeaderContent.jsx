import {
  headerContentBtn1,
  calendar,
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
  loader,
  search,
} from "../../assets";
import { useEffect, useState } from "react";
import EventDate from "../../pages/event/EventDate";
import EventCategory from "../../pages/event/EventCategory";
import { getEventsBetweenCategoryAndDate } from "../../utils/apiUtils";
import ExperienceCard from "../widgets/ExperienceCard";
import { useMediaQuery } from "@uidotdev/usehooks";

function HeaderContent() {
  const options = [
    "Kənd həyatı",
    "Kamplar",
    "Rəssamlıq",
    "Yemək hazırlama",
    "Dulusçuluq",
    "Musiqi",
  ];
  const [dateToggle, setDateToggle] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [category, setCategory] = useState(null);
  const [startEventDate, setStartEventDate] = useState("");
  const [endEventDate, setEndEventDate] = useState("");
  const [data, setData] = useState(null);
  const [expSection, setExpSection] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

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
        .catch((err) => console.log(err))
        .finally(() => {
          setExpSection(true);
          setCategoryToggle(false);
          setDateToggle(false);
        });
    }
  };

  // useEffect(() => {
  //   getEventsBetweenCategoryAndDate(startEventDate, endEventDate, category)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }, [startEventDate, endEventDate, category]);

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
            } font-[400] text-[16px] lg:text-[20px] leading-[24px] lg:leading-[28px] mt-[20px] lg:my-[35px] mb-[40px]`}
          >
            Qonaqol.az ilə əyləncə dünyasını kəşf edin. Ölkəmizdə olan
            masterklasslardan seminarlara qədər sizin üçün xüsusi olaraq
            hazırlanmış mükəmməl tədbirləri təcrübə edin.
          </p>
          <div
            className={`${
              isMobile
                ? "flex flex-col w-full"
                : "inline-flex rounded-[8px] border border-[#CCCCCC] w-[95%]"
            } items-center overflow-hidden`}
          >
            <span
              className={`${
                isMobile
                  ? "flex justify-center w-full bg-white rounded-[8px] border border-[#A1A1A199] py-[16px] space-x-[12px] mb-[12px]"
                  : "inline-flex justify-start w-[240px] p-[12px] space-x-[10px]"
              } hover:bg-black/10 transition-colors active:bg-black/20 items-center`}
              onClick={() => setCategoryToggle(!categoryToggle)}
            >
              <img src={headerContentBtn1} alt="" className="size-[20px]" />
              <span
                className={`${
                  isMobile && "text-[#000000B2]"
                } text-[16px] font-[400]`}
              >
                {!isMobile ? "Maraqlandığınız sahə" : "Kateqoriya"}
              </span>
            </span>
            <span
              onClick={() => setDateToggle(!dateToggle)}
              className={`${
                isMobile
                  ? "flex justify-center w-full bg-white rounded-[8px] border border-[#A1A1A199] py-[16px] space-x-[12px] mb-[20px]"
                  : "inline-flex justify-start w-[240px] p-[12px] space-x-[10px]"
              } hover:bg-black/10 transition-colors active:bg-black/20 items-center`}
            >
              <img src={calendar} alt="" className="size-[20px]" />
              <span
                className={`${
                  isMobile && "text-[#000000B2]"
                } text-[16px] font-[400]`}
              >
                {!isMobile ? "Nə vaxt?" : "Tarix aralığı"}
              </span>
            </span>
            <span
              className={`${
                isMobile
                  ? "flex w-full py-[16px] space-x-[12px] rounded-[8px]"
                  : "inline-flex w-[130px] py-[12px] space-x-[8px]"
              } justify-center items-center bg-[#FFCE00] cursor-pointer`}
              onClick={() => fetchData()}
            >
              <span>
                <img src={search} alt="" className="size-[20px]" />
              </span>
              <span
                className={`${
                  isMobile && "text-[#000000B2]"
                } text-[16px] font-[400]`}
              >
                Kəşf et
              </span>
            </span>
          </div>

          <div
            className={`${
              isMobile ? "w-full relative" : "w-[95%]"
            } grid grid-cols-1 gap-3 mt-5`}
          >
            {categoryToggle ? (
              <div className={`${isMobile && "relative w-full"}`}>
                <EventCategory
                  options={options}
                  onCategoryChange={handleCategoryChange}
                  headerTextColor="white"
                />
              </div>
            ) : null}
            {dateToggle ? (
              <div
                className={`${
                  isMobile ? "justify-between relative" : "gap-4"
                } flex items-center`}
              >
                <EventDate
                  onDateChange={handleStartedDateChange}
                  pastTime={true}
                  headerTextColor="white"
                />
                <EventDate
                  onDateChange={handleEndedDateChange}
                  pastTime={true}
                  headerTextColor="white"
                />
              </div>
            ) : null}
          </div>
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
