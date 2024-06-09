import React from 'react'
import Flex from '../Components/Flex'
import about_banner from '../assets/about_banner.png'
import Cart_part from '../Components/Cart_part'
const Cart = () => {
  return (
   <section>
    {/* banner */}
<div style={{ backgroundImage: `url(${about_banner})` }}
    className="object-contain bg-no-repeat pt-[190px] lg:pt-[310px] pb-[150px]">
       <Flex className={`items-center justify-center`}>
        <div>
        <h1 className='font-bold font-dmSans text-[46px] text-white'>Your Cart</h1>
        <h3 className='font-normal font-dmSans text-[18px] text-white text-center'>Home   -   <span className='text-orange-400'>Your Cart</span></h3>
        </div>
       </Flex>
      </div>
       {/* banner */}
       <Cart_part/>
   </section>
  )
}

export default Cart