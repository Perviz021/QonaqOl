import React, { useEffect } from "react";

import { puzzle, figures, note, cookie } from "../../assets";
import { Link, useNavigate } from "react-router-dom";

const EventCreate = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate("/create-event");
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="bg-[#303030] mt-[80px] text-[#fff] pt-[200px] pb-[160px] relative">
      <div className="w-[600px] mx-auto text-center">
        <h1 className="unbounded unbounded-600 text-[60px]">
          Tədbirinizi bizimlə tanıtın
        </h1>
        <p className="font-[400] text-[16px] leading-[24px] mt-[20px] mb-[24px]">
          Tədbirləriniz haqqında ətraflı məlumatları Qonaqol.az vasitəsilə elan
          edin. Sadəcə 1 addımla tədbirinizin qeydiyyatını həyata keçirdə
          bilərsiniz. Bunun üçün tədbir yarata klikləyərək məlumatlarınız qeyd
          edin
        </p>
        <Link
          to={"/create-event"}
          onClick={handleClick}
          className="bg-[#FFCE00] px-[78px] h-[48px] inline-flex justify-center items-center rounded-[8px] text-black font-[400] text-[16px]"
        >
          Tədbir yarat
        </Link>
      </div>
      <img src={puzzle} alt="" className="absolute top-[90px] left-[150px]" />
      <img
        src={figures}
        alt=""
        className="absolute bottom-[65px] left-[200px]"
      />
      <img src={note} alt="" className="absolute top-[62px] right-[350px]" />
      <img src={cookie} alt="" className="absolute right-[160px] top-1/2" />
    </section>
  );
};

export default EventCreate;
