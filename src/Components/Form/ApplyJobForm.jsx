
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAllJob from '../../Hooks/useAllJob';
import { useNavigate } from 'react-router-dom';

const ApplyJobForm = ({closeModal,job}) => {
    const {user} = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()
    const [jobs,refetch] = useAllJob()
    // job coming from props
    const {_id} = job

    const previousJobData = jobs.filter(item=> item._id === _id)
    console.log(previousJobData,'single job');

     const {
            register,
            handleSubmit,
    
            formState: { errors },
        } = useForm()

        const onSubmit  =async data =>{
            // console.log(data);
            const applyData = {
                name:data.name,
                email: data.email,
                resume: data.resume,
                description: data.description,
                buyerEmail:job.buyerEmail,
            }

            try{
                // added applicant info to database 
                const res = await axiosSecure.post('/applications',applyData)
                console.log(res.data);
                toast.success('Applied successfully')
               

                if(res.data.insertedId){
                    // update the previous job applicant number 
                    
                    const count = parseInt( previousJobData.map(item=>item.totalApplicant))
                    console.log('count', count);
                    const updatedJobData = {
                        ...previousJobData,
                        totalApplicant: parseInt(count+1),
                        applicantEmail:data.email,
                    }
                    console.log(updatedJobData.totalApplicant,'updated job data');
                    
                    // removing _id from the final data
                    const {_id, ...finalData} = updatedJobData
                    const response = await axiosSecure.patch(`/jobs/update/${job._id}`, finalData)
                    navigate('/applied-jobs')
                    refetch()
                    // queryClient.setQueryData(['applyJobs',_id], updatedJobData)
                    console.log(response.data);
                    toast.success('Total Applicant updated')
                    closeModal()
                }
            }catch(error){
                toast.error(error.message)
                console.log(error.message);
            }
        }
    return (
        <div className='w-full min-h-[calc(100vh-600px)] flex flex-col  text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' p-4 space-y-3'>
                    <div className='space-y-1 text-sm w-full'>
                        <label htmlFor='location' className='block text-gray-600'>
                            Full Name
                        </label>
                        <input
                            {...register('name',{required:true})}
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            defaultValue={user?.displayName}
                            id='name'
                            type='text'
                            placeholder='Name'
                            
                        />
                        {errors.name?.type === 'required' && <p className='text-red-500'>Name is resuired</p> }
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Email Address
                        </label>
                        <input
                        {...register('email',{required:true})}
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='email'
                            defaultValue={user.email}
                            id='email'
                            type='email'
                            placeholder='Email '
                            required
                        />
                    </div>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='title' className='block text-gray-600'>
                            Resume Link
                        </label>
                        <input
                        {...register('resume',{required:true})}
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='resume'
                            id='resume'
                            type='text'
                            placeholder='resume link '
                            
                        />
                        {errors.resume?.type === 'required' && <p className='text-red-500'>Resume is resuired</p> }
                    </div>
                 

                    <div className='space-y-1 text-sm w-full'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Message
                        </label>

                        <textarea
                        {...register('description',{required:true})}
                            id='description'
                            type='text'
                            placeholder='Your Cover letter/ message sent to employer'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='description'
                        ></textarea>
                         {errors.description?.type === 'required' && <p className='text-red-500'>Description is resuired</p> }
                    </div>
                </div>

                <button
                    // onClick={closeModal}
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Apply
                </button>
            </form>
        </div>
    );
};

export default ApplyJobForm;