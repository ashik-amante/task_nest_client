import React from 'react';
import formateDate from '../../Hooks/useFormateDate';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import Button from '../../Components/Button/Button';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../Components/Shareed/LoadingSpinner';

const AppliedJobs = () => {
     const { user,loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: appliedJobs = [], refetch,isLoading} = useQuery({
        queryKey: ['appliedJobs'],
        enabled: !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/myapplied-jobs/${user?.email}`)
            return data
        }
    })
    console.log(appliedJobs, 'from applied job');

   
    if(loading || isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-10'>Applied Jobs </h1>
            <h1 className='text-4xl text-red-500 text-center  mb-10'>reminder : Have to apply Filter system not actual data its a fake data dont confuse  </h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Job Title</th>
                            <th>Applied Date</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appliedJobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>              
                                <td>{formateDate(job.appliedDate)}</td>
                                <td>
                                    <Link to={`/job-details/${job.jobId}`}>
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

export default AppliedJobs;