import React from "react";
import Container from "./Container";
import background_img from "../assets/Shape.png";
import Flex from "./Flex";
import { TbTargetArrow } from "react-icons/tb";
import chose_img from "../assets/chose_img.png";
import ProgressBar from "./ProgressBar";
const Choosing = () => {
  return (
    <section
      style={{ backgroundImage: `url(${background_img})` }}
      className="object-contain bg-no-repeat py-[50px]  lg:py-[120px]"
    >
      <Container>
        <Flex className="flex-col items-center gap-[60px] lg:gap-[100px] lg:flex-row">
          <div className="w-full lg:w-1/2 md:px-0">
            <Flex className={`items-center gap-3`}>
              <TbTargetArrow size={20} className="text-orange-500" />
              <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC]">
                Why Choose Ortencey
              </h3>
            </Flex>
            <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[600px] mt-2 md:mt-4 mb-3 md:mb-5">
              Reason For Choosing Our Digital Agency
            </h1>
            <p className="font-medium font-dmSans text-[14px] md:text-[20px] text-[#6B6161] mb-12 md:mb-5 w-full lg:w-[718px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majori suffered alteration in some form, by injected
              humour, or randomised word whic look even sligh believable. If you
              are going to use.
            </p>
            {/* progress par */}
            <div>
      <ProgressBar progress={85} title={`Software Development`} />
      <ProgressBar progress={90} title={`Web Development`}/>
      <ProgressBar progress={80} title={`UL / UX Design`}/>
    </div>
            {/* progresspart */}
          </div>
          <div className="w-full mb-6 lg:w-1/2 md:mb-0">
            <img src={chose_img} alt="" className="w-full" />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Choosing;
