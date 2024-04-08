import { useMediaQuery } from "@uidotdev/usehooks";
import Header from "../../components/common/Header";
import Navbar from "../../components/common/Navbar";
import ActivityAreas from "./ActivityAreas";
import Blog from "./Blog";
import EventCreate from "./EventCreate";
import ExperiencesSection from "./ExperiencesSection";
import Subscribe from "./Subscribe";

function HomePage() {
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  return (
    <div className={`${isMobile && "overflow-x-hidden"}`}>
      <div className={`${isMobile && "relative pt-[10px]"}`}>
        <Navbar />
        <Header />
        {isMobile && (
          <div className="absolute top-0 left-0 w-full h-[835px] headerBgMobile"></div>
        )}
      </div>
      <ActivityAreas />
      <ExperiencesSection />
      <EventCreate />
      <Blog />
      <Subscribe />
    </div>
  );
}

export default HomePage;
