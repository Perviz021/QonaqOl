import React, { useState } from "react";
import EventDescription from "./EventDescription";
import EventCategory from "./EventCategory";
import EventDate from "./EventDate";
import EventTime from "./EventTime";
import EventLang from "./EventLang";
import EventPrice from "./EventPrice";
import EventAddress from "./EventAddress";
import EventContact from "./EventContact";
import EventImageUpload from "./EventImageUpload";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);

  const handleSubmit = async () => {
    // Get userId from local storage
    const userId = localStorage.getItem("userId");

    // Check if userId is available
    if (!userId) {
      console.error("User ID not found in local storage.");
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("eventName", eventName);
    formData.append("description", eventDescription);
    formData.append("category", selectedCategory);
    formData.append("language", selectedLang);
    formData.append("eventPrice", price);
    formData.append("eventDate", eventDate);
    formData.append("eventStartTime", startTime);
    formData.append("eventEndTime", endTime);
    formData.append("eventLocation", address);
    formData.append("contact", phoneNumber);
    formData.append("maxParticipants", 0); // You may adjust this value as needed

    // Append cover photo with the name 'mainPhoto'
    if (coverImage) {
      formData.append("mainPhoto", coverImage);
    }

    // Append other images with the name 'photos'
    images.forEach((image, index) => {
      formData.append(`photos`, image);
    });

    try {
      // Send the form data to the backend API
      const response = await fetch(
        "https://qonaqol.onrender.com/qonaqol/api/event/create-event",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log("Event created successfully!");
      } else {
        // Handle error response from the server
        console.error("Failed to create event:", response.statusText);
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error("An error occurred:", error);
    }
  };

  const handleDescriptionChange = (description) => {
    setEventDescription(description);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Handler function to receive the formatted date from EventDate component
  const handleDateChange = (formattedDate, e) => {
    e.preventDefault();
    setEventDate(formattedDate);
  };

  // Handler function to receive the selected start and end times from EventTime component
  const handleTimeChange = (start, end, e) => {
    e.preventDefault();
    setStartTime(start);
    setEndTime(end);
  };

  // Handler function to receive the selected language from EventLang component
  const handleLangChange = (lang) => {
    setSelectedLang(lang);
  };

  // Handler function to receive the price from EventPrice component
  const handlePriceChange = (newPrice) => {
    setPrice(newPrice);
  };

  // Handler function to receive the address from EventAddress component
  const handleAddressChange = (newAddress) => {
    setAddress(newAddress);
  };

  // Handler function to receive the phone number from EventContact component
  const handlePhoneNumberChange = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  // Handler function to receive the images from EventImageUpload component
  const handleImagesChange = (newImages, e) => {
    e.preventDefault();
    setImages(newImages);
  };

  // Handler function to receive the cover image from EventImageUpload component
  const handleCoverImageChange = (newCoverImage) => {
    e.preventDefault();
    setCoverImage(newCoverImage);
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
    <div className="mb-[250px]">
      <h1 className="my-[90px] mx-[100px] text-[48px] unbounded unbounded-700">
        Tədbir yarat
      </h1>
      <form className="w-[820px] mx-auto space-y-[40px]">
        <div className="flex flex-col gap-[12px]">
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
            maxLength={50} // Add max length restriction
          />
        </div>
        <EventDescription onDescriptionChange={handleDescriptionChange} />
        <EventCategory
          options={options}
          onCategoryChange={handleCategoryChange}
        />
        <div className="flex items-start justify-between">
          <EventDate onDateChange={handleDateChange} />
          <EventTime onTimeChange={handleTimeChange} />
        </div>
        <div className="flex items-start justify-between">
          <EventLang onLangChange={handleLangChange} />
          <EventPrice onPriceChange={handlePriceChange} />
        </div>
        <EventAddress onAddressChange={handleAddressChange} />
        <EventContact onPhoneNumberChange={handlePhoneNumberChange} />
        <EventImageUpload
          onImagesChange={handleImagesChange}
          onCoverImageChange={handleCoverImageChange}
        />

        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="h-[48px] px-[57px] bg-[#FFCE00] rounded-[8px] text-[16px] hover:bg-[#FFD700]"
          >
            Müraciəti göndər
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
