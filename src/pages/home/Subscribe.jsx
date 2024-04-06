import { useEffect, useState } from "react";
import SubscriptionButton from "../../components/ui/SubscriptionButton";

const Subscribe = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the threshold as needed
    };

    // Set initial screen size
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="w-full bg-[#F2F2F2] mt-[20px] lg:mt-[150px] px-[20px] py-[175px] lg:py-[200px]">
      <div className="w-full lg:w-[720px] mx-auto text-center">
        <h1 className="unbounded unbounded-700 text-[28px] lg:text-[60px] relative w-full">
          Yeni tədbirlərdən ilk{" "}
          <span
            className={`${
              isSmallScreen ? "bg-border-yellow" : "bg-border-yellow-lg"
            } relative z-10`}
          >
            sən xəbərdar ol
          </span>
        </h1>
        <p className="mt-[34px] lg:mt-[30px] mb-[60px] lg:mb-[24px] text-[16px] font-[400] leading-[24px]">
          Bizə abunə ol və yeni gələn hər tədbirdən yerlər tükənməmiş xəbər tut
        </p>
        <SubscriptionButton />
      </div>
    </section>
  );
};

export default Subscribe;
