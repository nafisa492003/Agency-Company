import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import from_pick from "../assets/from_pick.png";
import from_bg from "../assets/from_bg.png";
import video from "../assets/from_video.png";
import { TbTargetArrow } from "react-icons/tb";
const FromPart = () => {
  return (
    <section className="my-[60px] lg:my-[120px] relative">
    <Container>
      <div className="w-full lg:w-[1064px] py-[50px] px-[30px] lg:px-[60px] bg-custom-gradient rounded-full mx-auto hidden lg:block absolute top-[-71px] left-[450px]">
        <div className="flex items-center justify-between space-x-4 lg:space-x-0">
          <div className="flex items-center">
            <div className="w-1/2">
              <img src={from_pick} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="font-extrabold font-dmSans text-[24px] lg:text-[40px] text-white">
                1500
              </h2>
              <p className="font-normal font-dmSans text-[14px] lg:text-[18px] text-white whitespace-nowrap">
                Project Complate
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2">
              <img src={from_pick} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="font-extrabold font-dmSans text-[24px] lg:text-[40px] text-white">
                8562
              </h2>
              <p className="font-normal font-dmSans text-[14px] lg:text-[18px] text-white whitespace-nowrap">
                Satisfied Clients
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1/2">
              <img src={from_pick} alt="" />
            </div>
            <div className="w-1/2">
              <h2 className="font-extrabold font-dmSans text-[24px] lg:text-[40px] text-white">
                35
              </h2>
              <p className="font-normal font-dmSans text-[14px] lg:text-[18px] text-white whitespace-nowrap">
                Awards Win
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${from_bg})` }}
        className="object-contain w-full px-3 lg:px-20 pb-20 bg-no-repeat pt-10 lg:pt-[186px] mt-20"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
          <div className="w-full lg:w-1/2">
            <img src={video} alt="" />
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3">
              <TbTargetArrow size={20} className="text-orange-500" />
              <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-white">
                Make an Appointment
              </h3>
            </div>
            <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] mt-2 md:mt-4 mb-3 md:mb-5 text-white">
              Start New Project With Us
            </h1>
            <form>
              <div className="flex flex-col gap-4 lg:flex-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px]"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px]"
                />
              </div>
              <input
                type="text"
                placeholder="Business Topic"
                className="w-full px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] mt-5"
              />
              <textarea
                placeholder="Business Topic"
                className="w-full px-4 py-5 rounded-[40px] font-dmSans font-normal text-[#9A9A9A] text-[14px] mt-5 pb-[10px]"
              ></textarea>
              <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[34px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-12 ml-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </section>
  );
};

export default FromPart;
