import React from "react";
import Container from "./Container";
import { TbTargetArrow } from "react-icons/tb";
import Flex from "./Flex";
import blog from '../assets/blog_pick.png'
import { IoPerson } from "react-icons/io5";
import { AiFillWechat } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
const Blog = () => {
  return (
    <section className="my-[120px]">
      <Container>
        {/* title part */}
        <div className="max-w-[460px] mx-auto mb-10">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-[#3661FC] ">
              Our Blog
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full  mt-2 md:mt-4 mb-3 md:mb-5 text-center">
          Latest Blogs & Articles
          </h1>
        </div>
        {/* title part */}
        <Flex className={`items-center flex-col gap-5 lg:flex-row lg:justify-between `}>
        <div className="max-w-[464px] mx-auto md:mx-0 bg-[#F4F4FF] rounded-b-[30px] rounded-t-[30px]">
          <img src={blog} alt="blog" />
          <div className="px-4 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <Flex className={`items-center gap-14`}>
              <Flex className={`items-center gap-1`}>
              <IoPerson className="text-[#3661FC] text-sm" />
              <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">by Admin</h5>
                </Flex> 
                <Flex className={`items-center gap-1 mb-4`}>
                <AiFillWechat className="text-[#3661FC] text-sm" />
                <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">25</h5>
                    </Flex> 
                    <Flex className={`items-center gap-1`}>
                    <IoEyeOutline className="text-[#3661FC] text-sm" />   <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">120 Views</h5>
                    </Flex>
            </Flex>
           <a className="font-bold font-dmSans text-[25px] text-[#3661FC] underline" href="#">Successful business partner have
           a meeting and discussing</a>
          </div>
        </div>
        <div className="max-w-[464px] mx-auto md:mx-0 bg-[#F4F4FF] rounded-b-[30px] rounded-t-[30px]">
          <img src={blog} alt="blog" />
          <div className="px-4 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <Flex className={`items-center gap-14`}>
              <Flex className={`items-center gap-1`}>
              <IoPerson className="text-[#3661FC] text-sm" />
              <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">by Admin</h5>
                </Flex> 
                <Flex className={`items-center gap-1 mb-4`}>
                <AiFillWechat className="text-[#3661FC] text-sm" />
                <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">25</h5>
                    </Flex> 
                    <Flex className={`items-center gap-1`}>
                    <IoEyeOutline className="text-[#3661FC] text-sm" />   <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">120 Views</h5>
                    </Flex>
            </Flex>
           <a className="font-bold font-dmSans text-[25px] text-[#3661FC] underline" href="#">Successful business partner have
           a meeting and discussing</a>
          </div>
        </div>
        <div className="max-w-[464px] mx-auto md:mx-0 bg-[#F4F4FF] rounded-b-[30px] rounded-t-[30px]">
          <img src={blog} alt="blog" />
          <div className="px-4 py-7 bg-[#F4F4FF] rounded-b-[30px]">
            <Flex className={`items-center gap-14`}>
              <Flex className={`items-center gap-1`}>
              <IoPerson className="text-[#3661FC] text-sm" />
              <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">by Admin</h5>
                </Flex> 
                <Flex className={`items-center gap-1 mb-4`}>
                <AiFillWechat className="text-[#3661FC] text-sm" />
                <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">25</h5>
                    </Flex> 
                    <Flex className={`items-center gap-1`}>
                    <IoEyeOutline className="text-[#3661FC] text-sm" />   <h5 className="text-sm font-normal font-dmSans text-[#BBBBBB]">120 Views</h5>
                    </Flex>
            </Flex>
           <a className="font-bold font-dmSans text-[25px] text-[#3661FC] underline" href="#">Successful business partner have
           a meeting and discussing</a>
          </div>
        </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Blog;
