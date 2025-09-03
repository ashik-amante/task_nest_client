
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller, useForm } from "react-hook-form"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Button from "../../Components/Button/Button";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const navigate = useNavigate()
    console.log(user);

    const { register, handleSubmit, control, formState: { errors } } = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        const jobData = {
            title: data.title,
            buyerEmail: user?.email,
            buyerName: user?.displayName,
            postingDate: new Date(),
            deadline: data.deadline,
            category: data.category,
            jobType:data.jobType,
            minPrice: parseInt(data.minPrice),
            maxPrice: parseInt(data.maxPrice),
            description:data.description,
            location:data.location,
            workMode: data.workMode,
            totalApplicant: parseInt('0'),
            bannnerImage: ''
        }
        try {
            const res = await axiosSecure.post('/jobs', jobData)
            console.log(res.data);
            toast.success('Job Added Successfully')
            navigate('/my-posted-jobs')

        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Post a Job
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
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                            <Controller
                                {...register('deadline')}
                                name="deadline"
                                defaultValue={new Date()}
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
                            id='description'
                        ></textarea>
                    </div>
                    <div className='  mt-6'>
                        {/* <button type="submit" className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                            Add Job
                        </button> */}
                        <Button  text='Add to Job'></Button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default AddJob