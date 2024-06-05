import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa6";
import { CiMenuFries } from "react-icons/ci";
const Nav_bar = () => {
  const homeref = useRef();
  const [home, setHOME] = useState(false);
  const serviceRef = useRef();
  const [service, setService] = useState(false);
  const teamRef = useRef();
  const [team, setTeam] = useState(false);
  const [dropDown, setdropDown] =useState(false)
  useEffect(() => {
    document.addEventListener("click", (e) => {
      homeref.current.contains(e.target) ? setHOME(true) : setHOME(false);
      serviceRef.current.contains(e.target)
        ? setService(true)
        : setService(false);
      teamRef.current.contains(e.target) ? setTeam(true) : setTeam(false);
    });
  }, []);
  return (
    <section>
      <Container>
        <nav className="w-full lg:w-[1660px] py-5 px-4 rounded-l-full absolute  lg:top-14  bg-white">
          <Flex className={`lg:gap-[130px] items-center justify-between relative`}>
            {/* nav logo */}
            <Link to="/">
              <img className="w-[100px] lg:w-full" src="/logo.png" alt="logo" />
            </Link>
            {/* nav manue */}
            <CiMenuFries onClick={()=>setdropDown(!dropDown)} size={24} className="block lg:hidden" />
            {dropDown && (
              <div className="absolute z-50 top-[50px] bg-[#F4F4FF] w-full p-3">
                 <ul className="flex flex-col items-start gap-4 mt-4">
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">About</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">Services</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">Team</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">Pages</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">News</Link>
          </li>
          <li className="font-normal font-dmSans text-[16px] hover:text-orange-500">
            <Link to="/">Contact</Link>
          </li>
        </ul>
         <Flex className={`gap-4 items-center mt-3`}>
              <div className="border-[#3661FC] border w-[40px] h-[40px] rounded-full bg-[#F4F4FF] flex items-center justify-center">
                <IoSearchSharp size={20} className="text-[#3661FC]" />
              </div>
              <div className="border-[#3661FC] border w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#F4F4FF]">
                <GiShoppingBag size={20} className="text-[#3661FC] " />
              </div>
              <button className="font-normal font-dmSans text-[18px] flex items-center gap-[5px] py-[15px] px-[20px] bg-[#3661FC] rounded-[50px] text-white ">
              Free Quote <FaArrowRight />
              </button>
            </Flex>
              </div>
            )}
             {/* nav manue */}

            {/* nav logo */}
            <ul className="items-center hidden gap-6 lg:flex">
              <li
                ref={homeref}
                className="font-normal font-dmSans text-[16px] relative group hover:text-orange-500"
              >
                <Flex className={`items-center gap-0   `}>
                  <Link to="/">Home</Link>
                  <FaAngleDown />
                </Flex>
                <span className="w-[56px] h-[2px] group-hover:bg-orange-500 absolute duration-150 ease-linear top-[62px]"></span>
                {/* home manue bar part */}
                {home && (
                  <ul className="absolute left-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg top-full">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Home 1</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Home 2</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Home 3</Link>
                    </li>
                  </ul>
                )}
                {/* home manue bar part end */}
              </li>
              <li className="relative group">
                <div className="font-normal font-dmSans text-16 hover:text-orange-500">
                  <Link to="/">About</Link>
                </div>
                <span className="absolute w-14 h-0.5 bg-transparent  group-hover:bg-orange-500 transition duration-150 ease-linear top-[62px]"></span>
              </li>
              <li
                ref={serviceRef}
                className="font-normal font-dmSans text-[16px] relative group hover:text-orange-500"
              >
                <Flex className={`items-center gap-0   `}>
                  <Link to="/">Services</Link>
                  <FaAngleDown />
                </Flex>
                <span className="w-[56px] h-[2px] group-hover:bg-orange-500 absolute duration-150 ease-linear top-[62px]"></span>
                {/* service manue bar part */}
                {service && (
                  <ul className="absolute left-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg top-full">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Services 1</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Services 2</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Services 3</Link>
                    </li>
                  </ul>
                )}
                {/* service manue bar part end */}
              </li>
              <li
                ref={teamRef}
                className="font-normal font-dmSans text-[16px] relative group hover:text-orange-500"
              >
                <Flex className={`items-center gap-0   `}>
                  <Link to="/">Team</Link>
                  <FaAngleDown />
                </Flex>
                <span className="w-[56px] h-[2px] group-hover:bg-orange-500 absolute duration-150 ease-linear top-[62px]"></span>
                {/* team manue bar part */}
                {team && (
                  <ul className="absolute left-0 w-48 mt-2 bg-white border border-gray-200 shadow-lg top-full">
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Team 1</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Team 2</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-100">
                      <Link to="/">Team 3</Link>
                    </li>
                  </ul>
                )}
                {/* team manue bar part end */}
              </li>
              <li className="relative group">
                <div className="flex items-center gap-1 font-normal f font-dmSans text-16 hover:text-orange-500">
                  <Link to="/"> Pages</Link>
                  <FaAngleDown />
                </div>
                <span className="absolute w-14 h-0.5 bg-transparent  group-hover:bg-orange-500 transition duration-150 ease-linear top-[62px]"></span>
              </li>
              <li className="relative group">
                <div className="flex items-center gap-1 font-normal f font-dmSans text-16 hover:text-orange-500">
                  <Link to="/"> News</Link>
                  <FaAngleDown />
                </div>
                <span className="absolute w-14 h-0.5 bg-transparent  group-hover:bg-orange-500 transition duration-150 ease-linear top-[62px]"></span>
              </li>
              <li className="relative group">
                <div className="font-normal font-dmSans text-16 hover:text-orange-500">
                  <Link to="/">Contact</Link>
                </div>
                <span className="absolute w-14 h-0.5 bg-transparent  group-hover:bg-orange-500 transition duration-150 ease-linear top-[62px]"></span>
              </li>
            </ul>
            {/* icon part */}
            <Flex className={`gap-6 items-center hidden lg:flex`}>
              <div className="border-[#3661FC] border w-[56px] h-[56px] rounded-full bg-[#F4F4FF] flex items-center justify-center">
                <IoSearchSharp size={24} className="text-[#3661FC]" />
              </div>
              <div className="border-[#3661FC] border w-[56px] h-[56px] rounded-full flex items-center justify-center bg-[#F4F4FF]">
                <GiShoppingBag size={24} className="text-[#3661FC] " />
              </div>
              <button className="font-normal font-dmSans text-[18px] flex items-center gap-[10px] py-[15px] px-[30px] bg-[#3661FC] rounded-[50px] text-white ">
              Free Quote <FaArrowRight />
              </button>
            </Flex>

            {/* icon part */}
          </Flex>
        </nav>
      </Container>
    </section>
  );
};

export default Nav_bar;
