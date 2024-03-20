const Rezervation = () => {
  const name = "Aşpaz Abbasın pasta sirləri masterklassıdfsvvvvvvvvv";
  return (
    <div className="flex flex-col p-5 gap-8 ">
      <div className="p-5 bg-white rounded-[8px] flex justify-between items-center">
        <div className=" w-[27%] ">
          {name && name.length < 40 ? name : name.slice(0, 40) + "..."}
        </div>
        <div className="flex gap-8 ">
          <p>02 mart 2024</p>
          <p>16:00 - 19:00</p>
          <p>Nərimanov, Əhməd Rəcəbli</p>
        </div>
      </div>
      <div className="p-5 bg-white rounded-[8px] flex justify-between items-center">
        <div className=" w-[27%] ">
          {name && name.length < 40 ? name : name.slice(0, 40) + "..."}
        </div>
        <div className="flex gap-8 ">
          <p>02 mart 2024</p>
          <p>16:00 - 19:00</p>
          <p>Nərimanov, Əhməd Rəcəbli</p>
        </div>
      </div>
      <div className="p-5 bg-white rounded-[8px] flex justify-between items-center">
        <div className=" w-[27%] ">
          {name && name.length < 40 ? name : name.slice(0, 40) + "..."}
        </div>
        <div className="flex gap-8 ">
          <p>02 mart 2024</p>
          <p>16:00 - 19:00</p>
          <p>Nərimanov, Əhməd Rəcəbli</p>
        </div>
      </div>
      <div className="p-5 bg-white rounded-[8px] flex justify-between items-center">
        <div className=" w-[27%] ">
          {name && name.length < 40 ? name : name.slice(0, 40) + "..."}
        </div>
        <div className="flex gap-8 ">
          <p>02 mart 2024</p>
          <p>16:00 - 19:00</p>
          <p>Nərimanov, Əhməd Rəcəbli</p>
        </div>
      </div>
    </div>
  );
};

export default Rezervation;
