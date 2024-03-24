import { useState } from "react";
import { useEffect } from "react";
import { getEvents, reservationById } from "../../utils/apiUtils";
import ExperienceCard from "../../components/widgets/ExperienceCard";
import { loader } from "../../assets";

const Reservation = () => {
  const [reservationData, setReservationdata] = useState(null);
  const [data, setData] = useState([]);
  const [filteredEvent, setFilteredEvent] = useState([]);
  const id = localStorage.getItem("userId");
  useEffect(() => {
    reservationById(id).then((res) => setReservationdata(res.data));
    getEvents().then((res) => setData(res.data));
  }, [id]);

  useEffect(() => {
    const firstArrayIds =
      reservationData && reservationData.map((item) => item.eventId);

    const filteredEventIds =
      data &&
      data
        .filter((item) => firstArrayIds.includes(item.id))
        .map((item) => item);
    setFilteredEvent(filteredEventIds);
  }, [data, reservationData]);

  return (
    <div className="w-[1240px] mx-auto min-h-screen">
      <div className="flex flex-col-4 p-5 gap-8 ">
        {filteredEvent.length == 0 ? (
          <>
            <div className="w-full h-screen flex items-center justify-center">
              <img src={loader} className="m-auto " alt="" />
            </div>
          </>
        ) : (
          filteredEvent.map((el, i) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Reservation;
