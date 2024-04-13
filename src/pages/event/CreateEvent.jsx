import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventDescription from "./EventDescription";
import EventCategory from "./EventCategory";
import EventDate from "./EventDate";
import EventTime from "./EventTime";
import EventLang from "./EventLang";
import EventPrice from "./EventPrice";
import EventAddress from "./EventAddress";
import EventContact from "./EventContact";
import EventImageUpload from "./EventImageUpload";
import PopupMessage from "../../components/widgets/PopupMessage";
import axios from "axios";
import { useMediaQuery } from "@uidotdev/usehooks";

const CreateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");
  const isDesktop = useMediaQuery("only screen and (min-width : 1024px)");

  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(null);
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [language, setLanguage] = useState("");
  const [eventPrice, setEventPrice] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [contact, setContact] = useState("");
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [isFormFilled, setIsFormFilled] = useState(false);

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    // Check if all required fields are filled
    if (
      eventName &&
      description &&
      category &&
      eventDate &&
      eventStartTime &&
      eventEndTime &&
      language &&
      eventPrice &&
      eventLocation &&
      contact &&
      images.length === 5 &&
      coverImage
    ) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [
    eventName,
    description,
    category,
    eventDate,
    eventStartTime,
    eventEndTime,
    language,
    eventPrice,
    eventLocation,
    contact,
    images,
    coverImage,
  ]);

  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDescriptionChange = (description) => {
    setDescription(description);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  // Handler function to receive the formatted date from EventDate component
  const handleDateChange = (date) => {
    setEventDate(date);
  };

  // Handler function to receive the selected start and end times from EventTime component
  const handleStartTimeChange = (start) => {
    setEventStartTime(start);
  };
  const handleEndTimeChange = (end) => {
    setEventEndTime(end);
  };

  // Handler function to receive the selected language from EventLang component
  const handleLangChange = (lang) => {
    setLanguage(lang);
  };

  // Handler function to receive the eventPrice from EventPrice component
  const handleEventPriceChange = (newEventPrice) => {
    setEventPrice(newEventPrice);
  };

  // Handler function to receive the address from EventAddress component
  const handleAddressChange = (newAddress) => {
    setEventLocation(newAddress);
  };

  // Handler function to receive the phone number from EventContact component
  const handlePhoneNumberChange = (newPhoneNumber) => {
    setContact(newPhoneNumber);
  };

  // Handler function to receive the images from EventImageUpload component
  const handleImagesChange = (newImages) => {
    setImages(newImages);
  };

  // Handler function to receive the cover image from EventImageUpload component
  const handleCoverImageChange = (newCoverImage) => {
    setCoverImage(newCoverImage);
  };

  const handleSubmit = async () => {
    // Get userId from local storage
    const userId = Number(localStorage.getItem("userId"));

    // Check if userId is available
    if (!userId) {
      console.error("User ID not found in local storage.");
      return;
    }

    const queryParams = new URLSearchParams();

    queryParams.append("userId", userId);
    queryParams.append("eventName", eventName);
    queryParams.append("description", description);
    queryParams.append("category", category);
    queryParams.append("language", language);
    queryParams.append("eventPrice", eventPrice);
    queryParams.append("eventDate", eventDate);
    queryParams.append("eventStartTime", eventStartTime);
    queryParams.append("eventEndTime", eventEndTime);
    queryParams.append("eventLocation", eventLocation);
    queryParams.append("contact", contact);

    const queryParamsString = queryParams.toString();

    // Create FormData object
    const formData = new FormData();

    // Append cover photo with the name 'mainPhoto'
    if (coverImage) {
      formData.append("file", coverImage);
    }

    // // Append images array with the name 'photos'
    if (images.length > 0) {
      // for (const image of images) {
      //   formData.append("file", image);
      // }
      images.forEach((image) => {
        formData.append("files", image);
      });
    }

    if (id) {
      try {
        // Send the form data to the backend API
        const response = await axios.put(
          `https://qonaqol.onrender.com/qonaqol/api/event/${id}?${queryParamsString}`,

          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          setShowSuccessPopup(true);
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
    } else {
      try {
        // Send the form data to the backend API
        const response = await axios.post(
          `https://qonaqol.onrender.com/qonaqol/api/event/create-event?${queryParamsString}`,

          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          setShowSuccessPopup(true);
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
    }
  };

  // Function to handle continue button click in the success pop-up
  const handleContinueButtonClick = () => {
    setShowSuccessPopup(false); // Close the pop-up
    navigate("/"); // Navigate to the main page using navigate
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
    <div className={`${isMobile ? "mb-[272px] mx-[20px]" : "mb-[250px]"}`}>
      <h1
        className={`${
          isMobile
            ? "mt-[63px] mb-[52px] text-[28px] unbounded-600"
            : "my-[90px] mx-[100px] text-[48px] unbounded-700"
        } unbounded`}
      >
        Tədbir yarat
      </h1>
      <form
        className={`${
          isMobile
            ? "w-full space-y-[20px]"
            : "w-[820px] mx-auto space-y-[40px]"
        }`}
      >
        {/* Tedbirin adi */}
        <div className="flex flex-col gap-[12px]">
          <label
            htmlFor="name"
            className="text-[#000000CC] font-[500] text-[20px] leading-[28px]"
          >
            Tədbirin adı
          </label>
          <input
            type="text"
            className="h-[44px] rounded-[8px] px-[20px] bg-[#f2f2f2] placeholder:text-[#00000066] border-transparent focus:border-transparent focus:ring-0"
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
        <div
          className={`${
            isDesktop
              ? "flex items-start justify-between space-x-[40px]"
              : "space-y-[20px]"
          }`}
        >
          <EventDate onDateChange={handleDateChange} widthFull={true} />
          <EventTime
            onStartTimeChange={handleStartTimeChange}
            onEndTimeChange={handleEndTimeChange}
          />
        </div>
        <div
          className={`${
            isMobile
              ? "space-y-[20px]"
              : " flex items-start justify-normal space-x-[40px]"
          }`}
        >
          <EventLang onLangChange={handleLangChange} />
          <EventPrice onEventPriceChange={handleEventPriceChange} />
        </div>
        <EventAddress onAddressChange={handleAddressChange} />
        <EventContact onPhoneNumberChange={handlePhoneNumberChange} />
        <EventImageUpload
          onImagesChange={handleImagesChange}
          onCoverImageChange={handleCoverImageChange}
        />

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className={`${
              isMobile ? "w-full" : "min-w-[400px] "
            } h-[48px] px-[57px] rounded-[8px] text-[16px] ${
              isFormFilled ? "bg-[#FFCE00]" : "bg-black opacity-20 text-white"
            }`}
            disabled={!isFormFilled}
          >
            {id ? "Tədbiri yenilə" : "Tədbir yarat"}
          </button>
        </div>
      </form>

      {showSuccessPopup && (
        <PopupMessage
          handleContinueButtonClick={handleContinueButtonClick}
          setShowSuccessPopup={setShowSuccessPopup}
          textMessage={
            id ? (
              "Tədbiriniz uğurla yeniləndi. Təşəkkürlər!"
            ) : (
              <>
                Bizi seçdiyiniz üçün təşəkkürlər 😊 <br /> Tədbiriniz qeydə
                alındı.
              </>
            )
          }
        />
      )}
    </div>
  );
};

export default CreateEvent;
