import React from 'react'
import Container from './Container'
import Flex from './Flex'

const Footer_end = () => {
  return (
  <section className='py-6 bg-customBlue'>
   <Container>
    <Flex className={`items-center justify-between flex-col md:flex-row`}>
        <div>
        <h4 className='font-normal font-dmSans text-[18px] text-white'>2022 © All rights reserved by devsnest-llc</h4>
        </div>
        <div>
        <Flex className={`items-center gap-3`}>
        <h4 className='font-normal font-dmSans text-[18px] text-white'> Privacy Policy  </h4>
        <span className='h-6 bg-white w-[1px]'></span>
        <h4 className='font-normal font-dmSans text-[18px] text-white'>  Terms & Conditions</h4>
        </Flex>
        </div>
    </Flex>
   </Container>
  </section>
  )
}

export default Footer_end