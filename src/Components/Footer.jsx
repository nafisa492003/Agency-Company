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
    className="object-cover bg-no-repeat bg-cover bg-center pt-[80px] pb-[100px] md:pt-[40px] md:pb-[50px] sm:pt-[20px] sm:pb-[30px]"
  >
    <Container>
      {/* title part */}
      <Flex
        className="items-center justify-between flex-col lg:flex-row mb-[160px] md:mb-[80px] sm:mb-[40px]"
      >
        <div className="w-full mb-8 lg:w-1/2 lg:mb-0">
          <h4 className="font-normal font-dmSans text-[18px] text-white mb-2">
            For Digital Marketing Agency
          </h4>
          <h1 className="font-bold font-dmSans text-[24px] text-white">
            Join Our Agency Community
          </h1>
        </div>
        <div className="w-full lg:w-1/2">
          <div>
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full pl-[6px] lg:pl-[35px] pr-[65px] lg:pr-[140px] py-[28px] font-dmSans font-normal text-[#B1B1B1] rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute px-[5px] lg:px-[34px] font-dmSans font-normal py-[15px] text-white transform -translate-y-1/2 top-1/2 right-1 bg-blue-600 rounded-full">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </Flex>
      {/* title part */}
      <Flex className="flex-col items-start gap-10 lg:justify-between lg:flex-row">
        <div className="w-full mb-8 lg:w-1/4 lg:mb-0">
          <h3 className="font-semibold font-dmSans text-[26px] text-white mb-4">
            About Company
          </h3>
          <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
          <p className="font-normal font-dmSans text-[18px] text-white mb-5">
            There are many variations of passages of Lore Ipsum available but the
            majority have suffered alteration in some form, by injected humour, or randomised words.
          </p>
          <Flex className="items-center gap-5">
            <FaFacebook className="text-[#3661FC] text-[30px]" />
            <FaTwitter className="text-[#3661FC] text-[30px]" />
            <FaLinkedinIn className="text-[#3661FC] text-[30px]" />
            <IoLogoYoutube className="text-[#3661FC] text-[30px]" />
          </Flex>
        </div>
        <div className="w-full mb-8 lg:w-1/4 lg:mb-0">
          <h3 className="font-semibold font-dmSans text-[26px] text-white mb-4">
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
        <div className="w-full mb-8 lg:w-1/4 lg:mb-0">
          {/* title */}
          <h3 className="font-semibold font-dmSans text-[26px] text-white mb-4">
            Recent Post
          </h3>
          <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
          {/* title */}
          <Flex className="items-center gap-5 mb-3">
            <img src={footer_img} alt="Recent Post" className="object-cover w-16 h-16" />
            <div>
              <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9] w-full lg:w-[160px] mb-2">
                Thoughtful man using laptop pondering
              </h4>
              <Flex className="items-center gap-1">
                <BsCalendarDate className="text-[14px] text-customBlue" />
                <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9]">
                  09 Dec 2022
                </h4>
              </Flex>
            </div>
          </Flex>
          <Flex className="items-center gap-5 mb-3">
            <img src={footer_img} alt="Recent Post" className="object-cover w-16 h-16" />
            <div>
              <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9] w-full lg:w-[160px] mb-2">
                Young man with a laptop in a business
              </h4>
              <Flex className="items-center gap-1">
                <BsCalendarDate className="text-[14px] text-customBlue" />
                <h4 className="font-normal font-dmSans text-[16px] text-[#d9d9d9]">
                  09 Dec 2022
                </h4>
              </Flex>
            </div>
          </Flex>
        </div>
        <div className="w-full lg:w-1/4">
          {/* title */}
          <h3 className="font-semibold font-dmSans text-[26px] text-white mb-4">
            Contact Us
          </h3>
          <div className="w-[100px] h-[2px] bg-custom-gradient rounded-full mb-5"></div>
          {/* title */}
          <Flex className="items-center gap-3 mb-3">
            <FaPhoneAlt className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              +(323) 750-1234
            </h4>
          </Flex>
          <Flex className="items-center gap-2 mb-3">
            <IoMail className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              infoyourortencey@gmail.com
            </h4>
          </Flex>
          <Flex className="gap-2 mb-2">
            <IoLocationSharp className="text-[18px] text-customBlue" />
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              374 FA Tower, William S Blvd, Melbourne 2721, IL, USA
            </h4>
          </Flex>
        </div>
      </Flex>
    </Container>
  </section>
  
  );
};

export default Footer;
