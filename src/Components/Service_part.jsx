import React from "react";
import service_img from "../assets/service_img.png";
import Container from "./Container";
import Flex from "./Flex";
const Service_part = ({title}) => {
  return (
    <section className="my-[30px]">
      <Container>
      <Flex className={`items-center p-5 bg-[#F4F4FF] rounded-[50px] gap-12 lg:gap-24 flex-col lg:flex-row hover:border border-orange-400 transition duration-100`}>
          <div className="w-full lg:w-4/12">
            <img src={service_img} alt="" />
          </div>
          <div className="w-full lg:w-6/12">
            <h1 className="font-semibold font-dmSans text-[26px] mb-3">
             {title}
            </h1>
            <p className="font-normal font-dmSans text-[18px] text-[#6B6161] w-full lg:w-[772px]">
              There are many variations of passages of Lorem Ipsusm available,
              but the majority our as have suffered alteration in some form, by
              injected humour, or randomised word which don't worry a look even
              sligh believable. If you are going to use a passage.
            </p>
          </div>
          <div className="w-full lg:w-2/12">
          <button className="font-normal font-dmSans text-[18px] hover:text-white bg-[#F4F4FF] hover:bg-custom-gradient border-[1px] border-orange-500 px-[33px] py-3 rounded-full transition duration-100">Read More</button>
          </div>
        </Flex>

      </Container>
    </section>
  );
};

export default Service_part;
