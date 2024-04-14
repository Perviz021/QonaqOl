import ProfileEdit from "./ProfileEdit";
import Events from "./MyEvents";
import ChangePassword from "./ChangePassword";
import MyReservations from "./MyReservations";
import Wishlist from "./Wishlist";
import { useEffect } from "react";

const ProfileContent = ({ active, setActive }) => {
  useEffect(() => {
    setActive(localStorage.getItem("activePage"));
  }, [setActive, active]);
  return (
    <div>
      {active === "1" && <ProfileEdit />}
      {active === "2" && <Events />}
      {active === "3" && <MyReservations />}
      {active === "4" && <Wishlist />}
      {active === "5" && <ChangePassword />}
    </div>
  );
};

export default ProfileContent;
