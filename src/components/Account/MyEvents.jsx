import { useEffect, useState } from "react";
import { deleteEventById, getEvents } from "../../utils/apiUtils";
import { loader } from "../../assets";
import { useNavigate } from "react-router-dom";
import Edit from "../../assets/icons/edit-2.svg";
import Delete from "../../assets/icons/trash.svg";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const MyEvents = () => {
  let [paginationCount, setPaginationCount] = useState(1);
  let [paginationPage, setPaginationPage] = useState(0);

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
  const handleDelete = (e, id) => {
    e.stopPropagation();
    deleteEventById(id)
      .then(() =>
        toast.success("Tədbir uğurla silindi!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      )
      .catch((err) =>
        toast.error(err, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      );
  };
  const handlePaginate = (e) => {
    switch (e.target.innerText) {
      case "1":
        setPaginationPage(0);

        break;
      case "2":
        setPaginationPage(5);

        break;
      case "3":
        setPaginationPage(10);

        break;
    }
    return paginationPage;
  };
  return (
    <div className="flex flex-col p-5 gap-8 ">
      {filteredData ? (
        <>
          {filteredData
            .slice(paginationPage, paginationPage + 5)
            .map((el, i) => {
              return (
                <>
                  <div
                    onClick={() => navigate(`/events/${el.id}`)}
                    key={uuidv4()}
                    className="p-5 cursor-pointer flex justify-between  bg-white hover:bg-white/30 transition-colors rounded-[8px]    items-center"
                  >
                    <div className=" flex gap-4 items-center">
                      <div className="size-[60px]">
                        <img
                          src={el?.mainPhotoUrl}
                          className="w-full object-cover rounded-[4px] h-full"
                          alt=""
                        />
                      </div>
                      <div className="font-semibold">
                        {el?.eventName && el?.eventName.length < 50
                          ? el.eventName
                          : el.eventName.slice(0, 50) + "..."}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="size-[40px] rounded-[4px] flex items-center justify-center relative z-50 bg-[#ffcdcd]"
                        onClick={(e) => handleDelete(e, el.id)}
                      >
                        <img src={Delete} alt="" className="size-[20px]" />
                      </div>
                      <div className="size-[40px] rounded-[4px] flex items-center justify-center bg-[#F1F1F1]">
                        <img src={Edit} className="size-[20px]" alt="" />
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          <div className="m-auto flex gap-6 font-semibold">
            <span
              onClick={(e) => handlePaginate(e)}
              className="cursor-pointer hover:bg-black/10 flex size-6 rounded-full items-center justify-center"
            >
              {paginationCount}
            </span>
            <span
              onClick={(e) => handlePaginate(e)}
              className="cursor-pointer hover:bg-black/10 flex rounded-full size-6 items-center justify-center"
            >
              {paginationCount + 1}
            </span>
            <span
              onClick={(e) => handlePaginate(e)}
              className="cursor-pointer hover:bg-black/10 rounded-full flex size-6 items-center justify-center "
            >
              {paginationCount + 2}
            </span>
          </div>
        </>
      ) : (
        <div className="w-full  flex items-center justify-center">
          <img src={loader} alt="" className="size-[50px]" />
        </div>
      )}
    </div>
  );
};

export default MyEvents;
