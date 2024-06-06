import React from "react";
import Container from "./Container";
import image from "../assets/image.png";
import Flex from "./Flex";
const Image = () => {
  return (
    <section className="mb-20 lg:mb-[120px]">
      <Container>
        <Flex className={`items-center gap-4 justify-between flex-wrap lg:flex-row`}>
        <div className="max-w-[342px] mx-auto md:mx-0 ">
          <img src={image} alt="" />
          <div className="px-8 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <h1 className="font-bold font-dmSans text-[20px] mb-3">
              Graphics Design
            </h1>
            <p className="font-normal font-dmSans text-[16px] text-[#6B6161] max-w-[271px]">
              Contrary to popular belief, Lorem Ips is not simply random text.
              It has root in a piece of classical.
            </p>
          </div>
        </div>
        <div className="max-w-[342px] mx-auto md:mx-0">
          <img src={image} alt="" />
          <div className="px-8 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <h1 className="font-bold font-dmSans text-[20px] mb-3">
              Graphics Design
            </h1>
            <p className="font-normal font-dmSans text-[16px] text-[#6B6161] max-w-[271px]">
              Contrary to popular belief, Lorem Ips is not simply random text.
              It has root in a piece of classical.
            </p>
          </div>
        </div>
        <div className="max-w-[342px] mx-auto md:mx-0">
          <img src={image} alt="" />
          <div className="px-8 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <h1 className="font-bold font-dmSans text-[20px] mb-3">
              Graphics Design
            </h1>
            <p className="font-normal font-dmSans text-[16px] text-[#6B6161] max-w-[271px]">
              Contrary to popular belief, Lorem Ips is not simply random text.
              It has root in a piece of classical.
            </p>
          </div>
        </div>
        <div className="max-w-[342px] mx-auto md:mx-0">
          <img src={image} alt="" />
          <div className="px-8 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <h1 className="font-bold font-dmSans text-[20px] mb-3">
              Graphics Design
            </h1>
            <p className="font-normal font-dmSans text-[16px] text-[#6B6161] max-w-[271px]">
              Contrary to popular belief, Lorem Ips is not simply random text.
              It has root in a piece of classical.
            </p>
          </div>
        </div>

        </Flex>
      </Container>
    </section>
  );
};

export default Image;
