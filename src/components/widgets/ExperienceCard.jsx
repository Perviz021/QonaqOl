import { FaStar } from "react-icons/fa";

import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  manat,
} from "../../assets";

const images = [image1, image2, image3, image4, image5, image6, image7, image8];

const ExperienceCard = ({ index }) => {
  const imagePath = images[index];

  return (
    <div className="max-w-md mx-auto bg-white border border-[#EBEBEB] rounded-[5px] overflow-hidden">
      <img
        className="w-full h-[200px] object-cover"
        src={imagePath}
        alt="Experience Card Image"
      />
      <div className="pl-[16px] py-[16px] pr-[40px]">
        <h1 className="text-[16px] leading-[24px] font-semibold font-inter">
          Wonder Girls 2010 Wonder Girls World Tour San Francisco
        </h1>
        <p className="my-4 text-[20px] font-medium flex items-center space-x-1">
          <span className="font-medium">30</span>
          <span>
            <img
              className="w-[18px] h-[18px] object-cover"
              src={manat}
              alt=""
            />
          </span>
        </p>
        <div className="flex items-center w-full">
          <div className="flex flex-1 justify-evenly">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                <FaStar className="w-[20px] h-[20px] text-[#FECE00]" />
              </span>
            ))}
          </div>
          <span className="text-[#5E5E5E] text-[12px] font-[400] leading-[18px]">
            (29/30)
          </span>
        </div>
        <button className="mt-[16px] px-[24px] h-[40px] font-inter bg-white text-[#3D37F1] text-[14px] font-[600] border-[2px] border-[#3D37F1] rounded-[50px]">
          Daha ətraflı
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
