const ProfileEdit = () => {
  return (
    <div className="    flex items-center justify-center ">
      <form className=" max-w-[600px]  grid grid-cols-2 grid-rows-2 font-medium gap-y-[112px] gap-x-[38px]  w-full justify-between">
        <label htmlFor="" className="flex flex-col gap-[7px]  ">
          Ad Soyad
          <input
            type="text"
            name=""
            id=""
            className="outline-none appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-3 border-transparent w-[280px]"
          />
        </label>

        <label htmlFor="" className="flex flex-col gap-[7px]  ">
          E-poçt
          <input
            type="email"
            name=""
            id=""
            className="outline-none appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-3 border-transparent w-[280px]"
          />
        </label>
        <button className="bg-[#FFCE00] px-[5px] h-[48px] inline-flex justify-center items-center rounded-[8px] text-black font-[400] text-[16px]">
          Dəyişiklikləri yadda saxla
        </button>

        <div className=" w-full flex justify-end">
          <button
            className={` py-[5px] rounded-[8px] h-[48px] w-[50%] place-items-end   bg-[#2B2C34] border-[0.5px] text-white inline-flex items-center space-x-[4px] justify-center`}
          >
            Hesabı sil
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
