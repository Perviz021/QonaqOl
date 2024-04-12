import { useEffect, useState } from "react";
import ProfileSidebar from "../../components/Account/ProfileSidebar.jsx";
import ProfileContent from "../../components/Account/ProfileContent.jsx";

const Account = () => {
  const [active, setActive] = useState(localStorage.getItem("activePage"));
  useEffect(() => {
    const activePage = localStorage.getItem("activePage");
    setActive(activePage);
  }, [active]);

  return (
    <div className="mt-[120px] w-[1200px] mx-auto">
      <h1 className="unbounded unbounded-600 text-[24px] font-bold mb-[60px] flex justify-between items-center">
        {active === "1" && "Məlumatlarım"}
        {active === "2" && "Tədbirlərim"}
        {active === "3" && "Rezervlərim"}
        {active === "4" && "Bəyəndiklərim"}
        {active === "5" && "Şifrəni yenilə"}
      </h1>
      <div className="    flex mb-[80px] gap-4  py-5 rounded-[16px]">
        <div className="max-w-[400px] w-full bg-[#F3F4F6] rounded-[8px] ">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <div className=" bg-[#F3F4F6]  max-w-[840px] w-full p-5 rounded-[8px]">
          <ProfileContent active={active} setActive={setActive} />
        </div>
      </div>
    </div>
  );
};

export default Account;
