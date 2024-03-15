import { useEffect, useState } from "react";
import { staticData } from "../../mock/static";
import ExperienceCard from "../../components/widgets/ExperienceCard";
import Subscribe from "../home/Subscribe";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import { getEvents } from "../../utils/apiUtils";
import { v4 as uuidv4 } from "uuid";
const Events = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);
  const [count, setCount] = useState(1);
  useEffect(() => {
    getEvents().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="w-[1240px] mx-auto min-h-screen">
        <h1 className="text-[50px] text-center unbounded unbounded-700 text-[#333333] p-20">
          Asudə <br />
          vaxtını səmərəli keçir
        </h1>
        <h5 className="unbounded text-[#333333] unbounded-600 text-[24px]  ">
          Bütün tədbirlər
        </h5>
        <div className="grid grid-cols-3  gap-5 gap-y-32 mt-20 pb-20 cursor-pointer">
          {data.slice(pagination, pagination + 12).map((el, i) => (
            <ExperienceCard
              name={el?.eventName}
              key={i}
              id={el?._id}
              imgSrc={el?.mainPhotoUrl}
              content={el?.description}
              time={el?.eventDate}
              place={el?.eventLocation}
              price={`${el?.eventPrice} AZN`}
              imgHeight="200px"
            />
          ))}
        </div>
        <div className="flex items-center mt-20 justify-center gap-16 text-3xl">
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
              if (!(pagination + 12 >= staticData.length)) {
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
  );
};

export default Events;
