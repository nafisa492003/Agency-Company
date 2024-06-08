import React from 'react'
import about_banner from '../assets/about_banner.png'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import About from '../Components/About'
import Choosing from '../Components/Choosing'
import Team from '../Components/Team'
import Quality_about_part from '../Components/Quality_about_part'
import Fun from '../Components/Fun'
const About_part = () => {
  return (
    <section>
      {/* banner */}
      <div style={{ backgroundImage: `url(${about_banner})` }}
    className="object-contain bg-no-repeat pt-[190px] lg:pt-[310px] pb-[150px]">
       <Flex className={`items-center justify-center mb-[120px]`}>
        <div>
        <h1 className='font-bold font-dmSans text-[46px] text-white'>About Us</h1>
        <h3 className='font-normal font-dmSans text-[18px] text-white text-center'>Home   -   <span className='text-orange-400'>About Us</span></h3>
        </div>
       </Flex>
      </div>
       {/* banner */}
       <Image />
       <About/>
       <Choosing/>
       <Quality_about_part/>
       <Team/>
       <Fun/>
    </section>
  )
}

export default About_part