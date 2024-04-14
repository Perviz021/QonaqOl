import { useEffect } from "react";

const ProfileSidebar = ({ active, setActive }) => {
  useEffect(() => {
    setActive(localStorage.getItem("activePage"));
    localStorage.setItem("activePage", active);
  }, [active, setActive]);

  const items = [
    { id: "1", label: "Məlumatlarım" },
    { id: "2", label: "Tədbirlərim" },
    { id: "3", label: "Rezervlərim" },
    { id: "4", label: "Bəyəndiklərim" },
    { id: "5", label: "Şifrəni yenilə" },
  ];
  return (
    <div className="flex flex-col transition-colors max-w-[400px] h-full px-7 py-10 text-[18px] font-medium ">
      {items.map((el, i) => (
        <div
          key={i}
          onClick={() => setActive(el.id)}
          className={`py-[10px] transition-colors leading-[40px] px-5 cursor-pointer rounded-[8px] ${
            active === el.id ? "bg-white" : null
          }  `}
        >
          {el.label}
        </div>
      ))}
    </div>
  );
};

export default ProfileSidebar;
