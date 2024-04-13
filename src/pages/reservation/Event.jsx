import { useEffect, useState, useRef } from "react";

import ExperienceCard from "../../components/widgets/ExperienceCard";
import PopupMessage from "../../components/widgets/PopupMessage";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { month } from "../../mock/static";
import {
  createLikeEventById,
  eventById,
  getEvents,
  getWishlist,
} from "../../utils/apiUtils";
import loader from "../../assets/img/loader.gif";
import heart from "../../assets/icons/heart.svg";
import heartFill from "../../assets/icons/heart-fill.svg";
import axios from "axios";
import Share from "../../components/ui/react-share/Share";
import ShowShare from "../../assets/icons/send-2-fill.svg";
import ClosedShare from "../../assets/icons/send-2.svg";
import { useMediaQuery } from "@uidotdev/usehooks";

const Event = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false); // State for email format error
  const [fullName, setFullName] = useState("");
  const [participants, setParticipants] = useState("");
  const [data, setData] = useState(null);
  const [otherEvents, setOtherEvents] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [wishListArr, setwishListArr] = useState([]);
  const eventId = new URLSearchParams(location.search).get("id");
  const isMobile = useMediaQuery("only screen and (max-width:480px)");

  const [shareUrl, setShareUrl] = useState(window.location.href);
  // const event_name = name && name.replace(/-/g, " ");
  const user = localStorage.getItem("userId");

  useEffect(() => {
    eventById(eventId).then((res) => setData(res.data));
  }, [eventId]);
  useEffect(() => {
    // eventById(id).then((res) => console.log(res.data));
    getEvents().then((res) =>
      setOtherEvents(res.data.filter((i) => i.category === data?.category))
    );
  }, [otherEvents, data?.category]);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const accessToken = localStorage.getItem("accessToken");
  const popupRef = useRef();
  const placeholder = "Əlaqə nömrəsi";

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // document.querySelector("body").addEventListener("focus", () => {
  //   setShowShare(false);
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);

    if (accessToken) {
      const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage
      const reservationData = {
        userId: parseInt(userId), // Convert userId to integer if necessary
        eventId: parseInt(eventId), // Replace 0 with the actual event ID
        phoneNumber,
        participantsCount: parseInt(participants), // Convert participants to integer if necessary
      };
      // Make POST request to backend with reservationData
      axios
        .post(
          "https://qonaqol.onrender.com/qonaqol/api/reservation/create-reservation-registered",

          reservationData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status == 201) {
            // Reservation successful, handle success scenario
            console.log("Reservation successful");
            setShowSuccessPopup(true);
          } else {
            // Handle error scenario
            throw new Error("Reservation failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error scenario
        });
    } else {
      const reservationData = {
        eventId: parseInt(eventId), // Replace 0 with the actual event ID
        fullName,
        email,
        phoneNumber,
        participantsCount: parseInt(participants), // Convert participants to integer if necessary
      };
      // Make POST request to backend with reservationData
      axios
        .post(
          "https://qonaqol.onrender.com/qonaqol/api/reservation/create-reservation-unregistered",
          reservationData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status == 201) {
            // Reservation successful, handle success scenario
            console.log("Reservation successful");
            setShowSuccessPopup(true);
          } else {
            // Handle error scenario
            throw new Error("Reservation failed");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error scenario
        });
    }
  };

  const handleReservation = () => {
    setShowPopup(true);
  };

  const handlePhoneNumberChange = (e) => {
    let inputValue = e.target.value;
    // Allow only digits and limit input to 12 characters
    inputValue = inputValue.replace(/\D/g, "").slice(0, 12);

    // Remove "+994" if the input only contains it
    if (inputValue === "+994" || inputValue === "994") {
      setPhoneNumber("");
    } else {
      // Ensure the input starts with +994 only if it doesn't already start with it
      if (!inputValue.startsWith("+994")) {
        if (inputValue.startsWith("994")) {
          inputValue = "+" + inputValue;
        } else {
          inputValue = "+994" + inputValue;
        }
      }
      setPhoneNumber(inputValue);
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    // Email format validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!regex.test(value)); // Toggle emailError state based on regex test result
  };

  const createDate = `${data?.eventDate[2]} ${month[data?.eventDate[1] - 1]} ${
    data?.eventDate[0]
  }`;
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); // Close popup when click is outside of it
      }
    };

    if (showPopup) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setShowPopup(false); // Close popup when Esc key is pressed
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []); // Run only once on component mount

  const handleContinueButtonClick = () => {
    setShowSuccessPopup(false); // Close the pop-up
  };

  //wishlist

  const handleWishlist = (ids) => {
    createLikeEventById(ids, user).then((res) => setToggle(!toggle));
  };
  useEffect(() => {
    getWishlist(user).then((res) => setwishListArr(res.data));
  }, [user, eventId]);

  return (
    <>
      {data == null ? (
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loader} alt="" />
        </div>
      ) : (
        <>
          <div className="w-full lg:w-[1240px] lg:mx-auto lg:px-0 mt-[60px] lg:mt-[90px]">
            <div className="flex justify-between items-center px-[20px] mb-[24px] lg:mb-10">
              <h3 className="lg:text-[28px] font-[500] lg:font-[600]">
                {data?.eventName}
              </h3>
              <span className="flex items-center justify-center gap-[10px]">
                <span className="border relative flex items-center justify-center border-[#333] size-[38px] lg:size-[60px] rounded-full">
                  <img
                    src={`${showShare ? ShowShare : ClosedShare}`}
                    color="red"
                    className="size-[26px] lg:size-[28px] cursor-pointer"
                    onClick={() => setShowShare(!showShare)}
                  />

                  {showShare ? (
                    <div className="absolute top-[60px] lg:top-[90px] z-30 right-0">
                      <Share shareUrl={shareUrl} setShowShare={setShowShare} />
                    </div>
                  ) : null}
                </span>
                <span
                  className="border flex items-center justify-center border-[#333] size-[38px] lg:size-[60px]  rounded-full"
                  onClick={() => handleWishlist(data?.id)}
                >
                  <img
                    src={toggle ? heartFill : heart}
                    alt=""
                    className="size-[26px] lg:size-[28px] cursor-pointer"
                  />
                </span>
              </span>
            </div>
            <div className="flex gap-[5px] lg:gap-[20px] px-[20px] mb-[60px] lg:mb-[40px]">
              <div>
                <img
                  src={data?.photoUrls[0]}
                  alt=""
                  className="w-[113px] lg:w-[400px] h-[218px] lg:h-[500px] object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] lg:gap-[20px]">
                <img
                  src={data?.photoUrls[1]}
                  alt=""
                  className="w-[114px] lg:w-[400px] h-[119px] lg:h-[272px] object-cover rounded-[8px]"
                />
                <img
                  src={data?.photoUrls[2]}
                  alt=""
                  className="w-[113px] lg:w-[400px] h-[90px] lg:h-[208px] object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col gap-[8px] lg:gap-[20px]">
                <img
                  src={data?.photoUrls[3]}
                  alt=""
                  className="w-[113px] lg:w-[400px] h-[89px] lg:h-[202px] object-cover rounded-[8px]"
                />
                <img
                  src={data?.photoUrls[4]}
                  alt=""
                  className="w-[113px] lg:w-[400px] h-[121px] lg:h-[278px] object-cover rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-[63px] lg:space-x-[123px]">
              <div className="w-full lg:w-[715px] px-[20px] lg:px-0">
                <h3 className="text-[18px] lg:text-[28px] font-[600] mb-[32px]">
                  Tədbir haqqında
                </h3>
                <p className="text-base">{data?.description}</p>
                <p className="mt-[48px]">
                  <span className="text-[18px] lg:text-[20px] font-[600] mr-[8px]">
                    Ünvan:
                  </span>
                  <span className="text-base">{data?.eventLocation}</span>
                </p>
              </div>
              <div className="px-[20px] py-[40px] lg:p-[40px] bg-[#fafafa] w-full lg:w-[400px] rounded-[8px]">
                <div className="border-b border-[#e1e1e1]">
                  <h2 className="font-[600] text-base lg:text-[28px] mb-[20px] lg:mb-[12px]">
                    {data?.eventName}
                  </h2>
                  <div className="space-y-[8px] pb-[12px]">
                    <p className="text-base">
                      Qiymət: <span>{data?.eventPrice}</span> AZN
                    </p>
                    <p className="text-base">
                      Dil:{" "}
                      <span>
                        {data?.language == "RUSSIAN"
                          ? "Rus dili"
                          : data?.language == "AZERBAIJANI"
                          ? "Azərbaycan dili"
                          : data?.language == "ENGLISH"
                          ? "İngilis dili"
                          : " "}
                      </span>
                    </p>
                    <p className="text-base">
                      Kateqoriya:{" "}
                      <span>
                        {data?.category == "COUNTRY_LIFE"
                          ? "Kənd Həyatı"
                          : data?.category == "COOKING"
                          ? "Yemək hazırlama"
                          : data?.category == "PAINTING"
                          ? "Rəssamlıq"
                          : data?.category == "POTTERY"
                          ? "Dulusçuluq"
                          : data?.category == "CAMPING"
                          ? "Kamplar"
                          : data?.category == "MUSIC"
                          ? "Musiqi"
                          : ""}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="border-b border-[#e1e1e1] py-[12px]">
                  <h5 className="font-[600] text-[18px] mb-[12px]">
                    Mövcud tarixlər
                  </h5>
                  <p className="text-[16px]">
                    {createDate}, {data?.eventStartTime} - {data?.eventEndTime}{" "}
                  </p>
                </div>
                <button
                  onClick={handleReservation}
                  className="text-[16px] bg-[#FFCE00] rounded-[8px] h-[48px] px-[124px] shrink-0 mt-[16px]"
                >
                  Rezerv et
                </button>
              </div>
            </div>
            <div className="w-full mb-[170px] lg:mb-[120px] px-[20px] lg:px-0">
              <h4 className="unbounded unbounded-600 text-base lg:text-[24px] mt-[60px] mb-[40px] lg:my-[40px]">
                Oxşar tədbirlər
              </h4>

              <div className="w-full gap-[20px] grid grid-cols-2 lg:grid-cols-3">
                {otherEvents &&
                  otherEvents
                    .slice(0, 3)
                    .map((el, i) => (
                      <ExperienceCard
                        id={el.id}
                        name={el.eventName}
                        key={i}
                        imgSrc={el.mainPhotoUrl}
                        content={el.description}
                        time={el.eventDate}
                        place={el.eventLocation}
                        price={`${el.eventPrice} AZN`}
                        imgHeight="200px"
                      />
                    ))}
              </div>
            </div>

            {showPopup && (
              <div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 px-[20px]">
                <div
                  ref={popupRef}
                  className={`${
                    isMobile ? "w-full" : ""
                  } bg-white p-[40px] lg:py-[98px] lg:px-[80px] rounded-[8px]`}
                >
                  <h2 className="text-base lg:text-[24px] font-[600] mb-[20px] text-center">
                    Yerlər dolmadan, öz yerini tut
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-[20px] w-full lg:w-[400px]"
                  >
                    {!accessToken && (
                      <>
                        <input
                          type="text"
                          placeholder="Ad və soyad"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          maxLength={40}
                          className={`input-default ${
                            isMobile ? "w-full" : ""
                          }`}
                        />
                        <input
                          type="email"
                          placeholder="E-poçt"
                          value={email}
                          onChange={handleEmailChange}
                          className={`h-[44px] w-full px-[20px] py-[10px] rounded-[8px] bg-[#f2f2f2] text-[16px] border ${
                            emailError
                              ? "border-red-500"
                              : "border-transparent focus:border-transparent focus:ring-0"
                          } focus:ring-0`}
                        />
                      </>
                    )}
                    <input
                      type="text"
                      placeholder={phoneNumber ? phoneNumber : placeholder}
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                      className="input-default border-none"
                    />
                    <input
                      type="number"
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      placeholder="İştirakçı sayı"
                      className="input-default border-none"
                    />
                    <button
                      type="submit"
                      className={`mt-[28px] w-full lg:w-[400px] rounded-[8px] py-[12px] ${
                        (accessToken && phoneNumber && participants) ||
                        (!accessToken &&
                          phoneNumber &&
                          participants &&
                          email &&
                          !emailError &&
                          fullName)
                          ? "bg-[#FFCE00]"
                          : "bg-[#F1DD8B] cursor-not-allowed"
                      }`}
                      disabled={
                        (accessToken && phoneNumber && participants) ||
                        (!accessToken &&
                          phoneNumber &&
                          participants &&
                          email &&
                          !emailError &&
                          fullName)
                          ? false
                          : true
                      }
                    >
                      Rezerv et
                    </button>
                  </form>
                </div>
              </div>
            )}

            {showSuccessPopup && (
              <PopupMessage
                handleContinueButtonClick={handleContinueButtonClick}
                textMessage="Rezervasiyanız qeydə alındı. Ən qısa zamanda sizinlə əlaqə saxlanılacaq. Təşəkkürlər!"
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Event;
