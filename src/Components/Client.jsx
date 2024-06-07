import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import line from "../assets/Line.png";
import client from "../assets/Client_pick.png";
import { TbTargetArrow } from "react-icons/tb";
import { Rate } from "antd";
const Client = () => {
  return (
    <section className="my-[120px]">
      <Container>
        <Flex className={`flex-col gap-12 lg:flex-row `}>
          <div className="w-full lg:w-1/2">
            <Flex className={`items-center gap-3 lg:gap-[60px]`}>
              <div className="flex flex-col w-1/3 gap-[60px]">
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
              </div>
              <div className="flex flex-col w-1/3 gap-[60px]">
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
              </div>
              <div className="flex flex-col w-1/3 gap-[60px]">
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
                <img
                  className="hover:border-b-[8px] border-orange-400 rounded-[40px] duration-150"
                  src={client}
                  alt="client"
                />
              </div>
            </Flex>
          </div>
          <img className="ml-[60px] hidden lg:block" src={line} alt="" />
          <div className="w-full lg:w-1/2">
            <Flex className={`flex-col gap-6`}>
              <div>
                <Flex className={`items-center gap-3`}>
                  <TbTargetArrow size={20} className="text-orange-500" />
                  <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC]">
                    Testimonial
                  </h3>
                </Flex>
                <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[600px] mt-2 md:mt-4 mb-3 md:mb-5">
                  What Our Client Say
                </h1>
              </div>
              <Flex className={`items-center justify-between`}>
                <h1 className="text-[#3661FC] text-[100px]">"</h1>

                <div className="bg-[#F4F4FF] w-[167px] h-[50px] px-4 py-4 rounded-full">
                  <Rate value={5} />
                </div>
               
              </Flex>
              <p className="max-w-[500px] font-dmSans font-normal text-[18px]">
                  There are many variations of passages of Lorem Ipsum availa
                  the majority have suffered alteration in some form by injecte
                  our, or rando word which don't look even slightly a
                  believable. If you are going to use a passage of Lorem Ipsum,
                  you need sure there isn't anything embarrassing.
                </p>
                <div>
                    <h3 className="font-dmSans font-bold text-[24px] mb-2">Kristin Waon  </h3>
                    <p className="font-normal font-dmSans text-[18px] text-[#6B616]">Web Designer</p>
                </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Client;
