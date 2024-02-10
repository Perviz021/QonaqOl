import Dropdown from "../../components/ui/Dropdown";
import ExperienceCard from "../../components/widgets/ExperienceCard";

function ExperiencesSection() {
  return (
    <section id="experiences" className="w-[1240px] mx-auto mt-[100px]">
      <h1 className="font-bold text-[40px] text-[#242565]">Təcrübələr</h1>
      <Dropdown />
      <div className="grid grid-cols-4">
        <ExperienceCard />
      </div>
    </section>
  );
}

export default ExperiencesSection;
