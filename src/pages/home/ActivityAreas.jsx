import React from "react";

import { tree, cake, brush, home2, music, swatch } from "../../assets";
import { NavLink } from "react-router-dom";

const ActivityAreas = () => {
  return (
    <section className="w-full bg-[#F2F2F2] py-[50px] mt-[80px]">
      <div className="text-center">
        <h1 className="unbounded unbounded-600 text-[24px]">Tədbir sahələri</h1>
        <p className="text-[16px] font-[400] mt-[16px]">
          Fərqli fəaliyyət sahələri ilə müxtəlif tədbirləri bir arada tuturuq
        </p>
      </div>
      <div className="w-[1194px] mx-auto flex justify-between mt-[40px]">
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={tree} alt="" />
          <p>Kənd həyatı</p>
        </span>
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={cake} alt="" />
          <p>Yemək hazırlama</p>
        </span>
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={brush} alt="" />
          <p>Rəssamlıq</p>
        </span>
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={swatch} alt="" />
          <p>Dulusculuq</p>
        </span>
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={home2} alt="" />
          <p>Kamplar</p>
        </span>
        <span className="inline-flex flex-col items-center space-y-[12px]">
          <img src={music} alt="" />
          <p>Musiqi</p>
        </span>
      </div>
    </section>
  );
};

export default ActivityAreas;
