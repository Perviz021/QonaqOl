import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import EventDescription from "./EventDescription";
import EventCategory from "./EventCategory";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic
  };

  const options = [
    "Kənd həyatı",
    "Kamplar",
    "Rəssamlıq",
    "Yemək hazırlama",
    "Dulusçuluq",
    "Musiqi",
  ];

  return (
    <div>
      <h1 className="my-[90px] mx-[100px] text-[48px] unbounded unbounded-700">
        Tədbir yarat
      </h1>
      <form className="w-[820px] mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-[12px] mb-[40px]">
          <label
            htmlFor="name"
            className="font-[500] text-[20px] leading-[28px]"
          >
            Tədbirin adı
          </label>
          <input
            type="text"
            className="h-[44px] rounded-[8px] px-[20px] bg-[#f2f2f2] placeholder:text-[#9d9d9d] border-transparent focus:border-transparent focus:ring-0"
            name="name"
            id="name"
            placeholder="Tədbirin adı"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
        </div>
        <EventDescription />
        <EventCategory options={options} />
        <ImageUploader />
      </form>
    </div>
  );
};

export default CreateEvent;
