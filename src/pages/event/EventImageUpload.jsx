import React, { useState, useRef } from "react";
import UploadImg from "../../assets/icons/cloud-upload.svg";
import { toast } from "react-toastify";
import Delete from "../../assets/icons/Delete.svg";
const EventImageUpload = ({ onImagesChange, onCoverImageChange }) => {
  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [initialContentVisible, setInitialContentVisible] = useState(true);
  const [active, setActive] = useState(1);
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

    // Filter out files exceeding 3MB in size
    const filesUnder3MB = validFiles.filter(
      (file) => file.size <= 3 * 1024 * 1024
    ); // 3MB in bytes

    // Check if any files exceeded the size limit
    const oversizedFiles = validFiles.filter(
      (file) => file.size > 3 * 1024 * 1024
    );

    // If any oversized files are detected, display an alert
    if (oversizedFiles.length > 0) {
      toast.error(
        "Şəkillər JPG, JPEG və ya PNG formatında olmalıdır və ölçüsü 3 MB-dan çox olmamalıdır!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      // alert(
      //   "Images must be in JPG, JPEG, or PNG format and should not exceed 3MB in size."
      // );
    }

    // Limit the number of files to 5
    const remainingSlots = 5 - images.length;
    const filesToUpload = filesUnder3MB.slice(0, remainingSlots);

    // Update the state with the new images
    setImages((prevImages) => [...prevImages, ...filesToUpload]);
    onImagesChange([...images, ...filesToUpload]); // Pass the images to the parent component

    // Hide the initial content after the first image is uploaded
    // setInitialContentVisible(false);
  };

  // Function to handle file selection for cover image
  const handleCoverImageUpload = (event) => {
    const coverImageFile = event.target.files[0];

    // Check if cover image file is under 3MB
    if (coverImageFile && coverImageFile.size <= 3 * 1024 * 1024) {
      // 3MB in bytes
      // Update the state with the cover image
      setCoverImage(coverImageFile);
      onCoverImageChange(coverImageFile); // Pass the cover image to the parent component
      // setInitialCoverImageContentVisible(false);
    } else {
      toast.error(
        "Şəkillər JPG, JPEG və ya PNG formatında olmalıdır və ölçüsü 3 MB-dan çox olmamalıdır!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
    }
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
  const handleImgDeleteFromArr = (image) => {
    const filteredImg = images.filter((el) => el.name !== image.name);
    setImages([...filteredImg]);
  };

  return (
    <div className="flex flex-col gap-6">
      <h3 className="font-medium text-xl">Tədbirin şəkilləri</h3>
      <div className="flex gap-3">
        <span
          onClick={() => setActive(1)}
          className={`flex cursor-pointer items-center justify-center rounded-[8px] w-[132px] h-[44px] text-[#333] border border-[#FFCE00] ${
            active === 1 ? "bg-[#FFCE00]" : null
          }`}
        >
          Örtük Şəkli
        </span>
        <span
          onClick={() => setActive(2)}
          className={`flex cursor-pointer items-center justify-center rounded-[8px] w-[132px] h-[44px] text-[#333] border border-[#FFCE00]
        ${active === 2 ? "bg-[#FFCE00]" : null}
        `}
        >
          Digər şəkillər
        </span>
      </div>
      <p>
        {active === 1
          ? "Tədbirin saytda əks olunacaq örtük şəklini əlavə edin"
          : "Tədbirin keçirilmə məkanı, onun mövzusunu əks etdirəcək 5 şəkil əlavə edin"}
      </p>
      <div className="py-[47px]   bg-[#f2f2f2] flex items-start justify-evenly rounded-[8px]">
        {active === 1 && (
          <div className="flex flex-col w-full items-center gap-6 ">
            {initialCoverImageContentVisible && (
              <div className="flex mb-3 gap-9  ">
                <img src={UploadImg} className="w-[68px]" alt="" />
                <div className="flex flex-col gap-4 ">
                  <h4 className="font-[500] text-[20px] leading-[28px] ">
                    Faylı seçin və ya bura sürükləyin
                  </h4>

                  <p className="text-[14px] text-[#919191] ">
                    Zəhmət olmasa, yüklədiyinz şəkillər 3 mb- dan çox olmasın.
                  </p>
                </div>
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

            {
              <div className="bg-[#f2f2f2] flex flex-col gap-4 max-w-[600px] w-full justify-center">
                {coverImage && (
                  <div
                    className={`flex items-center justify-between bg-white    p-4   `}
                  >
                    <span>{coverImage.name}</span>
                    <img
                      onClick={() => setCoverImage(null)}
                      src={Delete}
                      alt=""
                      className="size-4 cursor-pointer"
                    />
                  </div>
                )}
              </div>
            }
          </div>
        )}
        {active === 2 && (
          <div className="flex flex-col w-full items-center gap-6 ">
            {initialContentVisible && (
              <div className="flex mb-3 gap-9  ">
                <img src={UploadImg} className="w-[68px]" alt="" />
                <div className="flex flex-col gap-4 ">
                  <h4 className="font-[500] text-[20px] leading-[28px] ">
                    Faylı seçin və ya bura sürükləyin
                  </h4>

                  <p className="text-[14px] text-[#919191] ">
                    Zəhmət olmasa, yüklədiyinz şəkillər 3 mb- dan çox olmasın.
                  </p>
                </div>
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

            <div className="bg-[#f2f2f2] flex flex-col gap-4 max-w-[600px] w-full justify-center">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between bg-white    p-4   `}
                >
                  <span>{image.name}</span>
                  <img
                    onClick={() => handleImgDeleteFromArr(image)}
                    src={Delete}
                    alt=""
                    className="size-4 cursor-pointer  "
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventImageUpload;
