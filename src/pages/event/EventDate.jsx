import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { calendar } from "../../assets";
import az from "date-fns/locale/az"; // Import Azerbaijani locale

const CustomDatePicker = ({ selectedDate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCalendar = () => {
    setIsOpen(!isOpen);
  };

  const customCalendarClassName =
    "!bg-[#f2f2f2] p-[20px] rounded-[8px] shadow-md left-[50px] text-[12px]"; // Define your custom Tailwind CSS classes for the calendar container

  return (
    <div className="relative w-[45%]">
      <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
        Tədbirin tarixi
      </h4>
      <div className="inline-flex justify-between items-center rounded-[8px] bg-[#f2f2f2] w-full h-[44px] px-[20px] font-[16px] text-[#919191]">
        <DatePicker
          selected={selectedDate}
          onChange={onChange}
          className="bg-transparent border-transparent focus:border-transparent focus:ring-0 text-black"
          placeholderText="Tarixi seçin"
          open={isOpen}
          onClickOutside={() => setIsOpen(false)}
          dateFormat="dd/MM/yyyy" // Specify the date format here
          locale={az} // Set Azerbaijani locale
          calendarClassName={customCalendarClassName} // Apply custom Tailwind CSS classes to calendar
        />
        <button
          className="flex items-center focus:outline-none"
          onClick={toggleCalendar}
        >
          <img src={calendar} alt="" className="w-[24px]" />
        </button>
      </div>
    </div>
  );
};

const EventDate = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <CustomDatePicker selectedDate={selectedDate} onChange={handleDateChange} />
  );
};

export default EventDate;
