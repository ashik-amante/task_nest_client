import React, { useState } from 'react';
import useAllJob from '../../Hooks/useAllJob';
import Button from '../../Components/Button/Button';
import { data, Link } from 'react-router-dom';
import formateDate from '../../Hooks/useFormateDate';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import LoadingSpinner from '../../Components/Shareed/LoadingSpinner';


const AllJobs = () => {
    const [jobs,, isLoading] = useAllJob()
    console.log('all jobs ', jobs);
    const axiosSecure = useAxiosSecure()
    const [itemPerpage, setItemPerpage] = useState(8)
    const [currentPage, setCurrentPage] = useState(1)
    const [filter,setFilter] = useState('')
    const [sort,setSort] = useState('')
    const [search,setSearch] = useState('')
    const [searchText,setSearchText] = useState('')
    const [mode , setMode] = useState('')

    //count tottal job
    const {data: count = 0} = useQuery({
        queryKey:['count',filter,search,mode],
        queryFn: async ()=>{
            const {data} = await axiosSecure.get(`/jobs-count?filter=${filter}&search=${search}&mode=${mode}`)
            return data.count
        }
    })
    // pagination data 
     const {data: allJobs =[]} = useQuery({
        queryKey:['allJobs',currentPage,filter,itemPerpage,sort,search,mode],
        queryFn: async ()=>{
            const {data} = await axiosSecure.get(`/all-jobs?page=${currentPage}&size=${itemPerpage}&filter=${filter}&sort=${sort}&search=${search}&mode=${mode}`)
            return data
        }
    })
    console.log(allJobs);

    const totalPages = Math.ceil(count/itemPerpage)
    // handle pagination
    const handlePagination = (event)=>{
        console.log(event);
        setCurrentPage(event)
    }
    // reset
    const handleReset = ()=>{
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')
        setMode('')
        
    }
    // search
    const handleSubmit = e=>{
        e.preventDefault()
        
        setSearch(searchText)
    }

    console.log(search);

    const pages = [...Array(totalPages).keys().map(item => item + 1)]

    if(isLoading) return <LoadingSpinner></LoadingSpinner>
   
    return (
        <div className='container px-6 mt-20 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between mb-10'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                        onChange={e=>{
                            setFilter(e.target.value)
                            setCurrentPage(1)
                        }}
                            name='sort'
                            value={filter}
                            id='sort'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Programming Tech'>Programming & Tech</option>
                            <option value='Graphics Design'>Graphics Design</option>
                            <option value='Digital Marketing'>Digital Marketing</option>
                            <option value='Food Services'>Food Service</option>
                        </select>
                    </div>
                    <div>
                        <select
                        onChange={e=>{
                            setMode(e.target.value)
                            setCurrentPage(1)
                        }}
                            name='mode'
                            value={mode}

                            id='sort'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Workmode</option>
                            <option value='Onsite'>Onsite</option>
                            <option value='Remote'>Remote</option>   
                            <option value='Hybrid'>Hybrid</option>
                        </select>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                name='search'
                                onChange={e=>setSearchText(e.target.value)}
                                value={searchText}
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                        onChange={e=>{
                            setSort(e.target.value)
                            setCurrentPage(1)
                        }}
                            name='sort'
                            value={sort}
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button
                    onClick={handleReset}
                    className='btn'>Reset</button>
                </div>
                <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {/* {jobs.map(job => (
            <JobCard key={job._id} job={job} />
          ))} */}
                </div>

                <div className=''>
                    <h1 className='text-4xl text-center mt-10 mb-10'>All Jobs </h1>
                    <div className="overflow-x-auto">
                        <table className="table table-zebra ">
                            {/* head */}
                            <thead>
                                <tr>
                                   
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
                                    allJobs.map((job,) => <tr key={job._id}>
                                        
                                        <td>{job.title}</td>
                                        <td>{formateDate(job.postingDate)}</td>
                                        <td>{formateDate(job.deadline)}</td>
                                        <td>$ {job.minPrice} - {job.maxPrice}</td>
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



            </div>

            {/* previous button */}
            <div className='flex justify-center mt-12'>
                <button 
                disabled={ currentPage === 1}
                onClick={()=> handlePagination(currentPage -1)}
                className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>

                {pages.map(btnNum => (
                    <button
                        key={btnNum}
                        onClick={()=>handlePagination(btnNum)}
                        className={`hidden px-4 py-2 mx-1 ${currentPage === btnNum ? 'bg-blue-500' : undefined} transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}

                <button 
                disabled={ currentPage === totalPages}
                onClick={()=> handlePagination(currentPage +1)}
                className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>


    );
};

export default AllJobs;