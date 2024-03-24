const ProfileSidebar = ({ active, setActive }) => {
  return (
    <div className="flex flex-col transition-colors max-w-[400px]  px-7 py-10 text-[18px] font-medium ">
      <div
        onClick={() => setActive(1)}
        className={`py-[10px] leading-[40px] px-5 cursor-pointer  rounded-[8px] ${
          active === 1 ? "bg-white" : null
        }  `}
      >
        Profil
      </div>
      <div
        onClick={() => setActive(2)}
        className={`py-[10px] transition-colors cursor-pointer  leading-[40px] px-5  rounded-[8px] ${
          active === 2 ? "bg-white" : null
        } `}
      >
        Mənim tədbirlərim
      </div>
      <div
        onClick={() => setActive(3)}
        className={`py-[10px] transition-colors cursor-pointer leading-[40px] px-5  rounded-[8px] ${
          active === 3 ? "bg-white" : null
        } `}
      >
        Hədiyyə kartlarım
      </div>
      <div
        onClick={() => setActive(4)}
        className={`py-[10px] transition-colors cursor-pointer leading-[40px] px-5  rounded-[8px] ${
          active === 4 ? "bg-white" : null
        } `}
      >
        Şifrəni yenilə
      </div>
    </div>
  );
};

export default ProfileSidebar;
