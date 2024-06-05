import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import aboutimg from "../assets/aboutimg.png";
import { TbTargetArrow } from "react-icons/tb";
const About = () => {
  return (
    <section className="mt-12 mb-12 md:mt-[120px] md:mb-[120px]">
      <Container>
        <Flex className="flex-col lg:flex-row gap-[100px] items-center">
          <div className="w-full mb-6 lg:w-1/2 md:mb-0">
            <img src={aboutimg} alt="about_img" className="object-contain w-full" />
          </div>
          <div className="w-full px-4 lg:w-1/2 md:px-0">
            <Flex className={`items-center gap-3`}>
              <TbTargetArrow size={20} className="text-orange-500" />
              <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC]">
                About Our Company
              </h3>
            </Flex>
            <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[600px] mt-2 md:mt-4 mb-3 md:mb-5">
              Best Digital Marketing Agency For People
            </h1>
            <p className="font-medium font-dmSans text-[14px] md:text-[20px] text-[#6B6161] mb-3 md:mb-5 w-full lg:w-[800px] mx-auto md:mx-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have as suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything.
            </p>
            {/* check box part */}
            <Flex className={`md:items-center gap-4  mt-6 flex-col md:flex-row `}>
            <div class="flex items-center w-1/2">
              <input
                type="checkbox"
                id="custom-checkbox"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="custom-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
              Digital Strategy
              </label>
            </div>
            <div class="flex items-center w-1/2">
              <input
                type="checkbox"
                id="custom-checkbox"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="custom-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
              SEO Optimization
              </label>
            </div>
            </Flex>
            <Flex className={`md:items-center gap-4  mt-6 flex-col md:flex-row `}>
            <div class="flex items-center w-1/2">
              <input
                type="checkbox"
                id="custom-checkbox"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="custom-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
               Marketing
              </label>
            </div>
            <div class="flex items-center w-1/2">
              <input
                type="checkbox"
                id="custom-checkbox"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="custom-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
               First Working Process
              </label>
            </div>
            </Flex>
            {/* check box part */}
            <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[34px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-12">
            Read More
          </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
