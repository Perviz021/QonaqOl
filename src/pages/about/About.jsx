import React from "react";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-[820px] mx-auto mt-[140px] mb-[400px] space-y-[36px]">
      <AboutCard headerText="Biz kimik?" />
      <AboutCard headerText="Məqsədimiz" />
      <AboutCard headerText="Missiyamız" />
    </div>
  );
};

export default About;
