import { useState } from "react";
import ProfileSidebar from "../../components/Account/ProfileSidebar.jsx";
import ProfileContent from "../../components/Account/ProfileContent.jsx";

const Account = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="mt-[120px] w-[1200px] mx-auto">
      <h1 className="unbounded unbounded-600 text-[24px] font-bold mb-[60px] flex justify-between items-center">
        {active === 1 && "Şəxsi məlumatlar"}
        {active === 2 && "Mənim rezervlərim"}
        {active === 3 && "Hədiyyə kartlarım"}
        {active === 4 && "Şifrəni yenilə"}
      </h1>
      <div className="   space-y-[36px] flex mb-[80px]  py-5 bg-[#F3F4F6] rounded-[16px]">
        <div className="max-w-[400px] w-full">
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <div className="  max-w-[840px] w-full">
          <ProfileContent active={active} />
        </div>
      </div>
    </div>
  );
};

export default Account;
