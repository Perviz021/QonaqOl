import { useEffect, useState } from "react";
import ProfileSidebar from "../../components/Account/ProfileSidebar.jsx";
import ProfileContent from "../../components/Account/ProfileContent.jsx";
import { useMediaQuery } from "@uidotdev/usehooks";
import CarouselMobile from "./CarouselMobile.jsx";

const Account = () => {
  const isMobile = useMediaQuery("only screen and (max-width: 480px)");
  const [active, setActive] = useState(localStorage.getItem("activePage"));
  useEffect(() => {
    const activePage = localStorage.getItem("activePage");
    setActive(activePage);
  }, [active]);

  console.log(active);

  return (
    <div className="mt-[64px] lg:mt-[120px] w-full lg:w-[1200px] mx-auto">
      {!isMobile && (
        <h1 className="unbounded unbounded-600 text-[24px] font-bold mb-[60px] flex justify-between items-center">
          {active === "1" && "Məlumatlarım"}
          {active === "2" && "Tədbirlərim"}
          {active === "3" && "Rezervlərim"}
          {active === "4" && "Bəyəndiklərim"}
          {active === "5" && "Şifrəni yenilə"}
        </h1>
      )}
      <div className="flex mb-[80px] gap-4 py-5 rounded-[16px] flex-col lg:flex-row">
        {!isMobile ? (
          <div className="max-w-[400px] w-full bg-[#F3F4F6] rounded-[8px] ">
            <ProfileSidebar active={active} setActive={setActive} />
          </div>
        ) : (
          <CarouselMobile active={active} setActive={setActive} />
        )}
        <div className=" bg-[#F3F4F6] lg:max-w-[840px] w-full p-5 rounded-[8px]">
          <ProfileContent active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default Account;
