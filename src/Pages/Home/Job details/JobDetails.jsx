import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';
import { FaCalendar } from 'react-icons/fa';

const JobDetails = () => {
    const job = useParams()

    console.log(job, 'from details page');
    return (
        <div className='flex gap-10 bg-gray-200 text-black'>

            <div className='flex  items-center w-[60%] border-2 my-12'>
                <section className=' p-2 md:p-6 w-full h-full mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-2xl text-center mb-10 font-semibold text-gray-700 capitalize '>
                        Job Details
                    </h2>

                    <div className='flex justify-between mb-3'>
                        <p>Posted By: </p>
                        <img className='h-10 w-10' src="" alt="image" />
                    </div>
                    <div className="border-2 border-gray-400 "></div>

                    <h1>Description</h1>
                    <p>[dotenv@17.2.1] injecting env (2) from .env -- tip: 📡 auto-backup env with Radar: https://dotenvx.com/radar
                        Ser running on port 5000
                        [nodemon] restarting due to changes</p>


                    <h2>Skill Needed</h2>
                    <li>ttem11</li>
                    <li>ttem21</li>
                    <li>ttem31</li>
                    <li>ttem41</li>
                    <li>ttem51</li>

                </section>
            </div>
            {/* Right side  */}
            <div className='flex justify-center w-[40%] items-center min-h-screen my-12'>
                <section className=' p-2 md:p-6 w-full min-h-screen mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-2xl text-center mb-10 font-semibold text-gray-700 capitalize '>
                        Job Overview
                    </h2>

                    <div className='space-y-8 px-10  '>

                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Date Posted:</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Expiration date:</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Location:</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Job Title:</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Salary Range:</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Category</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>
                        <div className='flex gap-10'>
                            <span className='bg-green-100 p-3 rounded text-green-600'><FaCalendar></FaCalendar></span>
                            <div>
                                <h1 className='font-semibold'>Total Applicant</h1>
                                <h1 className='text-gray-600'>Posted 6 years ago</h1>
                            </div>
                        </div>

                        <Button text='Apply Now'></Button>


                    </div>


                </section>
            </div>

        </div>
    );
};

export default JobDetails;







//   <div className='flex gap-8 bg-gray-400'>
//                 <div className='w-2/3 min-h-screen p-4'>
//                         <div className='border-red-500 border-2 h-full rounded-lg bg-gray-50 p-4'>
//                             <p className='text-4xl '>Job banner dite hba </p>
//                             <p>a Photo of who postedthe job </p>
//                             <p>name and email of poster</p>
//                             {/* dividerstart */}
//                              <div className="divider"></div>
//                              {/* divider end */}
//                             <h1>Job title</h1>
//                             <p>Job description</p>
//                             <p>Skill need</p>
//                         </div>
//                 </div>
//                 <div className='w-1/3 bg-blue-600 p-4'>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>date posted</h1>
//                             <h1>date</h1>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>postingDate</h1>
//                             <h1>date</h1>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>applicationDeadline</h1>
//                             <h1>date</h1>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>Job Title</h1>
//                             <h1>title</h1>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>Salary range</h1>
//                             <h1>title</h1>
//                         </div>
//                     </div>
//                     <div className='flex gap-4'>
//                         <span>icon</span>
//                         <div>
//                             <h1>Job Applicants Number </h1>
//                             <h1>title</h1>
//                         </div>
//                     </div>
//                     <Button text='Apply for job'></Button>
//                 </div>
//             </div>