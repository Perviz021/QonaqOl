import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Menus({ activeNavLink, setActiveNavLink }) {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken);
  }, []);

  useEffect(() => {
    // Clear active link state when setActiveNavLink is called with an empty string
    return () => {
      setActiveNavLink("");
    };
  }, [setActiveNavLink]);

  const scrollToExperiences = () => {
    const experiencesSection = document.getElementById("experiences");
    if (experiencesSection) {
      experiencesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavLinkClick = (navLinkId) => {
    setActiveNavLink(navLinkId);

    if (navLinkId === "experiences") {
      // Navigate to the homepage first and then scroll to the experiences section
      navigate("/");
      setTimeout(scrollToExperiences, 100); // Adjust the delay as needed
    }
  };

  return (
    <div className="flex items-center font-[400] text-[#000] text-[16px] space-x-[70px]">
      <NavLink
        to="/events"
        onClick={() => {
          handleNavLinkClick("experiences");
          // scrollToExperiences();
        }}
        className={activeNavLink === "experiences" ? "font-[600]" : ""}
      >
        Tədbirlər
      </NavLink>
      <NavLink
        to="/about"
        onClick={() => handleNavLinkClick("about")}
        className={activeNavLink === "about" ? "font-[600]" : ""}
      >
        Haqqımızda
      </NavLink>
      <NavLink
        to="/gift-cards"
        onClick={() => handleNavLinkClick("gift-cards")}
        className={activeNavLink === "gift-cards" ? "font-[600]" : ""}
      >
        Hədiyyə Kartı
      </NavLink>
    </div>
  );
}

export default Menus;
