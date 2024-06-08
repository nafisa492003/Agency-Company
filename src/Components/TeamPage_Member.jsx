import React from 'react'
import team_img from '../assets/team_img.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Flex from './Flex';
import team_member from '../assets/teamMember_img.png'
const TeamPage_Member = () => {
  return (
   <section className='mt-12'>
   <Flex className={`items-center gap-6 lg:justify-between flex-col lg:flex-row mb-10`}>
   <div className='max-w-[340px] py-5 bg-[#F4F4FF] px-5 group mx-auto rounded-[40px] overflow-hidden relative hover:bg-white'>
                <img src={team_img} alt="" />
                <div className='w-[150px] mx-auto mt-6'>
                    <h2 className='font-medium font-dmSans text-[18px] text-center'>Robert Sions</h2>
                    <p className='font-dmSans font-normal text-[14px] text-center'>Business Consultant</p>
                </div>
               <div className='absolute top-[20px] hidden px-5 py-10 transition duration-150 group-hover:block bg-[#F4F4FF] rounded-[10px] max-w-[340px]'>
                <img src={team_member} alt="" />
               <Flex className={`items-center mx-auto justify-between mt-5`}>
                <FaFacebook  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaTwitter  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaLinkedinIn  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <IoLogoYoutube  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                </Flex>
               </div>
            </div>
            <div className='max-w-[340px] py-5 bg-[#F4F4FF] px-5 group mx-auto rounded-[40px] overflow-hidden relative hover:bg-white'>
                <img src={team_img} alt="" />
                <div className='w-[150px] mx-auto mt-6'>
                    <h2 className='font-medium font-dmSans text-[18px] text-center'>Robert Sions</h2>
                    <p className='font-dmSans font-normal text-[14px] text-center'>Business Consultant</p>
                </div>
               <div className='absolute top-[20px] hidden px-5 py-10 transition duration-150 group-hover:block bg-[#F4F4FF] rounded-[10px] max-w-[340px]'>
                <img src={team_member} alt="" />
               <Flex className={`items-center mx-auto justify-between mt-5`}>
                <FaFacebook  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaTwitter  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaLinkedinIn  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <IoLogoYoutube  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                </Flex>
               </div>
            </div>
            <div className='max-w-[340px] py-5 bg-[#F4F4FF] px-5 group mx-auto rounded-[40px] overflow-hidden relative hover:bg-white'>
                <img src={team_img} alt="" />
                <div className='w-[150px] mx-auto mt-6'>
                    <h2 className='font-medium font-dmSans text-[18px] text-center'>Robert Sions</h2>
                    <p className='font-dmSans font-normal text-[14px] text-center'>Business Consultant</p>
                </div>
               <div className='absolute top-[20px] hidden px-5 py-10 transition duration-150 group-hover:block bg-[#F4F4FF] rounded-[10px] max-w-[340px]'>
                <img src={team_member} alt="" />
               <Flex className={`items-center mx-auto justify-between mt-5`}>
                <FaFacebook  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaTwitter  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaLinkedinIn  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <IoLogoYoutube  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                </Flex>
               </div>
            </div>
            <div className='max-w-[340px] py-5 bg-[#F4F4FF] px-5 group mx-auto rounded-[40px] overflow-hidden relative hover:bg-white'>
                <img src={team_img} alt="" />
                <div className='w-[150px] mx-auto mt-6'>
                    <h2 className='font-medium font-dmSans text-[18px] text-center'>Robert Sions</h2>
                    <p className='font-dmSans font-normal text-[14px] text-center'>Business Consultant</p>
                </div>
               <div className='absolute top-[20px] hidden px-5 py-10 transition duration-150 group-hover:block bg-[#F4F4FF] rounded-[10px] max-w-[340px]'>
                <img src={team_member} alt="" />
               <Flex className={`items-center mx-auto justify-between mt-5`}>
                <FaFacebook  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaTwitter  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <FaLinkedinIn  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                <IoLogoYoutube  className='text-[#3661FC] text-center hover:text-[30px] text-[20px] duration-100 ease-in-out' />
                </Flex>
               </div>
            </div>
   </Flex>
   </section>
  )
}

export default TeamPage_Member