import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Header = () => {
  const countries = [
    { name: "USA", flag: "https://flagcdn.com/us.svg" },
    { name: "Canada", flag: "https://flagcdn.com/ca.svg" },
    { name: "United Kingdom", flag: "https://flagcdn.com/gb.svg" },
    { name: "Germany", flag: "https://flagcdn.com/de.svg" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleChange = (e) => {
    const country = countries.find(
      (country) => country.name === e.target.value
    );
    setSelectedCountry(country);
  };


  return  (
    <section>
    <header className="max-w-[1680px] py-2 bg-[#3661FC] rounded-r-full absolute z-50 top-0">
      <Container>
        <Flex className="flex-wrap items-center justify-between lg:flex-nowrap">
          <Flex className="gap-1 md:gap-[30px] items-center flex-wrap lg:flex-nowrap">
            <h5 className="text-sm font-normal leading-6 text-white font-dmSans whitespace-nowrap">
              Welcome to Ortencey Digital Market Agency
            </h5>
            <span className="w-[1px] h-[26px] bg-[#708FFF] hidden lg:block"></span>
            <Flex className="items-center gap-2">
              <div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#FE651B", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#FFAA52", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
                <IoCall style={{ fill: "url(#gradient1)", width: "16px", height: "16px" }} />
              </div>
              <h4 className="text-sm font-normal leading-6 text-white font-dmSans whitespace-nowrap">
                +88 ( 5548 ) 6548
              </h4>
            </Flex>
            <span className="w-[1px] h-[26px] bg-[#708FFF] hidden lg:block"></span>
            <Flex className="items-center gap-2">
              <div>
                <svg width="0" height="0">
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: "#FE651B", stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: "#FFAA52", stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                </svg>
                <IoIosMail style={{ fill: "url(#gradient1)", width: "16px", height: "16px" }} />
              </div>
              <h4 className="text-sm font-normal leading-6 text-white font-dmSans">
                infoyour@gmail.com
              </h4>
            </Flex>
          </Flex>

          {/* header country part */}
          <Flex className={`items-center gap-1 md:gap-10 flex-wrap lg:flex-nowrap mt-2 lg:mt-0  lg:flex`}>
            <div onChange={handleChange} className="flex items-center gap-2 ">
              <img src={selectedCountry.flag} alt={selectedCountry.name} className="w-[20px] h-3" />
              <select
                id="country-select"
                onChange={handleChange}
                className="font-normal bg-[#3661FC] border-none font-dmSans text-[16px] text-white outline-none"
                value={selectedCountry.name}
              >
                {countries.map((country) => (
                  <option key={country.name} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* header country part end */}
            {/* icon part */}
            <Flex className="flex-wrap items-center gap-2 mt-2 md:gap-4 lg:flex-nowrap lg:mt-0">
              <FaFacebookF size={16} className="text-[#95ACFF] hover:text-orange-400 duration-100" />
              <span className="w-[1px] h-[26px] bg-[#708FFF] hidden lg:block"></span>
              <FaLinkedinIn size={16} className="text-[#95ACFF] hover:text-orange-400 duration-100" />
              <span className="w-[1px] h-[26px] bg-[#708FFF] hidden lg:block"></span>
              <FaTwitter size={16} className="text-[#95ACFF] hover:text-orange-400 duration-100" />
              <span className="w-[1px] h-[26px] bg-[#708FFF] hidden lg:block"></span>
              <FaYoutube size={16} className="text-[#95ACFF] hover:text-orange-400 duration-100" />
            </Flex>
            {/* icon part end */}
          </Flex>
        </Flex>
      </Container>
    </header>
    </section>
  );
};

export default Header;
