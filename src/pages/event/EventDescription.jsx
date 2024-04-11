import { useMediaQuery } from "@uidotdev/usehooks";
import React, { useState } from "react";

const EventDescription = ({ onDescriptionChange }) => {
  const [textDescription, setTextDescription] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const handleTextChange = (e) => {
    const description = e.target.value;
    setTextDescription(description);
    onDescriptionChange(description);
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="description"
        className="text-[#000000CC] font-[500] text-[20px] leading-[28px] mb-[12px]"
      >
        Tədbirin təsviri
      </label>

      <textarea
        rows={isMobile ? 3 : 6}
        id="description"
        className="bg-[#f2f2f2] border-transparent p-[20px] focus:border-transparent focus:ring-0 rounded-[8px] resize-none placeholder:text-[#00000066]"
        placeholder="Tədbirin təsviri"
        value={textDescription}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default EventDescription;
