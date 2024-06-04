import React from "react";
import bannerimg from "../assets/bannerpick.png";
import Container from "./Container";
import Flex from "./Flex";
import bannerpick from "../assets/bannerleft.png";
const Banner = () => {
  return (
    <section
    style={{ backgroundImage: `url(${bannerimg})` }}
    className="object-contain bg-no-repeat pb-[200px] md:pb-52"
  >
    <Container>
      <Flex className="flex-wrap md:flex-nowrap">
        <div className="w-full md:w-1/2 mt-48 md:mt-[360px] text-center md:text-left">
          <h3 className="font-medium font-dmSans text-[20px] md:text-[25px] mb-3 md:mb-5 text-gradient">
            Your Trusted Ortencey Agency
          </h3>
          <h1 className="font-bold font-dmSans text-[36px] lg:text-[60px] text-white mb-3 md:mb-5">
            Our Digital Agency With Excellence Services
          </h1>
          <p className="font-medium font-dmSans text-[16px] md:text-[20px] text-white mb-3 md:mb-5 w-full lg:w-[596px] mx-auto md:mx-0">
            The 3 golden rules professional Digital Marketing Agency don’t want you to know about.
          </p>
          <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[34px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-10">
            Discover More
          </button>
        </div>
        <div className="flex justify-center w-full mt-10 md:w-1/2 md:justify-end md:mt-0">
          <img className="mt-10 md:mt-[145px] w-full max-w-[400px] lg:max-w-full" src={bannerpick} alt="" />
        </div>
      </Flex>
    </Container>
  </section>
  
  );
};

export default Banner;
