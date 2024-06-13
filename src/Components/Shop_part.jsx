import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { IoSearch } from "react-icons/io5";
const Shop_part = () => {
  return (
    <section className='my-[80px] lg:my-[120px]'>
        <Container>
            <Flex>
                <div className='w-full lg:w-3/12'>
                <div className='px-[30px] py-5 border border-orange-500 rounded-[20px]'>
                    <h1 className='font-dmSans font-bold text-[25px]'>Search</h1>
                    <div className="w-full h-[2px] bg-[#f4f4ff] mx-auto my-3">
                        <div className='w-[90px] h-[2px] bg-custom-gradient'></div>
                    </div>
                    <div className='relative w-full rounded-full px-[20px] py-4 bg-custom-gradient mt-6 '>
                        <input type="text" placeholder='Search' className='font-normal bg-transparent border-none font-dmSans text-[14px] text-white placeholder:text-white placeholder:text-[16px]' />
                        <IoSearch size={26} className='absolute text-white top-[25px] right-[14px]' />
                    </div>
                </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Shop_part