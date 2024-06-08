import React from "react";
import background_img from "../assets/Shape.png";
import Container from "./Container";
import Flex from "./Flex";
import { TbTargetArrow } from "react-icons/tb";
import work_bg from "../assets/work_bg.png";
const Service_howwework = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background_img})` }}
      className="object-contain bg-no-repeat py-[60px]  lg:py-[120px]"
    >
      <Container>
        {/* title part */}
        <div className="max-w-[460px] mx-auto mb-10">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC] ">
              Work Prosses
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full  mt-2 md:mt-4 mb-3 md:mb-5 text-center">
            How We Work!
          </h1>
        </div>
        {/* title part */} 
        <Flex className={`items-center gap-5 flex-col lg:flex-row`}>
        <div className="relative max-w-[464px]">
          <img className="w-full" src={work_bg} alt="" />
          <div className="absolute top-[40px] right-[13px] left-[124px] md:left-[177px]">
            <h2 className="font-semibold font-dmSans text-[20px] hover:text-customBlue duration-150">
              Business Planning
            </h2>
            <p className="font-dmSans font-normal text-[14px] sm:text-[18px] w-full lg:w-[275px] mx-auto">
              There are many variations of pass Lorem Ipsum available, but the a
              have suffered alteration.
            </p>
          </div>
        </div>
        <div className="relative max-w-[464px]">
          <img className="w-full" src={work_bg} alt="" />
          <div className="absolute top-[40px] right-[13px] left-[124px] md:left-[177px]">
            <h2 className="font-semibold font-dmSans text-[20px] hover:text-customBlue duration-150">
              Business Planning
            </h2>
            <p className="font-dmSans font-normal text-[14px] sm:text-[18px] w-full lg:w-[275px] mx-auto">
              There are many variations of pass Lorem Ipsum available, but the a
              have suffered alteration.
            </p>
          </div>
        </div>
        <div className="relative max-w-[464px]">
          <img className="w-full" src={work_bg} alt="" />
          <div className="absolute top-[40px] right-[13px] left-[124px] md:left-[177px]">
            <h2 className="font-semibold font-dmSans text-[20px] hover:text-customBlue duration-150">
              Business Planning
            </h2>
            <p className="font-dmSans font-normal text-[14px] sm:text-[18px] w-full lg:w-[275px] mx-auto">
              There are many variations of pass Lorem Ipsum available, but the a
              have suffered alteration.
            </p>
          </div>
        </div>
            
        </Flex>
      </Container>
    </section>
  );
};

export default Service_howwework;
