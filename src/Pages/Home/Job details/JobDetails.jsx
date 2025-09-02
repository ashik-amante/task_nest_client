import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Button/Button';

const JobDetails = () => {
    const job = useParams()
   
    console.log(job, 'from details page');
    return (
        <div>
            <h1>Detail of {job.id}</h1>

            <div className='flex gap-8'>
                <div className='w-2/3 min-h-screen bg-red-500 p-4'>
                        <div>
                            <p className='text-4xl '>Job banner dite hba </p>
                            <p>a Photo of who postedthe job </p>
                            <p>name and email of poster</p>
                            {/* dividerstart */}
                             <div className="divider"></div>
                             {/* divider end */}
                            <h1>Job title</h1>
                            <p>Job description</p>
                            <p>Skill need</p>
                        </div>
                </div>
                <div className='w-1/3 bg-blue-600 p-4'>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>date posted</h1>
                            <h1>date</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>postingDate</h1>
                            <h1>date</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>applicationDeadline</h1>
                            <h1>date</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>Job Title</h1>
                            <h1>title</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>Salary range</h1>
                            <h1>title</h1>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <span>icon</span>
                        <div>
                            <h1>Job Applicants Number </h1>
                            <h1>title</h1>
                        </div>
                    </div>
                    <Button text='Apply for job'></Button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;