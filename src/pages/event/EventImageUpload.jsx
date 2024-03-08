import React, { useState, useRef } from "react";
import { download } from "../../assets";

const EventImageUpload = ({ onImagesChange, onCoverImageChange }) => {
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [initialContentVisible, setInitialContentVisible] = useState(true);
  const [initialCoverImageContentVisible, setInitialCoverImageContentVisible] =
    useState(true);
  const fileInputRef = useRef(null);
  const coverImageInputRef = useRef(null);

  // Function to handle file upload when the button is clicked
  const handleButtonClick = (e, ref) => {
    e.preventDefault();
    ref.current.click();
  };

  // Function to handle file selection for images
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
    onImagesChange([...images, ...filesToUpload]); // Pass the images to the parent component

    // Hide the initial content after the first image is uploaded
    setInitialContentVisible(false);
  };

  // Function to handle file selection for cover image
  const handleCoverImageUpload = (event) => {
    const coverImageFile = event.target.files[0];

    // Update the state with the cover image
    setCoverImage(coverImageFile);
    onCoverImageChange(coverImageFile); // Pass the cover image to the parent component
    setInitialCoverImageContentVisible(false);
  };

  // Function to handle image replacement
  const handleImageReplacement = (index) => (event) => {
    const newImage = event.target.files[0];
    if (newImage) {
      const updatedImages = [...images];
      updatedImages[index] = newImage;
      setImages(updatedImages);
      onImagesChange(updatedImages); // Pass the updated images to the parent component
    }
  };

  return (
    <div className="py-[47px] text-center bg-[#f2f2f2] flex items-start justify-evenly rounded-[8px]">
      <div className="flex flex-col items-center w-[45%]">
        {initialCoverImageContentVisible && (
          <div className="flex flex-col items-center">
            <h4 className="font-[500] text-[20px] leading-[28px] mb-[12px]">
              Örtük şəklini əlavə edin
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
          onClick={(e) => handleButtonClick(e, coverImageInputRef)}
          className="bg-[#2B2C34] text-white rounded-[8px] h-[44px] w-[150px] mb-[16px]"
        >
          Yüklə
        </button>
        <input
          type="file"
          accept="image/jpeg,image/jpg,image/png" // Specify accepted file types
          onChange={handleCoverImageUpload}
          style={{ display: "none" }}
          ref={coverImageInputRef}
        />
        {coverImage && (
          <div className="flex items-center">
            <img
              src={URL.createObjectURL(coverImage)}
              alt=""
              className="w-[80px] h-[80px] object-cover rounded-[8px] mr-2 cursor-pointer"
              onClick={handleImageReplacement(-1)} // -1 index for cover image
            />
            <span>{coverImage.name}</span>
          </div>
        )}
      </div>
      <div className="flex flex-col items-center w-[45%]">
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
          onClick={(e) => handleButtonClick(e, fileInputRef)}
          className="bg-[#2B2C34] text-white rounded-[8px] h-[44px] w-[150px] mb-[16px]"
        >
          Yüklə
        </button>
        <input
          type="file"
          accept="image/jpeg,image/jpg,image/png" // Specify accepted file types
          onChange={handleImageUpload}
          style={{ display: "none" }}
          ref={fileInputRef}
          multiple // Allow multiple file selection
        />

        <div className="bg-[#f2f2f2] flex flex-col gap-4 justify-center">
          {images.map((image, index) => (
            <div key={index} className="flex items-center">
              <img
                src={URL.createObjectURL(image)}
                alt=""
                className="w-[80px] h-[80px] object-cover rounded-[8px] mr-2 cursor-pointer"
                onClick={handleImageReplacement(index)}
              />
              <span>{image.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventImageUpload;
