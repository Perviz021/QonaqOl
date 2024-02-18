import ActivityAreas from "./ActivityAreas";
import Blog from "./Blog";
import EventCreate from "./EventCreate";
import ExperiencesSection from "./ExperiencesSection";
import Subscribe from "./Subscribe";

function HomePage() {
  return (
    <>
      <ActivityAreas />
      <ExperiencesSection />
      <EventCreate />
      <Blog />
      <Subscribe />
    </>
  );
}

export default HomePage;
