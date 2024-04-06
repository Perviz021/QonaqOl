import React, { useEffect, useState } from "react";

import { puzzle, figures, note, cookie } from "../../assets";
import { Link } from "react-router-dom";

const EventCreate = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <section className="w-full bg-[#303030] mt-[62px] lg:mt-[80px] text-[#fff] pt-[220px] pb-[270px] lg:pt-[200px] lg:pb-[160px] relative">
      <div className="px-[15px] lg:w-[605px] lg:mx-auto text-center">
        <h1 className="unbounded unbounded-600 text-[32px] lg:text-[60px]">
          Tədbirinizi bizimlə tanıtın
        </h1>
        <p className="font-[400] text-[12px] lg:text-[16px] leading-[20px] lg:leading-[24px] my-[20px] lg:mt-[20px] lg:mb-[24px]">
          Tədbirləriniz haqqında ətraflı məlumatları Qonaqol.az vasitəsilə elan
          edin. Sadəcə 1 addımla tədbirinizin qeydiyyatını həyata keçirdə
          bilərsiniz. Bunun üçün tədbir yarata klikləyərək məlumatlarınız qeyd
          edin
        </p>
        <Link
          to={token ? "/create-event" : "/signup?data=event"}
          className="bg-[#FFCE00] px-[55px] lg:px-[78px] h-[48px] inline-flex justify-center items-center rounded-[8px] text-black font-[400] text-[16px]"
        >
          Tədbir yarat
        </Link>
      </div>
      <img
        src={puzzle}
        alt=""
        className="absolute top-[109px] left-0 lg:top-[90px] lg:left-[150px] size-[61px] lg:size-[102px]"
      />
      <img
        src={figures}
        alt=""
        className="absolute bottom-[109px] lg:bottom-[65px] left-[11px] lg:left-[200px] w-[61px] h-[64px] lg:w-[110px] lg:h-[118px]"
      />
      <img
        src={note}
        alt=""
        className="absolute top-[174px] right-[10px] lg:top-[62px] lg:right-[350px] w-[61px] h-[50px] lg:w-[89px] lg:h-[75px]"
      />
      <img
        src={cookie}
        alt=""
        className="absolute right-[2px] lg:right-[160px] bottom-[204px] lg:top-1/2 w-[61px] h-[55px] lg:w-[77px] lg:h-[71px]"
      />
    </section>
  );
};

export default EventCreate;
