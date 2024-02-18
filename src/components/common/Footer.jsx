import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-[#000] px-[100px] pt-[109px] pb-[260px] flex flex-col text-[#F1F1F1] divide-y divide-[#404040]">
      <div className="flex justify-between">
        {/* Logo part */}
        <div className="relative bottom-[15px]">
          <div className="mt-[8px]">
            <Logo color="#F1F1F1" />
          </div>
          <div className="flex items-center text-white justify-between">
            <Link
              to="#"
              className="p-2 size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="#"
              className="p-2 size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="#"
              className="p-2 size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="#"
              className="p-2 size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
        {/* Company */}
        <div>
          <h3 className="text-[20px] font-[600] leading-[28px] mb-[24px]">
            Şirkət
          </h3>
          <ul className="space-y-[17px] text-[16px] font-[400]">
            <li>
              <Link to="#">Haqqımızda</Link>
            </li>
            <li>
              <Link to="#">Karyera</Link>
            </li>
            <li>
              <Link to="#">Bloq</Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="text-[20px] font-[600] leading-[28px] mb-[24px]">
            Tədbirlər
          </h3>
          <ul className="space-y-[17px] text-[16px] font-[400]">
            <li>
              <Link to="#">Müraciət edin</Link>
            </li>
            <li>
              <Link to="#">Kateqoriyalar</Link>
            </li>
            <li>
              <Link to="#">Suallar</Link>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-[20px] font-[600] leading-[28px] mb-[24px]">
            Əlaqə
          </h3>
          <p className="flex items-center space-x-[10px]">
            <span className="p-2 size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center">
              <FaWhatsapp />
            </span>
            <span>+994 12 444 00 00</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
