import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calendar } from "../../assets";
import az from "date-fns/locale/az"; // Import Azerbaijani locale
import { useMediaQuery } from "@uidotdev/usehooks";

const CustomDatePicker = ({
  selectedDate,
  onChange,
  past,
  headerTextColor,
  widthFull,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  const toggleCalendar = () => {
    // e.preventDefault();
    setIsOpen(!isOpen);
  };

  const customCalendarClassName =
    "!bg-[#f2f2f2] p-[20px] rounded-[8px] shadow-md left-[50px] text-[12px]";

  return (
    <div
      className={`${
        isMobile ? (widthFull ? "w-full" : "w-[45%]") : "w-[50%]"
      } relative`}
    >
      <h4
        className={`font-[500] text-[20px] leading-[28px] mb-[12px] text-${
          headerTextColor ? headerTextColor : "[#000000CC]"
        }`}
      >
        Tədbirin tarixi
      </h4>
      <div className="inline-flex justify-between items-center rounded-[8px] bg-[#f2f2f2] w-full h-[44px] pr-[20px] pl-[10px] font-[16px]">
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          className="bg-transparent border-transparent focus:border-transparent focus:ring-0 text-black placeholder:text-[#00000066]"
          placeholderText="Tarixi seçin"
          open={isOpen}
          onClickOutside={() => setIsOpen(false)}
          dateFormat="dd-MM-yyyy" // Specify the date format here
          locale={az} // Set Azerbaijani locale
          minDate={past ? null : new Date()}
          calendarClassName={customCalendarClassName} // Apply custom Tailwind CSS classes to calendar
        />
        <button
          type="button"
          className="flex items-center focus:outline-none"
          onClick={toggleCalendar}
        >
          <img src={calendar} alt="" className="w-[24px]" />
        </button>
      </div>
    </div>
  );
};

const EventDate = ({
  onDateChange,
  pastTime = false,
  headerTextColor = null,
  widthFull = false,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [past, setPast] = useState(false);
  useEffect(() => {
    setPast(pastTime);
  }, [pastTime]);

  const handleDateChange = (date) => {
    if (date) {
      const formattedDate = formatDate(date); // Format the date
      setSelectedDate(date); // Set the selected date in the state
      onDateChange(formattedDate); // Pass the formatted date to the parent component
    }
  };

  // Function to format date as "year-month-day"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
    // return date.getTime();
  };

  return (
    <CustomDatePicker
      selectedDate={selectedDate}
      onChange={handleDateChange}
      past={past}
      headerTextColor={headerTextColor}
      widthFull={widthFull}
    />
  );
};

export default EventDate;
