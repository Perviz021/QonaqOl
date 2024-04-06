import React, { useState } from "react";

import { playBtn } from "../../assets";

const BlogCard = ({ videoId, thumbnailImg, title, description }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  const stopVideo = () => {
    setIsVideoPlaying(false);
  };

  return (
    <div className="relative">
      <div
        className="w-full h-[210px] relative bg-gray-400 cursor-pointer rounded-[20px] overflow-hidden"
        onClick={playVideo}
      >
        {/* You can place a play button or any other UI element here */}
        <img src={thumbnailImg} className="w-full h-full object-cover" alt="" />
        <div className="absolute top-0 left-0 size-full bg-[#000] opacity-50"></div>
        <img
          src={playBtn}
          className="size-[70px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className="lg:space-y-[20px] mt-[20px]">
        <h3 className="text-[20px] font-[600] leading-[28px] lg:font-bold font-inter text-[#101010]">
          {title}
        </h3>
        <p className="font-[400] text-[16px] font-inter text-black leading-[24px] mt-[16px]">
          {description}
        </p>
        <p className="text-[#A5A5A5] text-[14px] font-[400] my-[32px]">
          14 Feb - John Doe
        </p>
      </div>
      {isVideoPlaying && (
        <div
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-10"
          onClick={stopVideo}
        >
          <iframe
            className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-[380px]"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            onClick={(e) => e.stopPropagation()}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
