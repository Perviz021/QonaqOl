import { FiSearch } from "react-icons/fi";
import {
  headerContentBtn1,
  calendar,
  headerImg1,
  headerImg2,
  headerImg3,
  headerImg4,
} from "../../assets";
import { useState } from "react";
import EventDate from "../../pages/event/EventDate";
import EventCategory from "../../pages/event/EventCategory";

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
  const [eventDate, setEventDate] = useState("");

  const handleCategoryChange = (category) => {
    setCategory(category);
    console.log(category);
  };
  const handleDateChange = (date) => {
    setEventDate(date);
  };

  return (
    <div className="w-[1240px] mx-auto mt-[60px] flex items-center h-full space-x-[50px]">
      <div className="flex flex-col w-[50%] h-full relative top-[20px]">
        <h1 className="text-[50px] unbounded unbounded-700 text-[#333333]">
          Növbəti <br /> macəranızı <br /> bizimlə kəşf edin
        </h1>
        <p className="font-[400] text-[20px] leading-[28px] my-[35px]">
          Qonaqol.az ilə əyləncə dünyasını kəşf edin. Ölkəmizdə olan
          masterklasslardan seminarlara qədər sizin üçün xüsusi olaraq
          hazırlanmış mükəmməl tədbirləri təcrübə edin.
        </p>
        <button className="inline-flex items-center w-[95%] rounded-[8px] overflow-hidden border border-[#CCCCCC]">
          <span
            className="inline-flex hover:bg-black/10 transition-colors active:bg-black/20 items-center justify-start w-[240px] p-[12px] space-x-[10px]"
            onClick={() => setCategoryToggle(!categoryToggle)}
          >
            <img src={headerContentBtn1} alt="" className="size-[20px]" />
            <span className="text-[16px] font-[400]">Maraqlandığınız sahə</span>
          </span>
          <span
            onClick={() => setDateToggle(!dateToggle)}
            className="inline-flex items-center  hover:bg-black/10 active:bg-black/20 transition-colors justify-start w-[240px] p-[12px] border-l space-x-[10px]"
          >
            <img src={calendar} alt="" className="size-[20px]" />
            <span className="text-[16px] font-[400]">Nə vaxt?</span>
          </span>
          <span className="inline-flex items-center justify-center bg-[#FFCE00] w-[130px] py-[12px] space-x-[8px]">
            <FiSearch className="size-[20px]" />
            <span className="text-[16px] font-[400]">Kəşf et</span>
          </span>
        </button>

        <div className="grid grid-cols-2 gap-3 mt-5  items-center">
          {categoryToggle ? (
            <div className="">
              <EventCategory
                options={options}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          ) : null}
          {dateToggle ? (
            <div className="">
              <EventDate onDateChange={handleDateChange} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-[551px] shrink-0 relative bottom-[20px]">
        <div className="grid grid-cols-2">
          <span className="relative left-[30px]">
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
          <span className="relative top-[20px] left-[20px]">
            <img
              src={headerImg3}
              alt=""
              className="w-[280px] h-[180px] rounded-[90px] object-cover shrink-0"
            />
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
    </div>
  );
}

export default HeaderContent;
