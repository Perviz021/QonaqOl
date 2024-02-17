import ActivityAreas from "./ActivityAreas";
import Blog from "./Blog";
import EventCreate from "./EventCreate";
import ExperiencesSection from "./ExperiencesSection";
import Newsletter from "./Newsletter";

function HomePage() {
  return (
    <>
      <ActivityAreas />
      <ExperiencesSection />
      <EventCreate />
      <Blog />
      <Newsletter />
    </>
  );
}

export default HomePage;
