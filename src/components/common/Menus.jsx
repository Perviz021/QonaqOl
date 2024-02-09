import { NavLink } from "react-router-dom";

function Menus() {
  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById("experiences");
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center font-medium text-white text-[20px] space-x-8">
      <NavLink to="/gift-cards">Hədiyyə Kartı</NavLink>
      <NavLink to="#" onClick={scrollToExperiences}>
        Təcrübələr
      </NavLink>
      <NavLink to="#">Haqqımızda</NavLink>
    </div>
  );
}

export default Menus;
