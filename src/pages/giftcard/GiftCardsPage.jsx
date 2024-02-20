import React from "react";
import GiftCard from "../../components/widgets/GiftCard";
import { giftcard1, giftcard2, giftcard3 } from "../../assets";

const GiftCardsPage = () => {
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
        <GiftCard imgSrc={giftcard1} />
        <GiftCard imgSrc={giftcard2} />
        <GiftCard imgSrc={giftcard3} />
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
    </div>
  );
};

export default GiftCardsPage;
