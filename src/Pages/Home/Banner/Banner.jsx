import React from 'react';
import './banner.css'
import { FaSearch } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='cover space-y-10 flex flex-col justify-center'>
            <div className='content '>
                <h1 className='text-4xl text-white font-bold mb-3'>Find Job</h1>
                <p className='text-2xl text-gray-300'>Hire Experts or be hired in sales & marketing|</p>
                <button className='btn bg-transparent text-white text-xl mt-10'>What are you looking for?</button>
            </div>
            <div>
                <label className="input input-bordered flex items-center gap-2 w-1/2 h-14">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-10 w-10 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>



        </div>
    );
};

export default Banner;