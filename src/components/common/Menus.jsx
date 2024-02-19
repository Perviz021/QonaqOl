import { NavLink } from "react-router-dom";
import { useState } from "react";

function Menus({ isLoggedIn }) {
  const [activeNavLink, setActiveNavLink] = useState(null);

  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById("experiences");
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (navLinkId) => {
    setActiveNavLink(navLinkId);
  };

  return (
    <div className="flex items-center font-[400] text-[#000] text-[16px] space-x-[56px]">
      <NavLink
        to="/gift-cards"
        onClick={() => handleNavLinkClick("gift-cards")}
        className={activeNavLink === "gift-cards" ? "font-[600]" : ""}
      >
        Hədiyyə Kartı
      </NavLink>
      <NavLink
        to="#"
        onClick={() => {
          handleNavLinkClick("experiences");
          scrollToExperiences();
        }}
        className={activeNavLink === "experiences" ? "font-[600]" : ""}
      >
        Təcrübələr
      </NavLink>
      <NavLink
        to="#"
        onClick={() => handleNavLinkClick("about")}
        className={activeNavLink === "about" ? "font-[600]" : ""}
      >
        Haqqımızda
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/create-activity"
          onClick={() => handleNavLinkClick("create-activity")}
          className={activeNavLink === "create-activity" ? "font-[600]" : ""}
        >
          Fəaliyyət yarat
        </NavLink>
      )}
    </div>
  );
}

export default Menus;
