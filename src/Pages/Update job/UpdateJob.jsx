import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Button from '../../Components/Button/Button';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import { TbFidgetSpinner } from 'react-icons/tb';

const imageHosting_key = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${imageHosting_key}`

const UpdateJob = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const navigate = useNavigate()
    const prevJob = useLoaderData()
    const [processing,setProcessing] = useState(false)
    // console.log(prevJob);
    // console.log(user);

    const { register, handleSubmit, control, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        setProcessing(true)
        let bannerImage = prevJob.bannerImage
        if(data.image && data.image.length > 0){
            const imageFile = new FormData()
            imageFile.append('image', data.image[0])
            try{
                const response = await axios.post(image_hosting_Api, imageFile, {
                    headers: {
                        "Content-Type": 'multipart/form-data'
                    }
                })
                bannerImage = response.data.data.display_url
            }catch(error){
                console.log(error);
                setProcessing(false)
            }
        }

        console.log(data)
        const updatedJob = {
            ...data,
            bannnerImage: bannerImage
        }
        // delete updatedJob._id
        // const {_id, ...finalJobData} = updatedJob
        try {
            const res = await axiosSecure.patch(`/jobs/update/${prevJob._id}`, updatedJob)
            console.log(res.data);
            setProcessing(false)
            toast.success('Job Updated Successfully')
            navigate('/my-posted-jobs')

        } catch (error) {
            console.log(error);
            toast.error('job update failed')
            setProcessing(false)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-2xl text-center mb-10 font-semibold text-gray-700 capitalize '>
                    Update Job
                </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='job_title'>
                                Job Title
                            </label>
                            <input
                                {...register("title", { required: true })}
                                id='title'
                                defaultValue={prevJob.title}
                                name='title'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                            {errors.title?.type === 'required' && <span className="text-red-600">Job title is required</span>}
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='emailAddress'>
                                Email Address
                            </label>
                            <input
                                {...register("email", { required: true })}
                                defaultValue={user?.email}
                                disabled
                                id='emailAddress'
                                
                                type='email'
                                name='email'

                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                         {/* image */}
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                {...register('image',  )}

                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                           
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <Controller
                                {...register('deadline')}
                                name="deadline"
                                 defaultValue={new Date(prevJob.deadline)}
                                control={control}
                                render={({ field }) => (
                                    <DatePicker
                                        className="border p-2 rounded gap-2"
                                        showIcon
                                        selected={field.value}
                                        onChange={(date) => field.onChange(date)}
                                    />
                                )}
                            >

                            </Controller>
                        </div>
                        {/* category */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='category'>
                                Category
                            </label>
                            <select
                                {...register("category", { required: true })}
                                name='category'
                                id='category'
                                defaultValue={prevJob.category}
                                className='border p-2 rounded-md'
                            >
                                <option value='Programming & Tech'>Programming & Tech</option>
                                <option value='Graphics & Design'>Graphics & Design</option>
                                <option value='Digital Marketing'>Digital Marketing</option>
                                <option value='Food Services'>Food Services</option>
                            </select>
                        </div>
                        {/* job type */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='jobType'>
                                Job Type
                            </label>
                            <select
                                {...register("jobType", { required: true })}
                                name='jobType'
                                id='jobType'
                                defaultValue={prevJob.jobType}
                                className='border p-2 rounded-md'
                            >
                                <option value='Full Time'>Full Time</option>
                                <option value='Part Time'>Part Time</option>
                                <option value='Intern'>Intern</option>
                            </select>
                        </div>
                        {/* work mode */}
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='jobType'>
                                Work Mode
                            </label>
                            <select
                                {...register("workMode", { required: true })}
                                name='workMode'
                                defaultValue={prevJob.workMode}
                                id='workMode'
                                className='border p-2 rounded-md'
                            >
                                <option value='Onsite'>Onsite</option>
                                <option value='Remote'>Remote</option>
                                <option value='Hybrid'>Hybrid</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='min_price'>
                                Minimum Price
                            </label>
                            <input
                                {...register("minPrice", { required: true })}
                                id='minPrice'
                                name='minPrice'
                                defaultValue={prevJob.minPrice}
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='max_price'>
                                Maximum Price
                            </label>
                            <input
                                {...register("maxPrice", { required: true })}
                                id='maxPrice'
                                name='maxPrice'
                                 defaultValue={prevJob.maxPrice}
                                type='number'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div>
                            <label className='text-gray-700 ' htmlFor='location'>
                                Location
                            </label>
                            <input
                                {...register("location", { required: true })}
                                id='location'
                                name='location'
                                 defaultValue={prevJob.location}
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 mt-4'>
                        <label className='text-gray-700 ' htmlFor='description'>
                            Description
                        </label>
                        <textarea
                            {...register("description", { required: true })}
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            name='description'
                             defaultValue={prevJob.description}
                            id='description'
                        ></textarea>
                    </div>
                    <div className='  mt-6'>
                        <button 
                        type="submit" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 w-full'>
                                   {processing ? <TbFidgetSpinner className="animate-spin m-auto" /> : 'Update Job'}
                                </button>
                        
                    </div>
                </form>
            </section>
        </div>
    );
};

export default UpdateJob;