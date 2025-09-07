import React from 'react';
import { Link } from 'react-router-dom';
import formateDate from '../../../Hooks/useFormateDate';

const JobCard = ({job}) => {
    const {title,buyer,deadline,postingDate,minPrice,maxPrice,totalApplicant,bannnerImage,_id,workMode} = job
    // console.log('job card',job);
    return (
        <div>
            <div className="card bg-base-100 h-96 shadow-xl hover:scale-105 transition-transform duration-500">
                <figure>
                    <img
                        className='w-80 rounded-2xl'
                        src={bannnerImage}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    {/* name image */}
                    <h2 className="card-title">
                        <p>{buyer.name}</p>
                        <img className='w-10 h-10 ml-2 rounded-full' src={buyer.image} alt="" />

                    </h2>
                    {/* title */}
                    <h2 className="card-title gap-2">
                        {title}
                        <div className="badge badge-secondary ">{workMode}</div>
                    </h2>
                    {/* date */}
                    <p>Posted Date: {formateDate(postingDate)}</p>
                    <p>Deadline: <span className='font-semibold text-red-500 ml-2'>{formateDate(deadline)}</span></p>

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