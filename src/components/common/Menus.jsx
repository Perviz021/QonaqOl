import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import DrawerMobile from "./DrawerMobile";

function Menus({ activeNavLink, setActiveNavLink }) {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const handleNavLinkClick = (navLinkId) => {
    setActiveNavLink(navLinkId);
  };

  return (
    <>
      {isMobile && (
        <div>
          <DrawerMobile />
        </div>
      )}

      {isDesktop && (
        <div className="flex items-center font-[400] text-[#000000B2] text-[16px] space-x-[70px]">
          <NavLink
            to="/events"
            onClick={() => {
              handleNavLinkClick("events");
            }}
            className={activeNavLink === "events" ? "font-[600]" : ""}
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
      )}
    </>
  );
}

export default Menus;
