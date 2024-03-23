import { useEffect, useState, useRef } from "react";

import ExperienceCard from "../../components/widgets/ExperienceCard";
import PopupMessage from "../../components/widgets/PopupMessage";
import { useParams } from "react-router-dom";
import { month } from "../../mock/static";
import { eventById, getEvents } from "../../utils/apiUtils";
import loader from "../../assets/img/loader.gif";
import heart from "../../assets/icons/heart.svg";
import heartFill from "../../assets/icons/heart-fill.svg";

import Share from "../../components/ui/react-share/Share";
const Event = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false); // State for email format error
  const [fullName, setFullName] = useState("");
  const [participants, setParticipants] = useState("");
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [otherEvents, setOtherEvents] = useState(null);
  const [showShare, setShowShare] = useState(false);
  const [toggle, setToggle] = useState(false);

  const [shareUrl, setShareUrl] = useState(window.location.href);
  // const event_name = name && name.replace(/-/g, " ");

  useEffect(() => {
    eventById(id).then((res) => setData(res.data));
  }, [id]);
  useEffect(() => {
    // eventById(id).then((res) => console.log(res.data));
    getEvents().then((res) =>
      setOtherEvents(res.data.filter((i) => i.category === data?.category))
    );
  }, [otherEvents, data?.category]);

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
        eventId: 5, // Replace 0 with the actual event ID
        phoneNumber,
        participantsCount: parseInt(participants), // Convert participants to integer if necessary
      };
      // Make POST request to backend with reservationData
      fetch(
        "https://qonaqol.onrender.com/qonaqol/api/reservation/create-reservation-registered",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      )
        .then((response) => {
          if (response.ok) {
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
        eventId: 2, // Replace 0 with the actual event ID
        fullName,
        email,
        phoneNumber,
        participantsCount: parseInt(participants), // Convert participants to integer if necessary
      };
      // Make POST request to backend with reservationData
      fetch(
        "https://qonaqol.onrender.com/qonaqol/api/reservation/create-reservation-unregistered",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reservationData),
        }
      )
        .then((response) => {
          if (response.ok) {
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

  return (
    <>
      {data == null ? (
        <div className="w-full h-screen flex items-center justify-center">
          <img src={loader} alt="" />
        </div>
      ) : (
        <>
          <div className="w-[1240px] mx-auto">
            <div className="flex justify-between items-center pb-10">
              <h3 className="text-[28px] mb-[40px] mt-[90px] font-[600]">
                {data?.eventName}
              </h3>
              <span className="relative flex items-center justify-center  gap-[10px] top-[40px]">
                <span className="border relative flex items-center justify-center border-[#333] size-[60px]  rounded-full">
                  <img
                    src={`${
                      showShare
                        ? "/src/assets/icons/send-2-fill.svg"
                        : "/src/assets/icons/send-2.svg"
                    }`}
                    color="red"
                    className="size-8 cursor-pointer"
                    onClick={() => setShowShare(!showShare)}
                  />

                  {showShare ? (
                    <div className="absolute top-[90px] z-30 right-0">
                      <Share shareUrl={shareUrl} setShowShare={setShowShare} />
                    </div>
                  ) : null}
                </span>
                <span
                  className="border flex items-center justify-center border-[#333] size-[60px]  rounded-full"
                  onClick={() => setToggle(!toggle)}
                >
                  <img
                    src={toggle ? heartFill : heart}
                    alt=""
                    className="cursor-pointer"
                  />
                </span>
              </span>
            </div>
            <div className="flex gap-[20px] mb-[40px]">
              <div>
                <img
                  src={data?.photoUrls[0]}
                  alt=""
                  className="w-[400px] h-[500px] object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <img
                  src={data?.photoUrls[1]}
                  alt=""
                  className="w-[400px] h-[272px] object-cover rounded-[8px]"
                />
                <img
                  src={data?.photoUrls[2]}
                  alt=""
                  className="w-[400px] h-[208px] object-cover rounded-[8px]"
                />
              </div>
              <div className="flex flex-col gap-[20px]">
                <img
                  src={data?.photoUrls[3]}
                  alt=""
                  className="w-[400px] h-[202px] object-cover rounded-[8px]"
                />
                <img
                  src={data?.photoUrls[4]}
                  alt=""
                  className="w-[400px] h-[278px] object-cover rounded-[8px]"
                />
              </div>
            </div>
            <div className="flex justify-between items-start space-x-[123px]">
              <div className="w-[715px]">
                <h3 className="text-[28px] font-[600] mb-[32px]">
                  Tədbir haqqında
                </h3>
                <p className="font-normal text-[16px] leading-[24px]">
                  {data?.description}
                </p>
                <p className="mt-[48px]">
                  <span className="text-[20px] font-[600] mr-[8px]">
                    Ünvan:
                  </span>
                  <span className="text-[16px]">{data?.eventLocation}</span>
                </p>
              </div>
              <div className="p-[40px] bg-[#fafafa] w-[400px] rounded-[8px]">
                <div className="border-b border-[#e1e1e1]">
                  <h2 className="font-[600] text-[28px] mb-[12px]">
                    {data?.eventName}
                  </h2>
                  <div className="space-y-[8px] py-[12px]">
                    <p className="text-[16px]">
                      Qiymət: <span>{data?.eventPrice}</span> AZN
                    </p>
                    <p className="text-[16px]">
                      Dil: <span>{data?.language}</span>
                    </p>
                    <p className="text-[16px]">
                      Kateqoriya: <span>{data?.category}</span>
                    </p>
                  </div>
                </div>
                <div className="border-b border-[#e1e1e1] py-[12px]">
                  <h5 className="font-[600] text-[18px]">Mövcud tarixlər</h5>
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
            <div className="mb-[120px]">
              <h4 className="unbounded unbounded-600 text-[24px] my-[40px]">
                Oxşar tədbirlər
              </h4>

              <div className="gap-[20px] flex pb-24 justify-between">
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
              <div className="fixed top-0 left-0 z-50 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50">
                <div
                  ref={popupRef}
                  className="bg-white py-[98px] px-[80px] rounded-[8px]"
                >
                  <h2 className="text-[24px] font-[600] mb-[20px] text-center">
                    Yerlər dolmadan, öz yerini tut
                  </h2>
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-[20px] w-[400px]"
                  >
                    {!accessToken && (
                      <>
                        <input
                          type="text"
                          placeholder="Ad Soyad"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          maxLength={40}
                          className="h-[44px] w-full px-[20px] py-[10px] rounded-[8px] bg-[#f2f2f2] text-[16px] border-transparent focus:border-transparent focus:ring-0"
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
                      className="h-[44px] w-full px-[20px] py-[10px] rounded-[8px] bg-[#f2f2f2] text-[16px] border-transparent focus:border-transparent focus:ring-0"
                    />
                    <input
                      type="number"
                      value={participants}
                      onChange={(e) => setParticipants(e.target.value)}
                      placeholder="İştirakçı sayı"
                      className="h-[44px] w-full px-[20px] py-[10px] rounded-[8px] bg-[#f2f2f2] text-[16px] border-transparent focus:border-transparent focus:ring-0"
                    />
                    <button
                      type="submit"
                      className={`mt-[28px] w-[400px] rounded-[8px] py-[12px] ${
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
