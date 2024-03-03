import ExperienceCard from "../../components/widgets/ExperienceCard";

import {
  exp1,
  exp2,
  exp3,
  exp4,
  exp5,
  exp6,
  exp7,
  exp8,
  arrowRight,
} from "../../assets";

function ExperiencesSection() {
  return (
    <section id="experiences" className="w-[1240px] mx-auto mt-[80px]">
      <h1 className="unbounded unbounded-600 text-[24px] mb-[60px] flex justify-between items-center">
        Populyar tədbirlər
        <span>
          <img src={arrowRight} alt="" />
        </span>
      </h1>

      {/* Experiences Cards */}
      <div className="container mx-auto">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[40px]">
          <ExperienceCard
            imgSrc={exp1}
            content="Aşpaz Abbasın pasta sirləri"
            time="02 Mart"
            place="Azərbaycan prospekti, A.."
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp2}
            content="Aida seramik masterklas"
            time="19 fevral"
            place="Caspian plaza"
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp3}
            content="SOLART rəssamlıq masterklas"
            time="14 fevral"
            place="İçəri şəhər, Solart scho.."
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp4}
            content="Pizza bruno pizza masterklas 🍕"
            time="16 fevral"
            place="Pizza Bruno, Nizami filialı.."
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp5}
            content="Cafephile kofe cupping"
            time="12 Mart"
            place="Ağ şəhər filialı"
            price="Pulsuz"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp6}
            content="Həvəskarlar Futbol Liqası"
            time="07 Mart"
            place="Baku Olimpiya Stadionu"
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp7}
            content="Voleybol Çempionatı"
            time="22 Fevral"
            place="Sərhədçi İdman Mərkəzi"
            price="30 Azn"
            imgHeight="200px"
          />
          <ExperienceCard
            imgSrc={exp8}
            content="Go-kart track"
            time="10 Fevral"
            place="Baku City Karting"
            price="30 Azn"
            imgHeight="200px"
          />
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;
