import { useEffect, useState } from "react";
import { deleteEventById, getEvents } from "../../utils/apiUtils";
import { loader } from "../../assets";
import { month } from "../../mock/static";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { endPoints } from "../../api/endPoints";
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
                className="p-5 cursor-pointer  bg-white hover:bg-white/30 transition-colors rounded-[8px] grid grid-cols-4  items-center"
              >
                <div className=" w-[100%] ">
                  {el.eventName && el.eventName.length < 40
                    ? el.eventName
                    : el.eventName.slice(0, 40) + "..."}
                </div>
                <div className="grid  gap-8 grid-cols-7 col-span-3 w-full ">
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
                  <div className="flex w-full gap-1">
                    <div
                      className="relative z-50 p-2 size-8 flex items-center justify-center text-xl rounded-full hover:bg-black/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("first");
                      }}
                    >
                      <AiOutlineEdit className=" " />
                    </div>
                    <div
                      className="relative z-50 p-2 size-8 flex items-center justify-center text-xl rounded-full hover:bg-black/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        axios.delete(
                          `https://qonaqol.onrender.com/qonaqol${endPoints.event_controller.deletebyId(
                            el.id
                          )}`,
                          {
                            headers: {
                              Authorization: `Bearer ${localStorage.getItem(
                                "accessToken"
                              )}`,
                            },
                          }
                        );
                      }}
                    >
                      <AiOutlineDelete className=" " />
                    </div>
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
