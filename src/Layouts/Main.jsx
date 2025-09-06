import React from 'react';
import Navbar from '../Components/Shareed/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            {/* navbar */}
            <Navbar></Navbar>
            {/* outlet */}
            <Outlet></Outlet>
            {/* footer */}

        </div>
    );
};

export default Main;