import { useEffect, useState } from "react";
import { createLikeEventById, getWishlist } from "../../utils/apiUtils";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import { loader } from "../../assets";
import { MdFirstPage, MdLastPage } from "react-icons/md";
import heartFill from "../../assets/icons/heart-fill.svg";
import { toast } from "react-toastify";
const Wishlist = () => {
  const [wishListArr, setwishListArr] = useState([]);

  const [pagination, setPagination] = useState(0);
  const [count, setCount] = useState(1);
  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    getWishlist(user).then((res) => setwishListArr(res.data));
  }, [user]);
  const removeFromWishlist = (e, id) => {
    e.stopPropagation();
    createLikeEventById(id, user).then(() => toast.success("silindi"));
    const removeitem = wishListArr.filter((el) => el.id != id);
    setwishListArr(removeitem);
  };
  return (
    <div className="flex flex-col p-5 gap-8 ">
      {wishListArr?.length !== 0 ? (
        <>
          {wishListArr.slice(pagination, pagination + 5).map((el, i) => {
            const year = el?.eventDate[0].toString().slice(2, 4);
            const month =
              el.eventDate[1] > 10 ? el.eventDate[1] : "0" + el.eventDate[1];
            const day =
              el.eventDate[2] > 10 ? el.eventDate[2] : "0" + el.eventDate[2];
            const date = `${day}.${month}.${year}`;
            const time = `${el.eventStartTime}-${el.eventEndTime}`;
            return (
              <>
                <div
                  onClick={() => navigate(`/events/${el.id}`)}
                  key={uuidv4()}
                  className="p-5 cursor-pointer flex justify-between  bg-white hover:bg-white/30 transition-colors rounded-[8px]    items-center"
                >
                  <div className=" flex gap-4 justify-between   w-[80%]  items-center">
                    <div className="size-[60px]">
                      <img
                        src={el?.mainPhotoUrl}
                        className="w-full object-cover rounded-[4px] h-full"
                        alt=""
                      />
                    </div>

                    <p className="w-[calc(100%/3)]">
                      {el?.eventName && el?.eventName.length < 50
                        ? el.eventName
                        : el.eventName.slice(0, 50) + "..."}
                    </p>
                    <p className="w-[calc(100%/3)]">{date}</p>
                    <p className="w-[calc(100%/3)]">{time}</p>
                  </div>
                  <div className="flex items-center ">
                    <div
                      className="size-[40px]  flex items-center justify-center rounded-full hover:bg-black/20  "
                      onClick={(e) => removeFromWishlist(e, el?.id)}
                    >
                      <img src={heartFill} alt="" className="size-[20px]" />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="m-auto flex gap-6 font-semibold">
            <div className="flex items-center mt-20 justify-center gap-16 text-3xl">
              <div
                className="size-6 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                onClick={() => {
                  if (!(pagination === 0)) {
                    setPagination((currVal) => currVal - 5);
                    setCount((currVal) => currVal - 1);
                  }
                }}
              >
                <MdFirstPage />
              </div>
              <div className="size-6 text-xl flex items-center justify-center   ">
                {count}
              </div>
              <div
                className="size-6 hover:bg-[#ffce0067] transition-colors cursor-pointer flex items-center justify-center rounded-full  "
                onClick={() => {
                  if (!(pagination + 5 >= wishListArr.length)) {
                    setPagination((currVal) => currVal + 5);
                    setCount((currVal) => currVal + 1);
                  }
                }}
              >
                <MdLastPage />
              </div>
            </div>
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

export default Wishlist;
