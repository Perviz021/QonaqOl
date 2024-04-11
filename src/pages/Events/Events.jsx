import { useEffect, useState } from "react";
import { staticData } from "../../mock/static";
import ExperienceCard from "../../components/widgets/ExperienceCard";
import Subscribe from "../home/Subscribe";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { getEvents, getEventsByCategory } from "../../utils/apiUtils";
import { useParams } from "react-router-dom";
import { loader } from "../../assets";
import { useMediaQuery } from "@uidotdev/usehooks";
import SearchEvent from "../../components/common/SearchEvent";

const Events = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [expSection, setExpSection] = useState(false);
  const [count, setCount] = useState(1);
  const { category } = useParams();
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");

  useEffect(() => {
    if (category) {
      getEventsByCategory(category).then((res) => setData(res.data));
    } else {
      getEvents().then((res) => setData(res.data));
    }
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <>
      {data.length === 0 ? (
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loader} alt="" />
        </div>
      ) : (
        <>
          <div
            className={`${
              isMobile
                ? "w-full px-[20px] mt-[96px]"
                : "w-[1240px] mx-auto min-h-screen"
            } `}
          >
            <h1
              className={`${
                isMobile ? "text-[28px] mb-[40px]" : "text-[50px]  p-20"
              } text-center unbounded unbounded-700`}
            >
              {!isMobile ? (
                <>
                  Asudə <br />
                  vaxtını səmərəli keçir
                </>
              ) : (
                <>
                  Asudə vaxtını <br /> səmərəli keçir
                </>
              )}
            </h1>
            {/* Search part */}
            <div
              className={`${
                isMobile ? "w-full mb-[96px]" : "w-[642px] mx-auto mb-[120px]"
              }`}
            >
              <SearchEvent
                data={data}
                setData={setData}
                setExpSection={setExpSection}
              />
            </div>

            <h5
              className={`${
                isMobile ? "text-center" : ""
              } unbounded unbounded-600 text-2xl`}
            >
              Bütün tədbirlər
            </h5>
            <div
              className={`${
                isMobile
                  ? "mt-[40px] grid-cols-2"
                  : "mt-20 grid-cols-3 gap-y-32"
              } grid gap-5 cursor-pointer`}
            >
              {data.slice(pagination, pagination + 12).map((el, i) => (
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
            <div
              className={`${
                isMobile ? "mt-16 mb-20" : " mt-20"
              } flex items-center justify-center gap-16 text-3xl`}
            >
              <div
                className="size-12 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                onClick={() => {
                  if (!(pagination === 0)) {
                    setPagination((currVal) => currVal - 12);
                    setCount((currVal) => currVal - 1);
                  }
                }}
              >
                <MdFirstPage />
              </div>
              <div className="size-12  flex items-center justify-center   ">
                {count}
              </div>
              <div
                className="size-12 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                onClick={() => {
                  if (!(pagination + 12 >= data.length)) {
                    setPagination((currVal) => currVal + 12);
                    setCount((currVal) => currVal + 1);
                  }
                }}
              >
                <MdLastPage />
              </div>
            </div>
          </div>
          <Subscribe />
        </>
      )}
    </>
  );
};

export default Events;
