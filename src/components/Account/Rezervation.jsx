import { useEffect, useState } from "react";
import { getEvents } from "../../utils/apiUtils";
import { loader } from "../../assets";
import { month } from "../../mock/static";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
const Rezervation = () => {
  const id = localStorage.getItem("userId");

  console.log(id);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    getEvents().then((res) => setData(res.data));
    const filteredEvents = data && data.filter((el) => el.userId == id);
    setFilteredData(filteredEvents);
  }, [id, data]);
  console.log(filteredData);
  return (
    <div className="flex flex-col p-5 gap-8 ">
      {filteredData ? (
        <>
          {filteredData.map((el, i) => {
            const createDate = `${el?.eventDate[2]} ${
              month[el?.eventDate[1] - 1]
            } ${el?.eventDate[0]}`;

            return (
              <div
                onClick={() => navigate(`/events/${id}`)}
                key={i}
                className="p-5 cursor-pointer  bg-white hover:bg-white/30 transition-colors rounded-[8px] grid grid-cols-3  items-center"
              >
                <div className=" w-[100%] ">
                  {el.eventName && el.eventName.length < 40
                    ? el.eventName
                    : el.eventName.slice(0, 40) + "..."}
                </div>
                <div className="grid  gap-8 grid-cols-7 col-span-2 w-full ">
                  <p className="col-span-2">{createDate}</p>
                  <p className="col-span-2">
                    {el?.eventStartTime} - {el?.eventEndTime}
                  </p>
                  <p className="col-span-2">
                    {" "}
                    {el.eventLocation && el.eventLocation.length < 40
                      ? el.eventLocation
                      : el.eventLocation.slice(0, 20) + "..."}
                  </p>
                  <div
                    className="relative z-50 size-8 flex items-center justify-center text-xl rounded-full hover:bg-black/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log("first");
                    }}
                  >
                    <AiOutlineEdit className=" " />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="w-full  flex items-center justify-center">
          <img src={loader} alt="" className="size-[50px]" />
        </div>
      )}
    </div>
  );
};

export default Rezervation;
