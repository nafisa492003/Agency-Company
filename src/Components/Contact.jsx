import React from "react";
import contact_bg from "../assets/contact_banner.png";
import Container from "./Container";
import Flex from "./Flex";
import { TbTargetArrow } from "react-icons/tb";
const Contact = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${contact_bg})`,
        backgroundRepeat: "no-repeat",
      }}
      className="pt-[80px] pb-[50px]"
    >
      <Container>
        <div className="max-w-[1196px] px-[40px] py-[40px] lg:px-[80px] lg:py-[75px] bg-[#3661FC] rounded-[50px] mx-auto">
          <Flex className={`items-center justify-between flex-col lg:flex-row`}>
            <div>
              <Flex className={`items-center gap-3`}>
                <TbTargetArrow size={20} className="text-orange-500" />
                <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-white">
                  We Are Hire
                </h3>
              </Flex>
              <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[680px] mt-2 md:mt-4 mb-3 md:mb-5 text-white">
                Tell us About Your Business, We are Ready to Solve.
              </h1>
            </div>
            <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[34px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-10">
            Contact Us
          </button>
          </Flex>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
