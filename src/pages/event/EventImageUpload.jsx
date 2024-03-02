import React, { useState, useRef } from "react";
import { download } from "../../assets";

const EventImageUpload = () => {
  const [images, setImages] = useState([]);
  const [initialContentVisible, setInitialContentVisible] = useState(true);
  const fileInputRef = useRef(null);

  // Function to handle file upload when the button is clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Function to handle file selection
  const handleImageUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);

    // Filter out files with invalid extensions
    const validFiles = uploadedFiles.filter((file) =>
      /\.(jpg|jpeg|png)$/i.test(file.name)
    );

    // Limit the number of files to 5
    const remainingSlots = 5 - images.length;
    const filesToUpload = validFiles.slice(0, remainingSlots);

    // Update the state with the new images
    setImages((prevImages) => [...prevImages, ...filesToUpload]);

    // Hide the initial content after the first image is uploaded
    setInitialContentVisible(false);
  };

  // Function to handle image replacement
  const handleImageReplacement = (index) => {
    fileInputRef.current.click(); // Open file input dialog
    fileInputRef.current.addEventListener("change", (event) => {
      const newImage = event.target.files[0];
      if (newImage) {
        const updatedImages = [...images];
        updatedImages[index] = newImage;
        setImages(updatedImages);
      }
    });
  };

  return (
    <div className="py-[47px] text-center bg-[#f2f2f2] flex flex-col items-center rounded-[8px]">
      {initialContentVisible && (
        <div className="flex flex-col items-center">
          <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
            Tədbirlə bağlı 5 ədəd şəkil əlavə edin
          </h4>
          <span>
            <img src={download} alt="" className="size-[80px]" />
          </span>
          <p className="text-[14px] text-[#919191] my-[16px]">
            Yüklədiyiniz fayl JPG, JPEG, PNG formatında olmalıdır, və 3 mb
            aşmamalıdır
          </p>
        </div>
      )}
      <button
        onClick={handleButtonClick}
        className="bg-[#2B2C34] text-white rounded-[8px] h-[44px] px-[52px] mb-[16px]"
      >
        Yüklə
      </button>
      <input
        type="file"
        accept="image/jpeg,image/jpg,image/png" // Specify accepted file types
        onChange={handleImageUpload}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <div className="bg-[#f2f2f2] mt-4 p-4 flex flex-wrap gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex items-center">
            <img
              src={URL.createObjectURL(image)}
              alt=""
              className="w-[80px] h-[80px] object-cover rounded-[8px] mr-2 cursor-pointer"
              onClick={() => handleImageReplacement(index)}
            />
            <span>{image.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventImageUpload;
