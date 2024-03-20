import ProfileEdit from "./ProfileEdit";
import Rezervation from "./Rezervation";
import GiftCards from "./GiftCards";
import ChangePassword from "./ChangePassword";

const ProfileContent = ({ active }) => {
  return (
    <div>
      {active === 1 && <ProfileEdit />}
      {active === 2 && <Rezervation />}
      {active === 3 && <GiftCards />}
      {active === 4 && <ChangePassword />}
    </div>
  );
};

export default ProfileContent;
