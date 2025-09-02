
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import axios from 'axios'
import useAuth from '../../Hooks/useAuth';
import { TbFidgetSpinner } from "react-icons/tb";
import toast from 'react-hot-toast';


const imageHosting_key = import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${imageHosting_key}`

const SignUp = () => {
    const navigate = useNavigate()

    const { user, loading, createUser, updateUserProfile,setLoading,googleSignIn } = useAuth()

    const {
        register,
        handleSubmit,

        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        setLoading(true)
        // upload image ad get data
        const imageFile = { image: data.image[0] }

        try {
            const response = await axios.post(image_hosting_Api, imageFile, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data.data.displayURL);
            // create  user
            if (response.data.success) {
                const result = await createUser(data.email,data.password)
                console.log(result.user);
                // update user
                await updateUserProfile(data.name, response.data.data.display_url)
                setLoading(false)
            }
        } catch (error) {
            console.log(error);
        }
    }

    // google sign in 
    const handleGoogleSignIn =async ()=>{
        setLoading(true)
        await googleSignIn()
        navigate('/')
        toast.success('SignUp success')
        setLoading(false)
    }


    return (

        <div className='flex justify-center items-center min-h-screen mt-10' >
            <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                <div className='mb-8 text-center'>
                    <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
                    <p className='text-sm text-gray-400'>Welcome to Task Nest</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate=''
                    action=''
                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                >
                    <div className='space-y-4'>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Your Name Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                            {errors.name?.type === "required" && <span className='text-red-600'>Name is resuired</span>}
                        </div>
                        <div>
                            <label htmlFor='image' className='block mb-2 text-sm'>
                                Select Image:
                            </label>
                            <input
                                {...register('image', { required: true })}

                                type='file'
                                id='image'
                                name='image'
                                accept='image/*'
                            />
                            {errors.image?.type === 'required' && <span className='text-red-600'> <br /> Please insert an image </span>}
                        </div>
                        <div>
                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>

                            <input
                                {...register('email', { required: true },)}
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />

                            {errors.email?.type === 'required' && <span className='text-red-600'>Email is  required</span>}


                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                {...register('password', { required: true })}
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                            />

                            {errors.password?.type === 'required' && <span className='text-red-600'>Password is  required</span>}

                            {errors.password?.type === 'minLength' && <span className='text-red-600'>Password must be 6 character or long</span>}
                        </div>
                    </div>

                    <div>
                        <button
                              disabled={loading}
                            type='submit'
                            className='bg-rose-500 w-full rounded-md py-3 text-white'
                        >
                            {loading ? <TbFidgetSpinner className='animate-spin m-auto' /> : 'continue'}

                        </button>
                    </div>
                </form>
                <div className='flex items-center pt-4 space-x-1'>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                    <p className='px-3 text-sm dark:text-gray-400'>
                        Signup with social accounts
                    </p>
                    <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                </div>

                <button
                      onClick={handleGoogleSignIn}
                      disabled={loading}
                    className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
                    <FcGoogle size={32} />

                    <p>Continue with Google</p>
                </button>
                <p className='px-6 text-sm text-center text-gray-400'>
                    Already have an account?{' '}
                    <Link
                        to='/signin'
                        className='hover:underline hover:text-rose-500 text-gray-600'
                    >
                        Login
                    </Link>
                    .
                </p>
            </div>
        </div>
    );
};

export default SignUp;