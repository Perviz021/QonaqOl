import React, { useState } from "react";

const EventDescription = ({ onDescriptionChange }) => {
  const [textDescription, setTextDescription] = useState("");

  const handleTextChange = (e) => {
    const description = e.target.value;
    setTextDescription(description);
    onDescriptionChange(description);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="description"
        className="font-[500] text-[20px] leading-[28px] mb-[12px]"
      >
        Tədbirin təsviri
      </label>

      <textarea
        rows="6"
        id="description"
        className="bg-[#f2f2f2] border-transparent p-[20px] focus:border-transparent focus:ring-0 rounded-[8px] resize-none placeholder:text-[#9D9D9D]"
        placeholder="Tədbirin təsviri"
        value={textDescription}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default EventDescription;
