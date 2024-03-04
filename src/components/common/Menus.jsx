import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Menus() {
  const [activeNavLink, setActiveNavLink] = useState("");
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken);
  }, []);

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
      {token && (
        <NavLink
          to="/create-event"
          onClick={() => handleNavLinkClick("create-event")}
          className={activeNavLink === "create-event" ? "font-[600]" : ""}
        >
          Tədbir yarat
        </NavLink>
      )}
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
    </div>
  );
}

export default Menus;
