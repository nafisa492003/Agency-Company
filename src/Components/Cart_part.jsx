import React, { useState } from "react";
import Container from "./Container";
import Flex from "../Components/Flex";
import cart_img from "../assets/cart_img.png";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
const Cart_part = () => {
  return (
    <section className="my-[120px]">
      <Container>
        <Flex className={`gap-[16px] flex-col lg:flex-row`}>
          <div className="w-full lg:w-9/12">
            {/* header */}
            <div className="py-6 px-5 bg-[#F4F4FF] hidden md:flex items-center justify-between">
              <h2 className="text-lg font-medium font-dmSans md:text-xl lg:text-2xl">
                Products
              </h2>
              <div className="flex items-center gap-4 md:gap-10 lg:gap-20">
                <h2 className="text-lg font-medium font-dmSans md:text-xl lg:text-2xl">
                  Price
                </h2>
                <h2 className="text-lg font-medium font-dmSans md:text-xl lg:text-2xl">
                  Quantity
                </h2>
                <h2 className="text-lg font-medium font-dmSans md:text-xl lg:text-2xl">
                  Total
                </h2>
                <h2 className="text-lg font-medium font-dmSans md:text-xl lg:text-2xl">
                  Action
                </h2>
              </div>
            </div>
            {/* header */}
            <div className="flex flex-col w-full gap-4 px-4 py-5  md:flex-row lg:px-10 lg:py-5 lg:gap-[170px] border border-[#F4F4FF]">
              <div className="flex items-center gap-5">
                <img
                  src={cart_img}
                  alt="Cart"
                  className="object-cover w-16 h-16"
                />
                <h4 className="text-center text-gray-600 font-dmSans text-14 lg:text-16 lg:text-left">
                  Calculator Images Scientific Clipart
                </h4>
              </div>
              <div className="flex items-center gap-4 ml-5 md:gap-12 lg:ml-0 lg:gap-[90px]">
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $130
                </h4>
                <div className="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-full lg:px-6 lg:py-3">
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FaPlus />
                  </button>
                  <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                    1
                  </h4>
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FiMinus />
                  </button>
                </div>
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $120
                </h4>
                <button
                  className="text-gray-600 transition-colors font-dmSans text-14 lg:text-16 hover:text-red-600"
                  aria-label="Remove item"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 px-4 py-5  md:flex-row lg:px-10 lg:py-5 lg:gap-[170px] border border-[#F4F4FF]">
              <div className="flex items-center gap-5">
                <img
                  src={cart_img}
                  alt="Cart"
                  className="object-cover w-16 h-16"
                />
                <h4 className="text-center text-gray-600 font-dmSans text-14 lg:text-16 lg:text-left">
                  Calculator Images Scientific Clipart
                </h4>
              </div>
              <div className="flex items-center gap-4 ml-5 md:gap-12 lg:ml-0 lg:gap-[90px]">
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $130
                </h4>
                <div className="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-full lg:px-6 lg:py-3">
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FaPlus />
                  </button>
                  <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                    1
                  </h4>
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FiMinus />
                  </button>
                </div>
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $120
                </h4>
                <button
                  className="text-gray-600 transition-colors font-dmSans text-14 lg:text-16 hover:text-red-600"
                  aria-label="Remove item"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 px-4 py-5  md:flex-row lg:px-10 lg:py-5 lg:gap-[170px] border border-[#F4F4FF]">
              <div className="flex items-center gap-5">
                <img
                  src={cart_img}
                  alt="Cart"
                  className="object-cover w-16 h-16"
                />
                <h4 className="text-center text-gray-600 font-dmSans text-14 lg:text-16 lg:text-left">
                  Calculator Images Scientific Clipart
                </h4>
              </div>
              <div className="flex items-center gap-4 ml-5 md:gap-12 lg:ml-0 lg:gap-[90px]">
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $130
                </h4>
                <div className="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-full lg:px-6 lg:py-3">
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FaPlus />
                  </button>
                  <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                    1
                  </h4>
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FiMinus />
                  </button>
                </div>
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $120
                </h4>
                <button
                  className="text-gray-600 transition-colors font-dmSans text-14 lg:text-16 hover:text-red-600"
                  aria-label="Remove item"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 px-4 py-5  md:flex-row lg:px-10 lg:py-5 lg:gap-[170px] border border-[#F4F4FF]">
              <div className="flex items-center gap-5">
                <img
                  src={cart_img}
                  alt="Cart"
                  className="object-cover w-16 h-16"
                />
                <h4 className="text-center text-gray-600 font-dmSans text-14 lg:text-16 lg:text-left">
                  Calculator Images Scientific Clipart
                </h4>
              </div>
              <div className="flex items-center gap-4 ml-5 md:gap-12 lg:ml-0 lg:gap-[90px]">
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $130
                </h4>
                <div className="flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-full lg:px-6 lg:py-3">
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FaPlus />
                  </button>
                  <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                    1
                  </h4>
                  <button className="text-gray-600 font-dmSans text-14 lg:text-16">
                    <FiMinus />
                  </button>
                </div>
                <h4 className="text-gray-600 font-dmSans text-14 lg:text-16">
                  $120
                </h4>
                <button
                  className="text-gray-600 transition-colors font-dmSans text-14 lg:text-16 hover:text-red-600"
                  aria-label="Remove item"
                >
                  <RxCross2 />
                </button>
              </div>
            </div>
            {/* input part */}
            <div className="mt-5 py-4 px-[24px] w-full md:w-[445px] relative border border-[#F4F4FF] rounded-full">
              <input
                type="text"
                placeholder="Discount Code"
                className="font-normal font-dmSans text-[14px] text-[#cecece] border-none"
              />
              <button className="py-5 px-[33px] bg-custom-gradient text-white font-dmSans font-medium text-[18px] rounded-full absolute right-[1px] top-[2px]">
                Apply
              </button>
            </div>
            {/* input part */}
          </div>
          <div className="w-full lg:w-3/12">
            <Flex className={`items-center gap-2 mb-4`}>
              <div className="py-5 px-5 md:px-[26px] bg-[#F4F4FF] rounded-full font-dmSans font-semibold text-[16px]">
                Continue Shopping
              </div>
              <div className="py-5 px-5 md:px-[26px] bg-[#F4F4FF] rounded-full font-dmSans font-semibold text-[16px]">
                Update Cart
              </div>
            </Flex>
            <div className="py-[25px] px-[30px] border border-[#F4F4FF] rounded-[20px]">
              <Flex className={`items-center w-full justify-between`}>
                <h2 className="font-dmSans font-semibold text-[16px]">
                  Subtotal
                </h2>
                <h2 className="font-dmSans font-semibold text-[16px] text-customBlue">
                  $670.00
                </h2>
              </Flex>
              <div className="w-[282px] h-[2px] bg-[#f4f4ff] mx-auto my-6"></div>
              <h2 className="font-dmSans font-normal text-[16px] mb-4">
                Shipping
              </h2>
              <Flex className={`items-center justify-between w-full mb-4`}>
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label className="font-dmSans font-normal text-[16px] text-[#696969]">
                    Free Shipping
                  </label>
                </div>
                <h3 className="font-dmSans font-normal text-[16px] text-[#696969]">
                  +$00.00
                </h3>
              </Flex>
              <Flex className={`items-center justify-between w-full mb-4`}>
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label className="font-dmSans font-normal text-[16px] text-[#696969]">
                    Free Shipping
                  </label>
                </div>
                <h3 className="font-dmSans font-normal text-[16px] text-[#696969]">
                  +$00.00
                </h3>
              </Flex>
              <Flex className={`items-center justify-between w-full mb-4`}>
                <div className="flex items-center gap-2">
                  <input type="radio" />
                  <label className="font-dmSans font-normal text-[16px] text-[#696969]">
                    Free Shipping
                  </label>
                </div>
                <h3 className="font-dmSans font-normal text-[16px] text-[#696969]">
                  +$00.00
                </h3>
              </Flex>
              <h2 className="font-dmSans font-normal text-[16px] mb-4">
                Calculate Shipping
              </h2>

              <form class="max-w-sm mx-auto">
                <select
                  id="countries"
                  className="border border-[#E9E9E9] text-black text-[14px] rounded-full block w-full p-2.5 font-normal font-dmSans py-5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              <input type="text" className="w-full text-[14px] font-dmSans font-normal text-[#a4a4a4] my-3 border border-[#E9E9E9] py-5 rounded-full" placeholder="Postcode / ZIP" />
              <button className="w-full font-normal font-dmSans text-[18px] py-4 px-[90px] rounded-full bg-[#F4F4FF]">Update Cart</button>
            <Flex className={`items-center w-full justify-between my-4`}>
                <h2 className="font-dmSans font-normal text-[16px]">
                Total
                </h2>
                <h2 className="font-dmSans font-normal text-[16px] text-customBlue">
                $700.00
                </h2>
              </Flex>
              <button className="py-4 px-[33px] bg-custom-gradient font-dmSans font-normal text-[18px] text-white w-full mx-auto rounded-full">Proceed to Checkout</button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Cart_part;
