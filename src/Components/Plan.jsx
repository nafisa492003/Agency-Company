import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import Flex from "./Flex";
import plan_img from "../assets/plan_img.png";
import Container from "./Container";
const Plan = () => {
  return (
    <section className="my-[60px] lg:my-[120px]">
      <Container>
        <div className="max-w-[460px] mx-auto mb-10">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC] ">
              Our Pricing
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full  mt-2 md:mt-4 mb-3 md:mb-5 text-center">
            Our Best Pricing Plan
          </h1>
        </div>
        <Flex className={`flex-col gap-4 lg:flex-row lg:justify-between`}>
          <div
            style={{ backgroundImage: `url(${plan_img})` }}
            className="object-contain py-10 px-11 bg-no-repeat w-full h-full lg:w-[465px] lg:h-[606px] "
          >
            <h4 className="font-semibold font-dmSans text-[24px]">
              Basic Plan
            </h4>
            <Flex className={`items-center gap-3 relative`}>
            <span className="font-normal font-dmSans text-[20px] text-[#3661FC] absolute top-[1px] left-[-16px]">$</span>
              <h1 className="font-bold font-dmSans text-[60px] text-[#3661FC] ">30</h1>
              <p
                className="font-normal font-dmSans text-[18px] text-[#6B6161] mt-4"
              >
                Per Month
              </p>
            </Flex>
            <div className=" w-[272px] mx-auto mt-14">
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Free Consultations"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Free Consultations"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
              Free Consultations
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Business Planning"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Business Planning"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
             Business Planning
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Investment Process"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Investment Process"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
            Investment Process
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
             Market Research
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
           Unlimited Updates
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
            Online Support
              </label>
            </div>
            </div>
            <button className="font-normal font-dmSans text-[14px] md:text-[18px] hover:text-white px-[66px] py-2 md:px-[134px] md:py-4 rounded-[50px] hover:bg-custom-gradient mt-3 border-[#3661FC] border hover:border-none duration-100">
            Choose Plan
          </button>
          </div>
          <div
            style={{ backgroundImage: `url(${plan_img})` }}
            className="object-contain py-10 px-11 bg-no-repeat w-full h-full lg:w-[465px] lg:h-[606px] "
          >
            <h4 className="font-semibold font-dmSans text-[24px]">
              Basic Plan
            </h4>
            <Flex className={`items-center gap-3 relative`}>
            <span className="font-normal font-dmSans text-[20px] text-[#3661FC] absolute top-[1px] left-[-16px]">$</span>
              <h1 className="font-bold font-dmSans text-[60px] text-[#3661FC] ">30</h1>
              <p
                className="font-normal font-dmSans text-[18px] text-[#6B6161] mt-4"
              >
                Per Month
              </p>
            </Flex>
            <div className=" w-[272px] mx-auto mt-14">
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Free Consultations"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Free Consultations"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
              Free Consultations
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Business Planning"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Business Planning"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
             Business Planning
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Investment Process"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Investment Process"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
            Investment Process
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
             Market Research
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
           Unlimited Updates
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
            Online Support
              </label>
            </div>
            </div>
            <button className="font-normal font-dmSans text-[14px] md:text-[18px] hover:text-white px-[66px] py-2 md:px-[134px] md:py-4 rounded-[50px] hover:bg-custom-gradient mt-3 border-[#3661FC] border hover:border-none duration-100">
            Choose Plan
          </button>
          </div>
          <div
            style={{ backgroundImage: `url(${plan_img})` }}
            className="object-contain py-10 px-11 bg-no-repeat w-full h-full lg:w-[465px] lg:h-[606px] "
          >
            <h4 className="font-semibold font-dmSans text-[24px]">
              Basic Plan
            </h4>
            <Flex className={`items-center gap-3 relative`}>
            <span className="font-normal font-dmSans text-[20px] text-[#3661FC] absolute top-[1px] left-[-16px]">$</span>
              <h1 className="font-bold font-dmSans text-[60px] text-[#3661FC] ">30</h1>
              <p
                className="font-normal font-dmSans text-[18px] text-[#6B6161] mt-4"
              >
                Per Month
              </p>
            </Flex>
            <div className=" w-[272px] mx-auto mt-14">
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Free Consultations"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Free Consultations"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
              Free Consultations
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Business Planning"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Business Planning"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
             Business Planning
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="Investment Process"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="Investment Process"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-black"
              >
            Investment Process
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
             Market Research
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
           Unlimited Updates
              </label>
            </div>
            <div class="flex items-center mb-4">
              <input
                type="checkbox"
                id="disabled-checkboxs"
                class="w-5 h-5 text-orange-500 bg-gray-100 border-2 border-gray-300  focus:ring-orange-500 focus:ring-offset-0 focus:outline-none rounded-full"
              />
              <label
                for="disabled-checkbox"
                class="ml-2 text-[14px] md:text-[20px] font-medium font-dmSans text-[#BCBCBC]"
              >
            Online Support
              </label>
            </div>
            </div>
            <button className="font-normal font-dmSans text-[14px] md:text-[18px] hover:text-white px-[66px] py-2 md:px-[134px] md:py-4 rounded-[50px] hover:bg-custom-gradient mt-3 border-[#3661FC] border hover:border-none duration-150">
            Choose Plan
          </button>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Plan;
