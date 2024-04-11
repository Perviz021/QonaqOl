import { useMediaQuery } from "@uidotdev/usehooks";
import React, { useState } from "react";
import { calendar, headerContentBtn1, search } from "../../assets";
import EventDate from "../../pages/event/EventDate";
import EventCategory from "../../pages/event/EventCategory";
import { getEventsBetweenCategoryAndDate } from "../../utils/apiUtils";
import { useLocation } from "react-router-dom";

const SearchEvent = ({ data, setData, setExpSection }) => {
  const [category, setCategory] = useState(null);
  const [startEventDate, setStartEventDate] = useState("");
  const [endEventDate, setEndEventDate] = useState("");
  const [dateToggle, setDateToggle] = useState(false);
  const [categoryToggle, setCategoryToggle] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const options = [
    "Kənd həyatı",
    "Kamplar",
    "Rəssamlıq",
    "Yemək hazırlama",
    "Dulusçuluq",
    "Musiqi",
  ];

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

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
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
              : "inline-flex w-[130px] py-[12px] space-x-[8px] rounded-r-[8px]"
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
          isMobile ? "w-full relative mt-5" : "w-[95%]"
        } grid grid-cols-1`}
      >
        {categoryToggle ? (
          <div className={`${isMobile && "relative w-full"}`}>
            <EventCategory
              options={options}
              onCategoryChange={handleCategoryChange}
              headerTextColor={currentPath === "/" ? "white" : "black"}
              borderAllowed={currentPath === "/" ? true : false}
            />
          </div>
        ) : null}
        {dateToggle ? (
          <div
            className={`${
              isMobile ? "justify-between relative mt-5" : "gap-4"
            } flex items-center`}
          >
            <EventDate
              onDateChange={handleStartedDateChange}
              pastTime={true}
              headerTextColor={currentPath === "/" ? "white" : "black"}
            />
            <EventDate
              onDateChange={handleEndedDateChange}
              pastTime={true}
              headerTextColor={currentPath === "/" ? "white" : "black"}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchEvent;
