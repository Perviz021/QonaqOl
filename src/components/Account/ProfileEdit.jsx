const ProfileEdit = () => {
  return (
    <div className="    flex items-center p-10 justify-center ">
      <form className=" max-w-[400px] gap-5  flex flex-col font-medium    w-full justify-between">
        <label htmlFor="" className="flex flex-col gap-[7px]  ">
          E-poçt
        </label>
        <input
          type="email"
          name=""
          id=""
          placeholder="namesurname@gmail.com"
          className="outline-none appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-3 border-transparent w-full"
        />
        <label htmlFor="" className="flex flex-col gap-[7px]  ">
          Ad və soyad
        </label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Name Surname"
          className="outline-none w-full appearance-none leading-tight focus:outline-none  focus:shadow-outline bg-white focus:border-transparent focus:ring-0   rounded-[8px] p-3 border-transparent  "
        />
        <button className="bg-[#FFCE00] px-[5px] h-[48px] inline-flex justify-center items-center rounded-[8px] text-black font-[400] text-[16px]">
          Dəyişiklikləri yadda saxla
        </button>
      </form>
    </div>
  );
};

export default ProfileEdit;
