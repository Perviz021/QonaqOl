import { useEffect, useState } from "react";
import { deleteEventById, getEvents, userById } from "../../utils/apiUtils";
import { loader } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import Edit from "../../assets/icons/edit-2.svg";
import Delete from "../../assets/icons/trash.svg";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import LeftAngel from "../../assets/icons/left-arrow.svg";
import RightAngel from "../../assets/icons/right-arrow.svg";
import add from "../../assets/icons/add.svg";

const MyEvents = () => {
  const [pagination, setPagination] = useState(0);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const id = localStorage.getItem("userId");

  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // getEvents().then((res) => {
    //   setData(res.data);
    //   setIsLoading(false);
    // });

    // const filteredEvents = data && data.filter((el) => el.userId == id);
    // setFilteredData(filteredEvents);
    userById(id).then((res) => {
      setFilteredData(res.data);
      setIsLoading(false);
    });
  }, [id]);

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

  return (
    <>
      {isLoading ? (
        <div className="w-full  flex items-center justify-center">
          <img src={loader} alt="" className="size-[50px]" />
        </div>
      ) : (
        <div className="flex flex-col p-5 gap-8 ">
          {filteredData ? (
            <>
              {filteredData.slice(pagination, pagination + 5).map((el, i) => {
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
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/events/update/${el.id}`);
                          }}
                          className="size-[40px] rounded-[4px] flex items-center justify-center bg-[#F1F1F1]"
                        >
                          <img src={Edit} className="size-[20px]" alt="" />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              <div className="m-auto flex gap-6 font-semibold">
                <div className="flex items-center mt-20 justify-center gap-5 text-3xl">
                  <div
                    className="size-5 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                    onClick={() => {
                      if (!(pagination === 0)) {
                        setPagination((currVal) => currVal - 5);
                        setCount((currVal) => currVal - 1);
                      }
                    }}
                  >
                    <img src={LeftAngel} />
                  </div>
                  <div className=" text-base flex items-center justify-center text-black/70  ">
                    {count}
                  </div>
                  <div
                    className="size-5 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                    onClick={() => {
                      if (!(pagination + 5 >= filteredData.length)) {
                        setPagination((currVal) => currVal + 5);
                        setCount((currVal) => currVal + 1);
                      }
                    }}
                  >
                    <img src={RightAngel} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full min-h-[400px]  flex items-center justify-center">
              <div className="flex flex-col items-center gap-[27px] justify-center">
                <p className="text-black/60 font-medium line-clamp-2 max-w-[270px] text-center leading-6">
                  Sizin bəyəndiklərim siyahısına əlavə etdiyiniz tədbiriniz
                  yoxdur.
                </p>
                <Link
                  className="bg-[#FFCE00] border-transparent w-[190px] py-[8px] h-[43px] relative z-10  flex  justify-center items-center rounded-[8px] text-black font-[400] text-[16px]"
                  to={"/events"}
                >
                  <img src={add} alt="" /> Tədbir yarat
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyEvents;
