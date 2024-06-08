import React, { useState } from "react";
import Flex from "../Components/Flex";
import about_banner from "../assets/about_banner.png";
import Container from "../Components/Container";
import { TbTargetArrow } from "react-icons/tb";
import { IoChatbubblesSharp } from "react-icons/io5";
import { TbWorldHeart } from "react-icons/tb";
import question from "../assets/question_img.png";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import Ask_question from "../Components/Ask_question";
const Questain = () => {
  const [plus, setplus] = useState(false);
  const [agency, setAgency] = useState(false);
  const [digital, setDigital] = useState(false);
  const [program, setProgram] = useState(false);
  const [design, setDesign] = useState(false);
  const [creative, setCreative] = useState(false);
  return (
    <section>
      {/* banner */}
      <div
        style={{ backgroundImage: `url(${about_banner})` }}
        className="object-contain bg-no-repeat pt-[190px] lg:pt-[310px] pb-[150px]"
      >
        <Flex className={`items-center justify-center`}>
          <div>
            <h1 className="font-bold font-dmSans text-[46px] text-white">
              Faq
            </h1>
            <h3 className="font-normal font-dmSans text-[18px] text-white text-center">
              Home - <span className="text-orange-400"> Faq</span>
            </h3>
          </div>
        </Flex>
      </div>
      {/* banner */}
      <Container>
        {/* title */}
        <Flex className={`my-[120px] flex-col lg:flex-row gap-20`}>
          <div className="w-full lg:-w-1/2">
            <Flex className={`items-center gap-3`}>
              <TbTargetArrow size={20} className="text-orange-500" />
              <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-orange-500">
                Common Questions
              </h3>
            </Flex>
            <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[600px] mt-2 md:mt-4 mb-3 md:mb-5">
              Frequently Asked Questions
            </h1>
            {/* title */}
            <Flex className={`items-start gap-5 flex-col md:flex-row`}>
              <Flex className={`flex-col gap-5 w-[290px] mt-10`}>
                <div className="py-4 px-[30px] flex items-center rounded-full bg-[#F4F4FF] gap-2 ">
                  <IoChatbubblesSharp size={18} className="text-customBlue" />
                  <h3 className="font-normal font-dmSans text-[18px] text-customBlue ">
                    General Questions
                  </h3>
                </div>
                <div className="py-4 px-[30px] flex items-center rounded-full bg-[#F4F4FF] gap-2 ">
                  <TbWorldHeart size={18} className="text-customBlue" />
                  <h3 className="font-normal font-dmSans text-[18px] text-customBlue ">
                    Community
                  </h3>
                </div>
                <div className="py-4 px-[30px] flex items-center rounded-full bg-[#F4F4FF] gap-2 ">
                  <IoChatbubblesSharp size={18} className="text-customBlue" />
                  <h3 className="font-normal font-dmSans text-[18px] text-customBlue ">
                    Support
                  </h3>
                </div>
              </Flex>
              <img src={question} alt="" />
            </Flex>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                  Is it Full Digital Marketing Agency?
                </h1>
                {plus ? (
                  <FiMinus
                    onClick={() => setplus(!plus)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                    onClick={() => setplus(!plus)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {plus && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                How to Create my Project in Agency?
                </h1>
                {agency ? (
                  <FiMinus
                    onClick={() => setAgency(!agency)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                    onClick={() => setAgency(!agency)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {agency && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                How to Work in Process of Digital Agency?
                </h1>
                {digital ? (
                  <FiMinus
                    onClick={() => setDigital(!digital)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                    onClick={() => setDigital(!digital)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {digital && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                How to join your referral program?
                </h1>
                {program ? (
                  <FiMinus
                    onClick={() => setProgram(!program)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                  onClick={() => setProgram(!program)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {program && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                Human centered design to challenges?
                </h1>
                {design ? (
                  <FiMinus
                    onClick={() => setDesign(!design)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                  onClick={() => setDesign(!design)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {design && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
            <div className="w-full lg:w-[710px] rounded-[40px] px-10 py-6 bg-white shadow-lg mb-5">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-semibold font-dmSans text-[26px] hover:text-customBlue duration-100">
                Bring their individual experience and creative?
                </h1>
                {creative ? (
                  <FiMinus
                    onClick={() => setCreative(!creative)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                ) : (
                  <FaPlus
                    onClick={() => setCreative(!creative)}
                    size={26}
                    className="font-semibold text-customBlue"
                  />
                )}
              </Flex>
              {creative && (
                <div>
                  <div className="w-full h-[2px] bg-[#D7DFFE] mt-5"></div>
                  <p className="w-full font-normal font-dmSans text-[18px] text-[#6B6161] lg:w-[630px] my-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of page when looking at
                    its layout. The point of using Lorem Ipsuim is that it has
                    as more less or randomised words which don't look even
                    slightly believable. If you are going to use a passage of
                    Lorem Ipsum, you need to be sure.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Flex>
      </Container>
      <Ask_question/>
    </section>
  );
};

export default Questain;
