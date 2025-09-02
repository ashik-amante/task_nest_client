import React from 'react';
import useAllJob from '../../Hooks/useAllJob';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import formateDate from '../../Hooks/useFormateDate';

const AllJobs = () => {
    const [jobs,] = useAllJob()
    // const {title,buyerEmail,buyerName,deadline,category,postingDate,jobType,minPrice,maxPrice,description,location,totalApplicant,bannnerImage,_id} = jobs
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-10'>All Jobs </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Job Title</th>
                            <th>Job Posting Date</th>
                            <th>Application Deadline</th>
                            <th>Salary range</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    //         <p>{formateDate(postingDate)}</p>
                    // <p>{formateDate(deadline)}</p>
                            jobs.map((job, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{formateDate(job.postingDate)}</td>
                                <td>{formateDate(job.deadline)}</td>
                                <td>$ {job.minPrice} - {job.maxPrice}</td>
                                <td>
                                    <Link to={`/job-details/${job.id}`}>
                                        <Button text='Details'></Button>
                                    </Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllJobs;