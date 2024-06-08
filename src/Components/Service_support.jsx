import React from 'react'
import support_bg from '../assets/service_support_bg.png'
import Container from './Container'
import Flex from './Flex'
import { TbTargetArrow } from "react-icons/tb";
const Service_support = () => {
  return (
    <section  style={{ backgroundImage: `url(${support_bg})` }}
    className='object-cover py-[120px]'
    >
        <Container>
            <div className='w-full lg-w-[742px] text-center mx-auto'>
            <div className="max-w-[460px] mx-auto mb-10 mt-[120px]">
          <Flex className={`items-center gap-3 w-full justify-center`}>
            <TbTargetArrow size={20} className="text-orange-500" />
            <h3 className="font-medium font-dmSans text-[16px] md:text-[20px] text-white ">
            Let’s Support
            </h3>
          </Flex>
          <h1 className="font-bold font-dmSans text-[28px] md:text-[40px] w-full lg:w-[564px] mt-2 md:mt-4 mb-3 md:mb-5  text-white">
          You need our support to have
          any projects?
          </h1>
        </div>
           <p className='w-full font-dmSans font-normal text-[18px] lg:w-[742px]  text-white mx-auto text-center'>Enthusiastically architect corporate metrics via enterprise methodologies. Progressively
           extend distinctive process improvements rather than parallel channels.</p>
           <Flex className={`items-center justify-center gap-8 mt-11`}>
           <button className="font-normal font-dmSans text-[18px] text-white hover:bg-custom-gradient border-[1px] border-orange-500 px-[33px] py-3 rounded-full transition duration-100">Set Free Quotes</button>
           <button className="font-normal font-dmSans text-[18px] text-white hover:bg-custom-gradient border-[1px] border-orange-500 px-[33px] py-3 rounded-full transition duration-100">Contact For Us</button>
           </Flex>
            </div>
        </Container>


    </section>
  )
}

export default Service_support