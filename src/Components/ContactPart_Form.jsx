import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import contact_img from '../assets/contact_part_img.png'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
const ContactPart_Form = () => {
  return (
    <section className="my-[120px]">
      <Container>
        <Flex className={`items-center flex-col gap-0 lg:flex-row`}>
          <div className="w-full lg:w-1/2 py-[55px] px-[20px] md:px-[66px] bg-[#F4F4FF]">
            <h1 className="font-bold font-dmSans text-[30px] md:text-[46px] mb-3">
            Contact With Us
            </h1>
            <p className="font-dmSans font-normal text-[18px] text-[#6B6161] w-full mb-6">
            Send us a message and we' ll respond as soon as possible
            </p>
            <form>
              <div className="flex flex-col gap-4 lg:flex-row">
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
              </div>
              <div className="flex flex-col gap-4 mt-6 lg:flex-row">
                <input
                  type="text"
                  placeholder="Email Address*"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
                <input
                  type="text"
                  placeholder="Phone Number*"
                  className="w-full lg:w-[300px] px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] border-none"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-5 rounded-full font-dmSans font-normal text-[#9A9A9A] text-[14px] mt-5 border-none"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 pt-5 rounded-[40px] font-dmSans font-normal text-[#9A9A9A] text-[14px] mt-5 pb-[50px] lg:pb-[130px] border-none"
              ></textarea>
              <button className="font-normal font-dmSans text-[14px] md:text-[18px] text-white px-6 py-2 md:px-[200px] md:py-3 rounded-[50px] bg-custom-gradient mt-6 md:mt-12 ml-3">
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
          <div style={{
              backgroundImage: `url(${contact_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="object-contain pt-1 lg:pt-24 pb-[275px] px-[20px] lg:px-[80px] sm:px-11 bg-no-repeat w-full ">
          <h1 className="font-bold font-dmSans text-[30px] md:text-[46px] mb-3 text-white">
          Need Any Help?
            </h1>
            <p className="font-dmSans font-normal text-[18px] w-full mb-6 text-white">
            Send us a message and we' ll respond as soon as possible
            </p> 
         <Flex className={` justify-between flex-col lg:flex-row`}>
         <Flex className="items-center gap-5 mb-3 ">
            <FaPhoneAlt className="text-[25px] text-white" />
            <div>
            <h4 className="font-normal font-dmSans text-[25px] text-[#d9d9d9]">
            Phone
            </h4>
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              +(323) 750-1234
            </h4>
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              +(323) 750-1234
            </h4>
              
            </div>
          </Flex>
          <Flex className="items-center gap-5 mb-3">
            <IoMail className="text-[25px] text-white" />
            <div>
            <h4 className="font-normal font-dmSans text-[25px] text-[#d9d9d9]">
            Email
            </h4>
              
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              infoyourortencey@gmail.com
            </h4>
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
              infoyourortencey@gmail.com
            </h4>
              
            </div>
          </Flex>
         </Flex>
          <Flex className="gap-2 mb-[100px]">
            <IoLocationSharp className="text-[25px] text-white" />
           <div>
           <h4 className="font-normal font-dmSans text-[25px] text-[#d9d9d9]">
            Location
            </h4>
            <h4 className="font-normal font-dmSans text-[18px] text-[#d9d9d9]">
            4517 Washington Ave. 32 King Street, Melbourne<br/>
            Manchester, Road USA
            </h4>
           </div>
          </Flex>
            
         </div>
          </div>
        
        </Flex>
      </Container>
    </section>
  );
};

export default ContactPart_Form;
