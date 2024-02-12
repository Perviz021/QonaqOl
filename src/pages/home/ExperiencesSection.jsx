import React, { useState } from "react";
import Dropdown from "../../components/ui/Dropdown";
import ExperienceCard from "../../components/widgets/ExperienceCard";

function ExperiencesSection() {
  // Dummy function to simulate fetching more data from the backend
  const fetchMoreExperiences = () => {
    // Assuming the backend returns more data, increase the number of cards by 4
    setNumCards((prevNumCards) => prevNumCards + 4);
  };

  return (
    <section
      id="experiences"
      className="w-[1240px] mx-auto mt-[100px] font-inter"
    >
      <h1 className="font-bold text-[40px] text-[#242565] mb-[34px]">
        Təcrübələr
      </h1>
      <Dropdown />

      {/* Experiences Cards */}
      <div className="container mx-auto mt-[80px]">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-[20px]">
          {[0, 1, 2, 3].map((index) => (
            <ExperienceCard key={index} index={index} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
          {[4, 5, 6, 7].map((index) => (
            <ExperienceCard key={index} index={index} />
          ))}
        </div>

        {/* Button to load more experiences */}
        <div className="flex justify-center mt-[140px]">
          <button
            className="bg-white h-[60px] px-[50px] text-[18px] font-[600] font-inter text-[#3D37F1] border-[2px] border-[#3D37F1] rounded-[50px]"
            onClick={fetchMoreExperiences}
          >
            Daha çox
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExperiencesSection;
