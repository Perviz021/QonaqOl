const GiftCards = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="max-w-[472px] min-h-[240px] gap-4 rounded-[8px] w-full bg-white p-6 px-[71px] flex flex-col justify-center items-end">
        <label htmlFor="" className="flex gap-[8px] items-center">
          Ad Soyad{" "}
          <input
            type="email"
            name=""
            id=""
            className="outline-none appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-1.5 border-[#CBD5E1]  "
          />
        </label>
        <label htmlFor="" className="flex gap-[8px] items-center">
          Promo kod{" "}
          <input
            type="email"
            name=""
            id=""
            className="outline-none appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-1.5 border-[#CBD5E1]  "
          />
        </label>
        <button className="bg-[#FFCE00] font-medium mt-4 px-[15px] h-[48px] inline-flex justify-center items-center rounded-[8px] text-black   text-[16px] ">
          Dəyişiklikləri yadda saxla
        </button>
      </form>
    </div>
  );
};

export default GiftCards;
