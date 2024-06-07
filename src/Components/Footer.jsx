import React from "react";
import footer_bg from "../assets/footer_bg.png";
import Container from "./Container";
import Flex from "./Flex";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import footer_img from "../assets/footer_img.png";
import { BsCalendarDate } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
const Footer = () => {
  return (
    <section
      style={{ backgroundImage: `url(${footer_bg})` }}
      className="object-contain bg-no-repeat pt-[80px] pb-[100px]"
    >
      <Container>
        {/* title part */}
        <Flex
          className={`items-center justify-between flex-col lg:flex-row mb-[160px]`}
        >
          <div className="w-1/2">
            <h4 className="font-normal font-dmSans text-[18px] text-white">
              For Digital Marketing Agency
            </h4>
            <h1 className="font-bold font-dmSans text-[24px] text-white">
              Join Our Agency Community
            </h1>
          </div>
          <div className="w-1/2">
            <div>
              <div className="relative w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-[35px] pr-[140px] py-[28px] font-dmSans font-normal text-[#B1B1B1] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button className="absolute px-[34px] font-dmSans font-normal py-[15px] text-white transform -translate-y-1/2  rounded-full px- top-1/2 right-1 bg-blue-600">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </Flex>
        {/* title part */}
        <Flex className={`items-center justify-between gap-10 flex-col lg:flex-row`}>
          <div className="w-full lg:w-1/4">
            <h3 className="font-semibold font-dmSans text-[26px] text-white">
              About Company
            </h3>
            <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
            <p className="font-normal font-dmSans text-[18px] text-white w-full lg:w-[373px] mb-5">
              There are many variations of passages of Lore Ipsum availab but
              the majority have suffereds alteration in some form, by injected
              humour a randomised words which
            </p>
            <Flex className={`items-end gap-5`}>
              <FaFacebook className="text-[#3661FC] text-center text-[30px]" />
              <FaTwitter className="text-[#3661FC] text-center text-[30px]" />
              <FaLinkedinIn className="text-[#3661FC] text-center text-[30px]" />
              <IoLogoYoutube className="text-[#3661FC] text-center text-[30px]" />
            </Flex>
          </div>
          <div className="w-full lg:w-1/4">
            <h3 className="font-semibold font-dmSans text-[26px] text-white">
              Featured Services
            </h3>
            <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
            <ul>
              <li className="font-normal font-dmSans text-[16px] text-[#d9d9d9] leading-[36px] hover:text-[#3661FC] list-disc list-disc-custom">
                Social Media Marketing
              </li>
              <li className="font-normal font-dmSans text-[16px] text-[#d9d9d9] leading-[36px] hover:text-[#3661FC] list-disc list-disc-custom">
                Pay Per Click Management
              </li>
              <li className="font-normal font-dmSans text-[16px] text-[#d9d9d9] leading-[36px] hover:text-[#3661FC] list-disc list-disc-custom">
                Search Engine Optimization
              </li>
              <li className="font-normal font-dmSans text-[16px] text-[#d9d9d9] leading-[36px] hover:text-[#3661FC] list-disc list-disc-custom">
                Free SEO Analysis
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4">
            {/* title */}
            <h3 className="font-semibold font-dmSans text-[26px] text-white">
              Recent Post
            </h3>
            <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
            {/* title */}
            <Flex className={`items-center gap-5 mb-3`}>
                <img src={footer_img} alt="" />
                <div>
                    <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9] w-full lg:w-[160px] mb-2">Thoughtful man using
                    laptop pondering </h4>
                    <Flex className={`items-center gap-1`}>
                    <BsCalendarDate className="text-[14px] text-customBlue" /> 
                    <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9]">09 Dec 2022 </h4>
                    </Flex>
                </div>
            </Flex>
            <Flex className={`items-center gap-5 mb-3`}>
                <img src={footer_img} alt="" />
                <div>
                    <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9] w-full lg:w-[160px] mb-2">Young man with a lap
                    top in a business</h4>
                    <Flex className={`items-center gap-1`}>
                    <BsCalendarDate className="text-[14px] text-customBlue" /> 
                    <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9]">09 Dec 2022 </h4>
                    </Flex>
                </div>
            </Flex>
          </div>
          <div className="w-full lg:w-1/4">
           {/* title */}
           <h3 className="font-semibold font-dmSans text-[26px] text-white">
           Contact Us
            </h3>
            <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
            {/* title */}
            <Flex className={`items-center gap-3 mb-3`}>
            <FaPhoneAlt className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">+(323) 750-1234</h4>
            </Flex>
            <Flex className={`items-center gap-2 mb-3`}>
            <IoMail className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">infoyourortencey@gmail.com</h4>
            </Flex>
            <Flex className={` gap-2 mb-2`}>
            <IoLocationSharp className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">374 FA Tower, William S Blvd, Melbourne
            2721, IL, USA</h4>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Footer;
