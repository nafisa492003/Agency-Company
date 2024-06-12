import React from "react";
import Container from "./Container";
import Flex from "./Flex";
const Check_out_part = () => {
  return (
    <section className="my-20  md:my-[120px]">
      <Container>
        <div class="flex items-center bg-[#F4F4FF] py-5 px-[60px] border-t-2 border-customBlue mb-12 md:mb-[120px]">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="link-checkbox"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-dmSans"
          >
            Have a coupon?{" "}
            <a
              href="#"
              class="text-blue-600 dark:text-blue-500 hover:underline font-dmSans"
            >
              {" "}
              Click here to enter your code
            </a>
          </label>
        </div>

        <Flex className={`flex-col lg:flex-row gap-[146px]`}>
          <div className="w-full lg:w-6/12 bg-[#F4F4FF] p-5 lg:p-[60px]">
            <h1 className="font-bold text-[26px] font-dmSans mb-10">
              Billing Details
            </h1>
            <Flex className={`items-center flex-col lg:flex-row gap-5 mb-5`}>
              <input
                type="text"
                className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full lg:w-[284px]"
                placeholder="First Name*"
              />
              <input
                type="text"
                className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full lg:w-[284px]"
                placeholder="Last Name*"
              />
            </Flex>
            <Flex className={`items-center flex-col lg:flex-row gap-5 mb-5`}>
              <input
                type="text"
                className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full lg:w-[284px]"
                placeholder="Email Address*"
              />
              <input
                type="text"
                className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full lg:w-[284px]"
                placeholder="Phone Number*"
              />
            </Flex>

            <form class="w-full relative mb-5">
              <label
                for="large"
                class="font-dmSans font-normal text-[14px] text-[#a4a4a4] absolute left-5 top-[4px]"
              >
                Country*
              </label>
              <select
                id="large"
                class="block w-full pt-[28px] pb-2 px-5 text-base text-gray-900 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white border-none font-dmSans font-normal"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
            <input
              type="text"
              className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full mb-5"
              placeholder="Address*"
            />
            <Flex className={`items-center flex-col lg:flex-row gap-5 mb-5`}>
              <form class=" w-full lg:w-[284px] relative">
                <label
                  for="city"
                  class="font-dmSans font-normal text-[14px] text-[#a4a4a4] absolute left-5 top-[4px]"
                >
                  Town / City*
                </label>
                <select
                  id="city"
                  class="block w-full pt-[28px] pb-2 px-5 text-base text-gray-900 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white border-none font-dmSans font-normal"
                >
                  <option selected>Manhattan</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </form>
              <input
                type="text"
                className="py-4 px-[25px] bg-white font-dmSans font-normal text-[#a4a4a4] rounded-full border-none w-full lg:w-[284px]"
                placeholder="Postcode / ZIP*"
              />
            </Flex>
            <div class="flex items-center  my-[40px]">
              <input
                id="checkbox"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="checkbox"
                class="ms-2  text-[#696969] font-dmSans font-normal text-[16px]"
              >
                Create an account?
              </label>
            </div>
            <h2 className="font-bold font-dmSans text-[20px] mb-5">
              Shipping Address
            </h2>
            <div class="flex items-center  my-[40px]">
              <input
                id="check"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="check"
                class="ms-2  text-[#696969] font-dmSans font-normal text-[16px]"
              >
                Ship to a different address
              </label>
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="font-dmSans font-bold text-[26px] mb-8">
              Order Summary
            </h1>
            <div className="px-10 py-[30px] border border-[#E0E0E0] rounded-[20px]">
              <Flex className={`items-center justify-between`}>
                <h1 className="font-dmSans font-semibold text-[20px]">
                  Product
                </h1>
                <h1 className="font-dmSans font-semibold text-[20px]">Total</h1>
              </Flex>
              <div className="w-full h-[2px] bg-[#f4f4ff] mx-auto my-6"></div>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Orca is an armchair
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  $120
                </h3>
              </Flex>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Venot Spanish Organic wood
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  $280
                </h3>
              </Flex>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Eichholtz Sofa Emiliot
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  $160
                </h3>
              </Flex>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Envole Double Pendant Light
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  $110
                </h3>
              </Flex>
              <div className="w-full h-[2px] bg-[#f4f4ff] mx-auto my-6"></div>
              <Flex className={`items-center justify-between`}>
                <h1 className="font-dmSans font-semibold text-[20px]">
                  Subtotal
                </h1>
                <h1 className="font-dmSans font-semibold text-[20px]">
                  $670.00
                </h1>
              </Flex>
              <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161] mb-3">
                Shipping
              </h3>

              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Free Shipping
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  +$00.00
                </h3>
              </Flex>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Flat Rate
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  +$10.00
                </h3>
              </Flex>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  Local Delivery
                </h3>
                <h3 className="font-dmSans font-normal text-[14px] text-[#6B6161]">
                  +$20.00
                </h3>
              </Flex>
              <div className="w-full h-[2px] bg-[#f4f4ff] mx-auto my-6"></div>
              <Flex className={`items-center justify-between mb-3`}>
                <h3 className="font-dmSans font-semibold text-[14px] text-[#6B6161]">
                  Total
                </h3>
                <h3 className="font-dmSans font-semibold text-[14px] text-customBlue">
                  $700.00
                </h3>
              </Flex>
              <div className="px-5 py-4 rounded-[20px] bg-[#F4F4FF]">
                <Flex className="items-center gap-4">
                  <input type="radio" id="direct" />
                  <label
                    htmlFor="direct"
                    className="font-dmSans font-medium text-[16px]"
                  >
                    Direct Bank Transfer
                  </label>
                </Flex>
                <p className="font-dmSans font-normal text-[16px] text-[#6B6161] lg:w-[440px] w-full my-4">
                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                </p>
              </div>
              <Flex className="items-center gap-4 my-5">
                  <input type="radio" id="direct" />
                  <label
                    htmlFor="direct"
                    className="font-dmSans font-medium text-[16px]"
                  >
                   Cash on Delivery
                  </label>
                </Flex>
                <Flex className="items-center gap-4 mb-6">
                  <input type="radio" id="direct" />
                  <label
                    htmlFor="direct"
                    className="font-dmSans font-medium text-[16px]"
                  >
                   Credit/Debit Cards or Paypal
                  </label>
                </Flex>
                <button className="py-4 px-[33px] bg-custom-gradient font-dmSans font-normal text-[18px] text-white w-full mx-auto rounded-full">Place Order Now</button>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Check_out_part;
