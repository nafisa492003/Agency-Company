import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import quality_pick from "../assets/quality_pick.png";
import { TbTargetArrow } from "react-icons/tb";
import world from "../assets/World Map.png";
const Quality_about_part = () => {
  return (
    <section className="my-[120px]">
      <Container>
        <Flex className={`items-center flex-col gap-20 lg:gap-[100px]  lg:flex-row`}>
          <div className="w-full lg:w-1/2">
            <img className="w-full mx-auto" src={quality_pick} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <Flex className={`items-center gap-3`}>
              <TbTargetArrow size={20} className="text-orange-500" />
              <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC]">
                Reason of Our Success
              </h3>
            </Flex>
            <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[600px] mt-2 md:mt-4 mb-3 md:mb-5">
              Quality & Experience Best Digital Agency
            </h1>
            <Flex className={`items-center gap-5 mb-7`}>
              <button className="px-4 py-2 rounded-full text-[18px] font-dmSans font-normal text-[#6B6161] bg-[#F4F4FF] hover:bg-custom-gradient hover:text-white transition duration-100">
                Our Mission
              </button>
              <button className="px-4 py-2 rounded-full text-[18px] font-dmSans font-normal text-[#6B6161] bg-[#F4F4FF] hover:bg-custom-gradient hover:text-white transition duration-100">
                Our Vission
              </button>
              <button className="px-4 py-2 rounded-full text-[18px] font-dmSans font-normal text-[#6B6161] bg-[#F4F4FF] hover:bg-custom-gradient hover:text-white transition duration-100">
                Our History
              </button>
            </Flex>
            <p className="font-medium font-dmSans text-[14px] md:text-[20px] text-[#6B6161] mb-3 md:mb-5 w-full lg:w-[582pxpx] mx-auto md:mx-0">
              There are many variations of passages of Lorem Ipsum available,
              but the majori suffered alteration in some form, by injected
              humour, or randomised word whic look even sligh believable. If you
              are going to use.
            </p>
            {/* check box part */}
            <Flex className={`items-center gap-10`}>
              <img src={world} alt="" />
              <Flex className={`flex-col gap-2`}>
                <div class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id=" Financial Growth System"
                    class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
                  />
                  <label
                    for=" Financial Growth System"
                    class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
                  >
                    Financial Growth System
                  </label>
                </div>
                <div class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id=" Financial Growth System"
                    class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
                  />
                  <label
                    for="Customer Oriented Program Daily"
                    class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
                  >
                    Customer Oriented Program Daily
                  </label>
                </div>
                <div class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id=" Dedicated Team member"
                    class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
                  />
                  <label
                    for=" Dedicated Team member"
                    class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
                  >
                    Dedicated Team member
                  </label>
                </div>
                <div class="flex items-center gap-1">
                  <input
                    type="checkbox"
                    id=" Product ux Design & Development"
                    class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
                  />
                  <label
                    for=" Product ux Design & Development"
                    class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
                  >
                    Product ux Design & Development
                  </label>
                </div>
              </Flex>
            </Flex>
            {/* check box part */}
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Quality_about_part;
