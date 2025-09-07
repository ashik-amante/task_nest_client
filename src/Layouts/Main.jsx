import React from 'react';
import Navbar from '../Components/Shareed/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* navbar */}
            <div className=''>
                <Navbar></Navbar>
            </div>
            {/* outlet */}
            <div className='pt-16'>
                <Outlet></Outlet>
            </div>
            {/* footer */}
            <Footer></Footer>

        </div>
    );
};

export default Main;