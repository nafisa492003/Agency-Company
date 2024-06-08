import React from 'react'
import Flex from '../Components/Flex'
import about_banner from "../assets/about_banner.png";
import Container from '../Components/Container';
import { TbTargetArrow } from "react-icons/tb";
import TeamPage_Member from '../Components/TeamPage_Member';
const Team_page = () => {
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
            Team
            </h1>
            <h3 className="font-normal font-dmSans text-[18px] text-white text-center">
              Home - <span className="text-orange-400">   Team</span>
            </h3>
          </div>
        </Flex>
      </div>
      {/* banner */}
      <Container>
         {/* title */}
         <div className="max-w-[460px] mx-auto mb-10 mt-[120px]">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-customBlue ">
            Team Member
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full  mt-2 md:mt-4 mb-3 md:mb-5 text-center">
          Creative Team Member
          </h1>
        </div>
        {/* title */}
        <TeamPage_Member/>
        <TeamPage_Member/>
        <TeamPage_Member/>
      </Container>
   </section>
  )
}

export default Team_page