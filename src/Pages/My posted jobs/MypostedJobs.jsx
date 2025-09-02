import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import formateDate from '../../Hooks/useFormateDate';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2'
import { FaTrash } from 'react-icons/fa';
import { RxUpdate } from "react-icons/rx";

const MypostedJobs = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: jobs = [], refetch } = useQuery({
        queryKey: ['jobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/jobs/${user?.email}`)
            return data
        }
    })

    // handle delete
    const handleDelete = async (id) => {

        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await axiosSecure.delete(`/jobs/delete/${id}`)
                    console.log(res.data);
                    refetch()
                    if (res.data.deleteCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your job has been deleted.",
                            icon: "success"
                        });
                    }

                }
            });
        } catch (error) {
            toast.error(error.message)
        }

    }
    console.log(jobs);
    return (
        <div>
            <h1 className='text-4xl text-center mt-10 mb-10'>My Posted Jobs </h1>
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
                            <th>Update</th>
                            <th>Action</th>
                            <th>View Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <th>{index + 1}</th>
                                <td>{job.title}</td>
                                <td>{formateDate(job.postingDate)}</td>
                                <td>{formateDate(job.deadline)}</td>
                                <td> $ {job.minPrice} - {job.maxPrice} </td>

                                {/* Update  */}
                                <td>
                                    <button className='text-xl text-yellow-500'>
                                        <RxUpdate />
                                    </button>
                                </td>
                                {/* delete */}
                                <td>
                                    <button className='text-xl text-red-500' onClick={() => handleDelete(job._id)}>
                                        <FaTrash></FaTrash>
                                    </button>
                                </td>


                                <td>
                                    <Link to={`/job-details/${job._id}`}>
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

export default MypostedJobs;