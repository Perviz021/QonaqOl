import React from "react";
import {
  heart2,
  event1,
  event2,
  event3,
  event4,
  event5,
  exp1,
  exp2,
  exp3,
} from "../../assets";
import ExperienceCard from "../../components/widgets/ExperienceCard";

const Event = () => {
  return (
    <div className="w-[1240px] mx-auto">
      <div className="flex justify-between items-center">
        <h3 className="text-[28px] mb-[40px] mt-[90px] font-[600]">
          Aşpaz Abbasın pasta sirləri masterklassı
        </h3>
        <span className="relative top-[40px]">
          <img src={heart2} alt="" />
        </span>
      </div>
      <div className="flex gap-[20px] mb-[40px]">
        <div>
          <img
            src={event1}
            alt=""
            className="w-[400px] h-[500px] object-cover rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <img
            src={event2}
            alt=""
            className="w-[400px] h-[272px] object-cover rounded-[8px]"
          />
          <img
            src={event3}
            alt=""
            className="w-[400px] h-[208px] object-cover rounded-[8px]"
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          <img
            src={event4}
            alt=""
            className="w-[400px] h-[202px] object-cover rounded-[8px]"
          />
          <img
            src={event5}
            alt=""
            className="w-[400px] h-[278px] object-cover rounded-[8px]"
          />
        </div>
      </div>
      <div className="flex justify-between items-start space-x-[123px]">
        <div className="w-[715px]">
          <h3 className="text-[28px] font-[600] mb-[32px]">Tədbir haqqında</h3>
          <p className="font-normal text-[16px] leading-[24px]">
            Uşaqlarınız "Pizza Hut" şəbəkəsinin dünya standartları ilə maraqlı
            və əyləncəli pasta bişirmə prosesində iştirak edəcəklər. Peşakar
            pastamaker onlara mükəmməl pastanın sirlərini açacaq! Uşaq
            master-klasslarımız hətta ən balaca qonaqlarımızı heyran edəcək!
          </p>
          <p className="mt-[48px]">
            <span className="text-[20px] font-[600] mr-[8px]">Ünvan:</span>
            <span className="text-[16px]">Nərimanov, Əhməd Rəcəbli</span>
          </p>
        </div>
        <div className="p-[40px] bg-[#fafafa] w-[400px] rounded-[8px]">
          <div className="border-b border-[#e1e1e1]">
            <h2 className="font-[600] text-[28px] mb-[12px]">
              Aşpaz Abbasın pasta sirləri masterklassı
            </h2>
            <div className="space-y-[8px] py-[12px]">
              <p className="text-[16px]">
                Qiymət: <span>25</span> AZN
              </p>
              <p className="text-[16px]">
                Dil: <span>Azərbaycan</span>
              </p>
              <p className="text-[16px]">
                Kateqoriya: <span>Yemək hazırlama</span>
              </p>
            </div>
          </div>
          <div className="border-b border-[#e1e1e1] py-[12px]">
            <h5 className="font-[600] text-[18px]">Mövcud tarixlər</h5>
            <p className="text-[16px]">02 mart 2024 , 16:00 - 19:00 </p>
          </div>
          <button className="text-[16px] bg-[#FFCE00] rounded-[8px] h-[48px] px-[124px] shrink-0 mt-[16px]">
            Rezerv et
          </button>
        </div>
      </div>
      <div className="mb-[120px]">
        <h4 className="unbounded unbounded-600 text-[24px] my-[40px]">
          Oxşar tədbirlər
        </h4>

        <div className="gap-[20px] flex justify-between">
          <ExperienceCard
            imgSrc={exp1}
            content="Aşpaz Abbasın pasta sirləri"
            time="02 Mart"
            place="Azərbaycan prospekti, A.."
            price="30 Azn"
            imgWidth="400px"
          />
          <ExperienceCard
            imgSrc={exp2}
            content="Aida seramik masterklas"
            time="19 fevral"
            place="Caspian plaza"
            price="30 Azn"
            imgWidth="400px"
          />
          <ExperienceCard
            imgSrc={exp3}
            content="SOLART rəssamlıq masterklas"
            time="14 fevral"
            place="İçəri şəhər, Solart scho.."
            price="30 Azn"
            imgWidth="400px"
          />
        </div>
      </div>
    </div>
  );
};

export default Event;
