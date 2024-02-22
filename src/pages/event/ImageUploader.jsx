import React, { useState } from "react";

const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageChange = (e) => {
    const files = e.target.files;

    // Reset error message
    setErrorMessage("");

    if (files.length + images.length > 5) {
      setErrorMessage("You can upload a maximum of 5 images.");
      return;
    }

    const allowedFormats = ["image/png", "image/jpeg", "image/jpg"];
    for (let i = 0; i < files.length; i++) {
      if (!allowedFormats.includes(files[i].type)) {
        setErrorMessage("Only PNG, JPEG, and JPG formats are allowed.");
        return;
      }
    }

    // Add new images to the existing images state
    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      newImages.push({
        url: URL.createObjectURL(files[i]),
        name: files[i].name,
      });
    }
    setImages(newImages);
  };

  const handleImageClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div>
      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        multiple
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4">
          {images.map((image, index) => (
            <div key={index} className="flex items-center">
              <img
                src={image.url}
                alt={`Image ${index}`}
                className="max-w-full cursor-pointer w-16 h-16"
                onClick={handleImageClick}
              />
              <span className="ml-2">{image.name}</span>
            </div>
          ))}
        </div>
        {images.length < 5 && (
          <button
            className="border border-gray-400 rounded-lg p-2 mt-4"
            onClick={handleImageClick}
          >
            Upload Image
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
