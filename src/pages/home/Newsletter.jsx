import { newsletterBg } from "../../assets";
import SubscriptionButton from "../../components/ui/SubscriptionButton";

const Newsletter = () => {
  return (
    <section className="w-[977px] mx-auto h-[450px] space-x-[62px] my-[140px] bg-[#FFFFFE] border border-[#E4DFFB]  rounded-[40px] py-[82px] px-[50px] flex items-center">
      <div className="w-[324px] h-[293px]">
        <img src={newsletterBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1 h-full">
        <h1 className="text-[48px] font-bold font-inter mb-[12px] text-[#2B2C34]">
          Choose Wisely!
        </h1>
        <p className="text-[20px] font-[400] font-inter leading-[24px] text-[#2B2C34] mb-[56px]">
          Subscribe to our newsletter and get upto 40% off on our exclusive
          products.
        </p>
        {/* Subscribe Button */}
        <SubscriptionButton />
      </div>
    </section>
  );
};

export default Newsletter;
