import React, { useEffect, useState } from "react";
import GiftCard from "../../components/widgets/GiftCard";
import { giftcard1, giftcard2, giftcard3 } from "../../assets";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { useMediaQuery } from "@uidotdev/usehooks";

const GiftCardsPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const showPopup = () => {
    setOpenPopup(true);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleInputChange = () => {
    setIsFormValid(errors.length === 0);
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
        <div className="fixed top-0 left-0 size-full flex flex-col justify-center items-center bg-black bg-opacity-50 px-[20px] lg:px-0">
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
                className="rounded-[8px] bg-[#f2f2f2] placeholder:opacity-50 py-[10px] px-[20px] border-none outline-none"
                onChange={handleInputChange}
              />
              <input
                {...register("from", { required: true })}
                placeholder="Kimdən"
                className="rounded-[8px] bg-[#f2f2f2] placeholder:opacity-50 py-[10px] px-[20px] border-none outline-none"
                onChange={handleInputChange}
              />
              <input
                {...register("message")}
                placeholder="Şəxsi mesaj"
                className="rounded-[8px] bg-[#f2f2f2] placeholder:opacity-50 py-[10px] px-[20px] border-none outline-none"
              />
              <input
                {...register("contact", {
                  pattern: /^[0-9]*$/,
                  required: true,
                })}
                type="tel"
                placeholder="Əlaqə nömrəsi"
                className="rounded-[8px] bg-[#f2f2f2] placeholder:opacity-50 py-[10px] px-[20px] border-none outline-none"
                onChange={handleInputChange}
                onPaste={(e) => e.preventDefault()} // Prevent pasting non-numeric values
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
    </div>
  );
};

export default GiftCardsPage;
