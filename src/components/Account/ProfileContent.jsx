import ProfileEdit from "./ProfileEdit";
import Rezervation from "./MyEvents";
import GiftCards from "./GiftCards";
import ChangePassword from "./ChangePassword";
import MyReservations from "./MyReservations";
import Wishlist from "./Wishlist";

const ProfileContent = ({ active }) => {
  return (
    <div>
      {active === 1 && <ProfileEdit />}
      {active === 2 && <Rezervation />}
      {active === 3 && <MyReservations />}
      {active === 4 && <Wishlist />}
      {active === 5 && <ChangePassword />}
    </div>
  );
};

export default ProfileContent;
