import SubscriptionButton from "../../components/ui/SubscriptionButton";
import { borderYellow } from "../../assets";

const Subscribe = () => {
  return (
    <section className="bg-[#F2F2F2] mt-[150px] py-[200px]">
      <div className="w-[720px] mx-auto text-center">
        <h1 className="unbounded unbounded-700 text-[60px] relative">
          Yeni tədbirlərdən ilk{" "}
          <span className="bg-border-yellow relative z-10">
            sən xəbərdar ol
          </span>
        </h1>
        <p className="mt-[30px] mb-[24px] text-[16px] font-[400]">
          Bizə abunə ol və yeni gələn hər tədbirdən yerlər tükənməmiş xəbər tut
        </p>
        <SubscriptionButton />
      </div>
    </section>
  );
};

export default Subscribe;
