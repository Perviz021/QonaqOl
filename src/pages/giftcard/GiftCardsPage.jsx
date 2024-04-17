import React, { useEffect, useState } from "react";
import GiftCard from "../../components/widgets/GiftCard";
import { giftcard1, giftcard2, giftcard3 } from "../../assets";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { useMediaQuery } from "@uidotdev/usehooks";
import PopupMessage from "../../components/widgets/PopupMessage";

const GiftCardsPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showPopup = () => {
    setOpenPopup(true);
  };

  const onSubmit = () => {
    setOpenPopup(false);
    setShowSuccessPopup(true);
  };

  const handleInputChange = () => {
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleContinueButtonClick = () => {
    setShowSuccessPopup(false); // Close the pop-up
  };

  const handleChangePhoneNumber = (e) => {
    let inputValue = e.target.value;
    // Allow only digits and limit input to 12 characters
    inputValue = inputValue.replace(/\D/g, "").slice(0, 12);

    if (inputValue.length > 0) {
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
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${isMobile ? "px-[20px]" : ""}`}>
      <div
        className={`${
          isMobile
            ? "w-full mt-[80px] mb-[40px]"
            : "w-[800px] mt-[120px] mb-[80px]"
        } text-center mx-auto space-y-[36px]`}
      >
        <h1
          className={`${
            isMobile
              ? "text-[30px] leading-[40px]"
              : "text-[60px] leading-[68px]"
          } unbounded unbounded-700`}
        >
          Hədiyyə kartları ilə yaxınlarını sevindir
        </h1>
        <p className="text-base">
          Hədiyyə kartlarımızla sonsuz əyləncə və səmərəli vaxt hədiyyə edin.
          Məbləğinizi seçin, mesajınızı fərdiləşdirin və dərhal e-poçt
          vasitəsilə çatdırın. Qəbul edən dostlarınız master-klasslardan,
          kamplara qədər 120-dən çox fəaliyyət növündə istifadə etsinlər.
        </p>
      </div>
      <div
        className={`${
          isMobile
            ? "flex-col mb-[470px] gap-[36px] justify-center"
            : "mb-[240px] gap-[18px] justify-between px-[100px]"
        } w-full flex`}
      >
        <GiftCard imgSrc={giftcard1} showPopup={showPopup} /> {/* AZN_50*/}
        <GiftCard imgSrc={giftcard2} showPopup={showPopup} /> {/* AZN_100*/}
        <GiftCard imgSrc={giftcard3} showPopup={showPopup} /> {/* AZN_200*/}
      </div>

      {openPopup && (
        <div className="fixed top-0 left-0 z-50 size-full flex flex-col justify-center items-center bg-black bg-opacity-50 px-[20px] lg:px-0">
          <div
            className={`${
              isMobile ? "w-full" : ""
            } p-[40px] relative bg-white rounded-[8px]`}
          >
            <span
              className="absolute top-6 cursor-pointer right-4 size-6 "
              onClick={() => setOpenPopup(false)}
            >
              <FaXmark />
            </span>
            <h2 className="font-[600] text-[16px] lg:text-[24px] text-center mb-[30px]">
              Sevdiklərinizi sevindirin
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={`${
                isMobile ? "w-full" : "w-[400px]"
              }  space-y-[20px] flex flex-col`}
            >
              <input
                {...register("to", { required: true })}
                placeholder="Kimə"
                className="input-default placeholder:text-[#00000080]"
                onChange={handleInputChange}
              />
              <input
                {...register("from", { required: true })}
                placeholder="Kimdən"
                className="input-default placeholder:text-[#00000080]"
                onChange={handleInputChange}
              />
              <input
                {...register("message")}
                placeholder="Şəxsi mesaj"
                className="input-default placeholder:text-[#00000080]"
              />
              <input
                type="text"
                className="input-default border-none placeholder:text-[#00000080]"
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
                placeholder="Əlaqə nömrəsi"
              />
              <button
                type="submit"
                className={`mt-[24px] rounded-[8px] h-[48px] ${
                  isFormValid
                    ? "bg-[#FFCE00] cursor-pointer"
                    : "bg-[#F1DD8B] cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                Kartı al
              </button>
            </form>
          </div>
        </div>
      )}

      {showSuccessPopup && (
        <PopupMessage
          handleContinueButtonClick={handleContinueButtonClick}
          setShowSuccessPopup={setShowSuccessPopup}
          textMessage="Hədiyyə kartı müraciətiniz qeydə alındı. Ən qısa zamanda sizinlə
                əlaqə saxlanılacaq.Təşəkkür edirik 😊"
        />
      )}
    </div>
  );
};

export default GiftCardsPage;
