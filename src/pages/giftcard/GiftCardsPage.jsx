import React, { useState } from "react";
import GiftCard from "../../components/widgets/GiftCard";
import { giftcard1, giftcard2, giftcard3 } from "../../assets";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";

const GiftCardsPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

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

  return (
    <div>
      <div className="text-center mt-[120px] w-[800px] mx-auto space-y-[36px] mb-[80px]">
        <h1 className="unbounded unbounded-700 text-[60px] leading-[68px]">
          Hədiyyə kartları ilə yaxınlarını sevindir
        </h1>
        <p className="font-normal text-[16px] leading-[24px]">
          Hədiyyə kartlarımızla sonsuz əyləncə və səmərəli vaxt hədiyyə edin.
          Məbləğinizi seçin, mesajınızı fərdiləşdirin və dərhal e-poçt
          vasitəsilə çatdırın. Qəbul edən dostlarınız master-klasslardan,
          kamplara qədər 120-dən çox fəaliyyət növündə istifadə etsinlər.
        </p>
      </div>
      <div className="w-full px-[100px] flex justify-between gap-[18px] mb-[100px]">
        <GiftCard imgSrc={giftcard1} showPopup={showPopup} /> {/* AZN_50*/}
        <GiftCard imgSrc={giftcard2} showPopup={showPopup} /> {/* AZN_100*/}
        <GiftCard imgSrc={giftcard3} showPopup={showPopup} /> {/* AZN_200*/}
      </div>
      <div className="w-[full] px-[100px] mb-[400px]">
        <h1 className="unbounded unbounded-700 text-[40px] mb-[36px]">
          İstifadə qaydası
        </h1>
        <div className="flex pl-[30px]">
          <div className="w-1/2">
            <ul className="text-[18px] space-y-[10px] list-disc">
              <li>Qonaqol.az saytında qeydiyyatdan keçin</li>
              <li>Hesabım səhifəsinə keçin</li>
              <li>Cüzdan bölməsinə keçin</li>
              <li>Hədiyyə kartını istifadə et düyməsinə klikləyin</li>
            </ul>
          </div>
          <div className="w-1/2">
            <ul className="text-[18px] space-y-[10px] list-disc">
              <li>Hədiyyə kartı kodunu əlavə edin və istifadə edin</li>
              <li>
                Hər hansı bir fəaliyyətə bilet sifariş etdiyiniz zaman, ödəniş
                zamanı balansdan istifadə edin
              </li>
            </ul>
          </div>
        </div>
      </div>

      {openPopup && (
        <div className="fixed top-0 left-0 size-full flex flex-col justify-center items-center bg-black bg-opacity-50">
          <div className="p-[40px] relative bg-white rounded-[8px]">
            <span
              className="absolute top-6 cursor-pointer right-4 size-6 "
              onClick={() => setOpenPopup(false)}
            >
              <FaXmark />
            </span>
            <h2 className="font-[600] text-[24px] text-center mb-[30px]">
              Sevdiklərinizi sevindirin
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-[400px] space-y-[20px] flex flex-col"
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
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default GiftCardsPage;
