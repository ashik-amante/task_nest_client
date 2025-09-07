import React from 'react';
import { useLoaderData, } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { FaCalendar, FaDollarSign, FaUsers } from 'react-icons/fa';
import formateDate from '../../../Hooks/useFormateDate';
import ApplyForJobModal from '../../../Components/Modal/ApplyForJobModal';
import { useState } from 'react';
import { FcExpired } from 'react-icons/fc';
import { MdTitle } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

import { FaLocationDot } from "react-icons/fa6";
import useAuth from '../../../Hooks/useAuth';


const JobDetails = () => {
    const [isOpen, setIsOpen] = useState(false)
    const job = useLoaderData()
    const { user } = useAuth()
    const { title, buyer, bannnerImage, deadline, category, postingDate, minPrice, maxPrice, description, location, totalApplicant, _id } = job
    console.log(job, 'target');

    const closeModal = () => {
        setIsOpen(false)
    }

    // console.log(job, 'from details page');
    return (
        <div className='flex flex-col  md:flex-row md:gap-10 bg-gray-200 text-black'>

            <div className='flex  items-center p-3 w-full  md:w-[60%] border-2 my-12'>
                <section className=' p-2 md:p-6 w-full h-full mx-auto bg-white rounded-md shadow-md space-y-4 '>
                    <h2 className='text-2xl text-center mb-10 font-semibold text-gray-700 capitalize '>
                        Job Details
                    </h2>

                    <div className='flex justify-between mb-3'>
                        <img className=' rounded w-full h-72' src={bannnerImage} alt="image" />
                    </div>

                    <div className='flex justify-between mb-3'>
                        <div className='space-y-1'>
                            <p className='text-center font-semibold mb-2'>Buyer Info:</p>
                            <p>Email: {buyer.email} </p>
                            <p>Name: {buyer.name} </p>
                        </div>
                        <img className='h-16 w-16 rounded-full' src={buyer.image} alt="image" />
                    </div>
                    <div className="border-2 border-gray-400 "></div>

                    <div className='space-y-1'>
                        <p className='text-center font-semibold'>Job Description:</p>
                        <p>{description}</p>
                    </div>

                    <div className='space-y-'>
                        <p className='text-center font-semibold'>Skill Needed:</p>
                        <div className='px-10'>
                            <li>ttem11</li>
                            <li>ttem21</li>
                            <li>ttem31</li>
                            <li>ttem41</li>
                            <li>ttem51</li>
                        </div>
                    </div>

                </section>
            </div>
            {/* Right side  */}
            <div className='flex flex-col md:flex-row justify-center px-3 w-full md:w-[40%] items-center min-h-screen my-12 mr-12'>
                <section className=' p-2 md:p-4 w-full min-h-screen mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-2xl text-center mb-10 font-semibold text-gray-700 capitalize '>
                        Job Overview
                    </h2>

                    <div className='space-y-8 px-6 '>

                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 h-14'><MdTitle /></span>
                            <div>
                                <h1 className='font-semibold'>Job Title:</h1>
                                <h1 className='text-gray-600'>{title}</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 text-2xl h-14'><BiCategory />
                            </span>
                            <div>
                                <h1 className='font-semibold'>Category</h1>
                                <h1 className='text-gray-600'>{category}</h1>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 text-2xl h-14'><FcExpired></FcExpired></span>
                            <div>
                                <h1 className='font-semibold'>Expiration date:</h1>
                                <h1 className='text-gray-600'>{formateDate(deadline)}</h1>
                                <p>
                                    {new Date(deadline) < new Date() && <span className='text-red-500 font-bold'>Expired</span>}
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 text-2xl h-14'><FaDollarSign></FaDollarSign></span>
                            <div>
                                <h1 className='font-semibold'>Salary Range:</h1>
                                <h1 className='text-gray-600'> $ {minPrice} - {maxPrice}</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 h-14'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Date Posted:</h1>
                                <h1 className='text-gray-600'>{formateDate(postingDate)}</h1>
                            </div>
                        </div>

                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 h-14 text-2xl '><FaLocationDot /></span>
                            <div>
                                <h1 className='font-semibold'>Location:</h1>
                                <h1 className='text-gray-600'>{location}</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600 text-2xl h-14'><FaUsers></FaUsers></span>
                            <div>
                                <h1 className='font-semibold'>Total Applicant</h1>
                                <h1 className='text-gray-600'>{totalApplicant}</h1>
                            </div>
                        </div>

                        {/* <Button onclick={()=>handleClick(title)} text='Apply Now'></Button> */}
                        <button

                            onClick={() => setIsOpen(true)}
                            disabled={user?.email === buyer.email || new Date(deadline) < new Date()}
                            className='relative btn group w-full bg-green-600'>
                            <span className='absolute origin-left scale-x-0 inset-0 group-hover:scale-x-100 transition-transform duration-500 selection: bg-yelow-500'></span>
                            <span className='relative z-10 text-white '>
                                { new Date(deadline) < new Date() ? 'Deadline Expired': 'Apply'}
                            </span>
                        </button>

                        <ApplyForJobModal
                            job={job}
                            isOpen={isOpen}
                            closeModal={closeModal}></ApplyForJobModal>
                    </div>


                </section>
            </div>

        </div>
    );
};

export default JobDetails;
