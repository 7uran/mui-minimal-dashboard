import React from 'react';
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='fixed top-0 h-[72px] flex items-center px-[40px] translate-x-[87px] w-full backdrop-blur-md bg-white/60 z-40'>
      <div className='flex justify-between items-center w-full'>
        <div className='flex items-center gap-2'>
          <img className='size-6' alt='logo' src='https://pub-c5e31b5cdafb419fb247a8ac2e78df7a.r2.dev/public/assets/icons/workspaces/logo-1.webp' />
          <h3 className='font-semibold text-sm'>Team 1</h3>
          <div className='bg-[#EDEFF1] font-semibold text-xs text-gray-500 px-2 py-[3px] rounded-md'>
            <p>Free</p>
          </div>
          <div className='flex flex-col text-[8px] text-gray-500'>
            <FaAngleUp />
            <FaAngleDown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
