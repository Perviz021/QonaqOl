import React, { useState } from "react";

import {
  textBold,
  textItalic,
  textLeft,
  textRight,
  textCenter,
  textJustify,
} from "../../assets";

const EventDescription = ({ onDescriptionChange }) => {
  const [textDescription, setTextDescription] = useState("");
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [alignment, setAlignment] = useState("");

  const handleTextChange = (e) => {
    const description = e.target.value;
    setTextDescription(description);
    // Call the callback function passed from the parent component
    onDescriptionChange(description);
  };

  const handleTextFormat = (format) => {
    switch (format) {
      case "bold":
        setBold(!bold);
        break;
      case "italic":
        setItalic(!italic);
        break;
      case "left":
      case "right":
      case "center":
      case "justify":
        setAlignment(format);
        break;
      default:
        break;
    }
  };

  const getTextAreaClassName = () => {
    let className =
      "rounded-b-[8px] p-[20px] placeholder:text-[#9d9d9d] border-[#f2f2f2] focus:border-transparent focus:ring-0 resize-none";
    if (bold) className += " font-bold";
    if (italic) className += " italic";
    if (alignment) className += ` text-${alignment}`;
    return className;
  };
  return (
    <div className="flex flex-col">
      <label
        htmlFor="description"
        className="font-[500] text-[20px] leading-[28px] mb-[12px]"
      >
        Tədbirin təsviri
      </label>
      <div className="flex bg-[#f2f2f2] rounded-t-[8px] divide-x divide-white">
        <div className="flex items-center p-[10px] space-x-[12px]">
          <button onClick={() => handleTextFormat("bold")}>
            <img src={textBold} alt="" />
          </button>
          <button onClick={() => handleTextFormat("italic")}>
            <img src={textItalic} alt="" />
          </button>
        </div>
        <div className="flex flex-1 items-center p-[10px] pl-[20px] space-x-[12px]">
          <button onClick={() => handleTextFormat("left")}>
            <img src={textLeft} alt="" />
          </button>
          <button onClick={() => handleTextFormat("center")}>
            <img src={textCenter} alt="" />
          </button>
          <button onClick={() => handleTextFormat("right")}>
            <img src={textRight} alt="" />
          </button>
          <button onClick={() => handleTextFormat("justify")}>
            <img src={textJustify} alt="" />
          </button>
        </div>
      </div>
      <textarea
        rows="6"
        id="description"
        className={getTextAreaClassName()}
        placeholder="Tədbirin təsviri"
        value={textDescription}
        onChange={handleTextChange}
      />
    </div>
  );
};

export default EventDescription;
