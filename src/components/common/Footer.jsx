import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Logo from "./Logo";
import { useEffect, useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

function Footer() {
  const [token, setToken] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width : 480px)");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      setToken(accessToken);
    }
  }, []);

  return (
    <footer className="w-full bg-[#000] px-[20px] lg:px-[100px] pt-[59px] lg:pt-[109px] pb-[30px] lg:pb-[60px] flex flex-col text-[#f1f1f1] divide-y divide-[#404040]">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-[170px] lg:mb-[200px]">
        <div className="relative lg:bottom-[15px] mb-[68px]">
          {/* Logo part */}
          <div className="mt-[8px] mb-[28px] lg:mb-0">
            <Logo color="#F1F1F1" />
          </div>
          <div className="flex items-center w-[163px] text-white justify-between">
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[35px]">
          {/* Company */}
          <div>
            <h3 className="text-[20px] font-[600] leading-[28px] mb-[24px]">
              Şirkət
            </h3>
            <ul className="space-y-[8px] lg:space-y-[17px] text-[16px] font-[400] text-[#F1F1F199] lg:text-white">
              <li>
                <Link to="/about">Haqqımızda</Link>
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
            <Link
              to={"/events"}
              className="text-[20px] font-[600] leading-[28px]"
            >
              Tədbirlər
            </Link>
            <ul className="space-y-[8px] lg:space-y-[17px] text-[16px] font-[400] mt-[24px] text-[#F1F1F199] lg:text-white">
              <li>
                <Link to={token ? "/create-event" : "/signup?data=event"}>
                  Tədbir yarat
                </Link>
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
              <span className="p-2 text-[16px] lg:size-[28px] bg-[#121214] rounded-full inline-flex items-center justify-center">
                <FaWhatsapp />
              </span>
              {!isMobile && (
                <span className="text-[16px]">+994 12 444 00 00</span>
              )}
            </p>
          </div>
        </div>
      </div>
      <div className={`${isMobile && "text-[14px]"} pt-[28px]`}>
        <p>© Qonaqol.az 2024. Bütün hüquqlar qorunur</p>
      </div>
    </footer>
  );
}

export default Footer;
