import React, { useEffect } from "react";
import AboutCard from "./AboutCard";

const About = () => {
  useEffect(() => {
    // Smooth scrolling:
    // const scrollToTop = () => {
    //   const c = document.documentElement.scrollTop || document.body.scrollTop;
    //   if (c > 0) {
    //     window.requestAnimationFrame(scrollToTop);
    //     window.scrollTo(0, c - c / 8); // Adjust the divisor to control scrolling speed
    //   }
    // };
    // scrollToTop();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-[820px] mx-auto mt-[140px] mb-[400px] space-y-[36px]">
      <AboutCard headerText="Biz kimik?" />
      <AboutCard headerText="Məqsədimiz" />
      <AboutCard headerText="Missiyamız" />
    </div>
  );
};

export default About;
