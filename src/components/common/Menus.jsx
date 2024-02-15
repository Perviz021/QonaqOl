import { NavLink } from "react-router-dom";

function Menus() {
  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById("experiences");
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center font-[400] text-[#000] text-[16px] space-x-[56px]">
      <NavLink to="/gift-cards">Hədiyyə Kartı</NavLink>
      <NavLink to="#" onClick={scrollToExperiences}>
        Təcrübələr
      </NavLink>
      <NavLink to="#">Haqqımızda</NavLink>
    </div>
  );
}

export default Menus;
