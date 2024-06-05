import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import Flex from './Flex';

const ProgressBar = ({ progress , title }) => {
  return (
    <div>
      <Flex className={`justify-between mb-4`}>
        <h5 className='font-medium font-dmSans text-[16px] text-[#6B6161]'>{title}</h5>
      <span className="ml-2 font-medium font-dmSans text-[16px] text-[#6B6161]">{progress}%</span>
        </Flex>  
  
    <div className="relative w-full h-3 mb-4 rounded-full bg-sky-100">
      <div
        className={`absolute h-full rounded-full transition-all duration-300 ${progress < 30 ? 'bg-[#3661FC]' : progress < 70 ? 'bg-[#3661FC]' : 'bg-[#3661FC]'}`}
        style={{ width: `${progress}%` }}
      ></div>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
      >
        <MdArrowDropDown size={44} className="absolute bottom-0 text-blue-600" />
   
      
      </div>
    </div>
    </div>
  );
};

export default ProgressBar;
