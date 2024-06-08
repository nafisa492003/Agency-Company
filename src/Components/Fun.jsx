import React from 'react'
import Flex from './Flex'
import icon_one from '../assets/Icon (2).png'
import icon_two from '../assets/Icon (3).png'
import icon_three from '../assets/Icon (4).png'
import Container from './Container'
const Fun = () => {
  return (
    <section className='my-[120px]'> 
    <Container>
        <Flex className={`items-center gap-10 lg:gap-[60px] justify-center flex-wrap lg:flex-row `}>
            <div className='flex items-center px-[34px] py-10 bg-[#F4F4FF] rounded-[20px] gap-2'>
                <img src={icon_one} alt="" />
                <div>
                    <h1 className='font-bold font-dmSans text-[46px] mb-2'>1500 +</h1>
                    <h3 className='font-normal font-dmSans text-[20px] text-[#6B6161]'>Project Complete</h3>
                </div>
            </div>
            <div className='flex items-center px-[34px] py-10 bg-[#F4F4FF] rounded-[20px] gap-2'>
                <img src={icon_two} alt="" />
                <div>
                    <h1 className='font-bold font-dmSans text-[46px] mb-2'>1500 +</h1>
                    <h3 className='font-normal font-dmSans text-[20px] text-[#6B6161]'>Project Complete</h3>
                </div>
            </div>
            <div className='flex items-center px-[34px] py-10 bg-[#F4F4FF] rounded-[20px] gap-2'>
                <img src={icon_two} alt="" />
                <div>
                    <h1 className='font-bold font-dmSans text-[46px] mb-2'>1500 +</h1>
                    <h3 className='font-normal font-dmSans text-[20px] text-[#6B6161]'>Project Complete</h3>
                </div>
            </div>
            <div className='flex items-center px-[34px] py-10 bg-[#F4F4FF] rounded-[20px] gap-2'>
                <img src={icon_three} alt="" />
                <div>
                    <h1 className='font-bold font-dmSans text-[46px] mb-2'>1500 +</h1>
                    <h3 className='font-normal font-dmSans text-[20px] text-[#6B6161]'>Project Complete</h3>
                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default Fun