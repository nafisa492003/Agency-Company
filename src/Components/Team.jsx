import React from 'react'
import Container from './Container'
import { TbTargetArrow } from "react-icons/tb";
import Flex from './Flex';
import team_img from '../assets/team_img.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
const Team = () => {
  return (
    <section className='py-[120px] bg-[#F4F4FF]'>
  <Container>
      {/* title part */}
  <div className="max-w-[460px] mx-auto mb-10">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC] ">
            Team Member
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full  mt-2 md:mt-4 mb-3 md:mb-5 text-center">
          Creative Team Member
          </h1>
        </div>
        {/* title part */}
        <Flex>
            <div className='w-[340px] py-5 bg-white px-5'>
                <img src={team_img} alt="" />
                <div className='w-[150px] mx-auto mt-6'>
                    <h2 className='font-medium font-dmSans text-[18px] text-center'>Robert Sions</h2>
                    <p className='font-dmSans font-normal text-[14px] text-center'>Business Consultant</p>
                </div>
                <Flex className={`items-center w-full bg-white gap-10`}>
                <FaFacebook />
                <FaTwitter />
                <FaLinkedinIn />
                <IoLogoYoutube />
                </Flex>
            </div>
        </Flex>
  </Container>
    </section>
  )
}

export default Team