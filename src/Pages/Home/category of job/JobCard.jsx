import React from 'react';
import { Link } from 'react-router-dom';
import formateDate from '../../../Hooks/useFormateDate';

const JobCard = ({job}) => {
    const {title,buyerEmail,buyerName,deadline,category,postingDate,jobType,minPrice,maxPrice,description,location,totalApplicant,bannnerImage,_id,workMode} = job
    // console.log('job card',job);
    return (
        <div>
            <div className="card bg-base-100 h-96 shadow-xl">
                <figure>
                    <img
                        className='w-80 rounded'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* name image */}
                    <h2 className="card-title">
                        <p>{buyerName}</p>
                        <img className='w-10 h-10 ml-2 rounded-full' src="https://i.ibb.co.com/nqkfNdbh/photo.jpg" alt="" />

                    </h2>
                    {/* title */}
                    <h2 className="card-title gap-2">
                        {title}
                        <div className="badge badge-secondary ">{workMode}</div>
                    </h2>
                    {/* date */}
                    <p>{formateDate(postingDate)}</p>
                    <p>{formateDate(deadline)}</p>

                    <div className="card-actions ">
                        <div className="badge badge-outline">$ {minPrice} - {maxPrice}</div>
                        <div className="badge badge-outline">Applied People : {totalApplicant}</div>
                    </div>
                    <div className="card-actions mt-3 ">
                        <Link 
                        to={`/job-details/${_id}`}
                        className="btn  w-full relative group hover:text-white overflow-hidden">
                            <span className='absolute inset-0  scale-x-0 group-hover:scale-x-100 origin-left transform transition-all bg-green-600 hover:text-blue-400 duration-700 '></span>

                            <span className='relative z-10'>View Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCard;