import React, { useState } from 'react';
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { TbShoppingCart } from "react-icons/tb";
import { BsBodyText, BsFillBriefcaseFill } from "react-icons/bs";
import { MdOutlineTour } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isJobMenuOpen, setIsJobMenuOpen] = useState(false);
    const navigate = useNavigate();
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleGoHome = () => {
        navigate('/'); 
    };
    return (
        <div className={`z-50 relative ${isSidebarOpen ? 'w-[300px] items-start px-6' : 'w-[87px] items-center'} bg-white border min-h-screen flex flex-col transition-all duration-300`}>
            <div className={`z-50 ${isSidebarOpen ? 'rotate-180' : 'rotate-0'} rounded-full transition duration-500 z-50 absolute top-6 right-[-0.8rem] bg-white`}>
                <button className='z-[100] hover:bg-gray-100 border w-6 h-6 rounded-full flex items-center justify-center' onClick={toggleSidebar}>
                    <LiaAngleRightSolid />
                </button>
            </div>
            <div className='py-5 cursor-pointer' onClick={handleGoHome} >
                <svg className='size-10' xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
                    <defs>
                        <linearGradient id="gradient1" x1="100%" x2="50%" y1="9.946%" y2="50%">
                            <stop offset="0%" stopColor="#59E39A"></stop>
                            <stop offset="100%" stopColor="#14B579"></stop>
                        </linearGradient>
                        <linearGradient id="gradient2" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#59E39A"></stop>
                            <stop offset="100%" stopColor="#14B579"></stop>
                        </linearGradient>
                        <linearGradient id="gradient3" x1="50%" x2="50%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#59E39A"></stop>
                            <stop offset="100%" stopColor="#14B579"></stop>
                        </linearGradient>
                    </defs>
                    <g fill="#14B579" fillRule="evenodd" stroke="none" strokeWidth="1">
                        <path fill="url(#gradient1)" d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"></path>
                        <path fill="url(#gradient2)" d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"></path>
                        <path fill="url(#gradient3)" d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"></path>
                    </g>
                </svg>
            </div>

            <div className='flex flex-col gap-2 w-full'>
                <div>
                    <h2 className={`text-gray-400 font-bold text-xs ${isSidebarOpen ? 'block' : 'hidden'}`}>OVERVIEW</h2>
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <button className={`relative flex ${isSidebarOpen ? 'flex-row items-center w-full' : 'flex-col items-center w-[80px]'} h-[58px] rounded hover:bg-gray-100`}>
                        <div className='absolute top-3 right-2 transform translate-x-1 text-xs translate-y-1 text-gray-600'>
                            <LiaAngleRightSolid />
                        </div>
                        <div className={` ${isSidebarOpen ? 'translate-x-[-90px]' : 'translate-x-0'} flex items-center justify-center flex-grow`}>
                            <FaFileInvoiceDollar className='text-xl text-gray-400' />
                        </div>
                        <p className={` ${isSidebarOpen ? 'translate-x-[-180px]' : 'translate-x-0'} text-gray-500 text-[11px] font-semibold`}>
                            Invoice
                        </p>
                    </button>

                    <button className={`relative flex ${isSidebarOpen ? 'flex-row items-center w-full' : 'flex-col items-center w-[80px]'} h-[58px] rounded hover:bg-gray-100`}>
                        <div className='absolute top-3 right-2 transform translate-x-1 text-xs translate-y-1 text-gray-600'>
                            <LiaAngleRightSolid />
                        </div>
                        <div className={` ${isSidebarOpen ? 'translate-x-[-90px]' : 'translate-x-0'} flex items-center justify-center flex-grow`}>
                            <TbShoppingCart className='text-xl text-gray-400' />
                        </div>
                        <p className={` ${isSidebarOpen ? 'translate-x-[-180px]' : 'translate-x-0'} text-gray-500 text-[11px] font-semibold`}>
                            Order
                        </p>
                    </button>

                    <button className={`relative flex ${isSidebarOpen ? 'flex-row items-center w-full' : 'flex-col items-center w-[80px]'} h-[58px] rounded hover:bg-gray-100`}>
                        <div className='absolute top-3 right-2 transform translate-x-1 text-xs translate-y-1 text-gray-600'>
                            <LiaAngleRightSolid />
                        </div>
                        <div className={` ${isSidebarOpen ? 'translate-x-[-90px]' : 'translate-x-0'} flex items-center justify-center flex-grow`}>
                            <BsBodyText className='text-xl text-gray-400' />
                        </div>
                        <p className={` ${isSidebarOpen ? 'translate-x-[-180px]' : 'translate-x-0'} text-gray-500 text-[11px] font-semibold`}>
                            Blog
                        </p>
                    </button>

                    <button
                        className={`relative flex ${isSidebarOpen ? 'flex-row items-center w-full' : 'flex-col items-center w-[80px]'} h-[58px] rounded hover:bg-gray-100`}
                        onMouseEnter={() => setIsJobMenuOpen(true)}
                        onMouseLeave={() => setIsJobMenuOpen(false)}
                    >
                        <div className='absolute top-3 right-2 transform translate-x-1 text-xs translate-y-1 text-gray-600'>
                            <LiaAngleRightSolid />
                        </div>
                        <div className={` ${isSidebarOpen ? 'translate-x-[-90px]' : 'translate-x-0'} flex items-center justify-center flex-grow`}>
                            <BsFillBriefcaseFill className='text-xl text-gray-400' />
                        </div>
                        <p className={` ${isSidebarOpen ? 'translate-x-[-180px]' : 'translate-x-0'} text-gray-500 text-[11px] font-semibold`}>
                            Job
                        </p>

                    </button>

                    <button className={`relative flex ${isSidebarOpen ? 'flex-row items-center w-full' : 'flex-col items-center w-[80px]'} h-[58px] rounded hover:bg-gray-100`}>
                        <div className='absolute top-3 right-2 transform translate-x-1 text-xs translate-y-1 text-gray-600'>
                            <LiaAngleRightSolid />
                        </div>
                        <div className={` ${isSidebarOpen ? 'translate-x-[-90px]' : 'translate-x-0'} flex items-center justify-center flex-grow`}>
                            <MdOutlineTour className='text-xl text-gray-400' />
                        </div>
                        <p className={` ${isSidebarOpen ? 'translate-x-[-180px]' : 'translate-x-0'} text-gray-500 text-[11px] font-semibold`}>
                            Tour
                        </p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideBar;


