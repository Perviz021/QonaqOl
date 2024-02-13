import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-[#000] px-[100px] pt-[109px] pb-[30px] flex flex-col text-[#fff] divide-y divide-[#404040]">
      <div className="flex justify-between">
        {/* Logo part */}
        <div className="relative bottom-[30px]">
          <div>
            <Logo />
          </div>
          <div className="flex items-center text-white space-x-[19px]">
            <Link to="#">
              <FaFacebookSquare className="size-[29px]" />
            </Link>
            <Link to="#">
              <FaSquareInstagram className="size-[29px]" />
            </Link>
            <Link to="#">
              <FaLinkedin className="size-[29px]" />
            </Link>
            <Link to="#">
              <FaXTwitter className="size-[29px]" />
            </Link>
          </div>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-[20px] font-bold leading-[30px] mb-[23px]">
            Şirkət
          </h3>
          <ul className="space-y-[17px]">
            <li>
              <Link to="#">Haqqımızda</Link>
            </li>
            <li>
              <Link to="#">Karyera</Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="text-[20px] font-bold leading-[30px]  mb-[23px]">
            Xidmətlər
          </h3>
          <ul className="space-y-[17px]">
            <li>
              <Link to="#">Tədbir yaradın</Link>
            </li>
            <li>
              <Link to="#">Hədiyyə kartı</Link>
            </li>
            <li>
              <Link to="#">Blog</Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-[20px] font-bold leading-[30px]  mb-[23px]">
            Əlaqə
          </h3>
          <p className="mb-[17px]">Phone: 123-456-7890</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
      <div className="mt-[150px] pt-[30px]">
        <div className="flex justify-between items-center">
          <div className="font-[400] text-[16px] font-poppins">
            <p>© QonaqOl. 2024 All rights reserved.</p>
          </div>
          <div className="flex items-center mt-[]">
            <p className="font-[400] text-[16px] font-poppins mr-4 flex items-center">
              <span>Language & Region: English (USA)</span>
              <span className="ml-2 font-bold">
                <IoIosArrowUp />
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
