import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Outlet } from 'react-router-dom';
import SideBar from '../../components/sidebar';

const Layout = () => {
    return (
        <div className='flex min-h-screen'>
            <div className='fixed z-50'>
                <SideBar />
            </div>
            <div className='flex-1 flex flex-col  transition-all duration-300'>
                <Header />
                <main className='flex-1 overflow-y-auto'>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
