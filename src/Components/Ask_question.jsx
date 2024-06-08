import React from 'react'
import ask_bg from '../assets/Shape.png'
import Container from './Container'
import ask_img from '../assets/ask_img.png'
import Flex from './Flex'
const Ask_question = () => {
  return (
    <section  style={{ backgroundImage: `url(${ask_bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}}
    className="object-contain bg-no-repeat py-[120px]">
    <Container>
     <Flex className={`gap-20 flex-col lg:flex-row lg:gap-[100px]`}>
        <div className='w-full lg:w-1/2'>
        <img className='w-full mx-auto' src={ask_img} alt="" />
        </div>
        <div className='w-full lg:w-1/2'>
            <h1 className='font-bold font-dmSans text-[46px] mb-3'>Ask any Question</h1>
            <p className='font-dmSans font-normal text-[18px] text-[#6B6161] w-full lg:w-[544px] mb-3'>Sed primis eu conubia erat ut nam vitae a habitant dui adipiscing as dignissim eu a ad venenatis.</p>
            <form>
              <div className="flex flex-col gap-4 lg:flex-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 pt-5 rounded-[40px] font-dmSans font-normal text-[#9A9A9A] text-[14px] mt-5 pb-[50px] lg:pb-[130px] border-none"
              ></textarea>
              <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[34px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-12 ml-3">
                Send Message
              </button>
            </form>
        </div>
     </Flex>
    </Container>
    </section>
  )
}

export default Ask_question