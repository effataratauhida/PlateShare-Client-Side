import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Header/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#D5DEEF] min-h-screen'>
            <Navbar></Navbar>
            <main className='max-w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;