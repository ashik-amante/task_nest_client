import React from 'react';
import image1 from '../../assets/image/jwt.png'


const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mt-10 mb-10'>Welcome to my blog page</h1>

            <div className='grid grid-cols-3 gap-10'>
                <div className='space-y-4 border-2 p-4'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-3xl'>Web Tech</h2>
                        <h2 className='text-4xl font-semibold'> What is an access token and refresh token? How do they work and where should we store them on the client  side?</h2>
                        <p>ওয়েব অ্যাপ্লিকেশন বা মোবাইল অ্যাপে Authentication (লগইন/লগআউট সিস্টেম) তৈরি করতে গেলে আমরা প্রায়শই JWT (JSON Web Token) ব্যবহার করি। এখানে মূলত দুটি জিনিস গুরুত্বপূর্ণ:

                            Access Token
                            Refresh Token
                            চলুন বিস্তারিত দেখি।
                            1️⃣ Access Token কী?


                        </p>
                    </div>
                    <div className='flex gap-10'>
                        <div className=''>
                            <p className='text-xl font-semibold'>Chat Gpt </p>
                            <p> 7th September </p>
                        </div>
                        <a href="">read more</a>
                    </div>
                </div>
                <div className='space-y-4 border-2 p-4'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-3xl'>Web Tech</h2>
                        <h2 className='text-4xl font-semibold'> What is an access token and refresh token? How do they work and where should we store them on the client  side?</h2>
                        <p>ওয়েব অ্যাপ্লিকেশন বা মোবাইল অ্যাপে Authentication (লগইন/লগআউট সিস্টেম) তৈরি করতে গেলে আমরা প্রায়শই JWT (JSON Web Token) ব্যবহার করি। এখানে মূলত দুটি জিনিস গুরুত্বপূর্ণ:

                            Access Token
                            Refresh Token
                            চলুন বিস্তারিত দেখি।
                            1️⃣ Access Token কী?


                        </p>
                    </div>
                    <div className='flex gap-10'>
                        <div className=''>
                            <p className='text-xl font-semibold'>Chat Gpt </p>
                            <p> 7th September </p>
                        </div>
                        <a href="">read more</a>
                    </div>
                </div>
                <div className='space-y-4 border-2 p-4'>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div className='space-y-3'>
                        <h2 className='text-3xl'>Web Tech</h2>
                        <h2 className='text-4xl font-semibold'> What is an access token and refresh token? How do they work and where should we store them on the client  side?</h2>
                        <p>ওয়েব অ্যাপ্লিকেশন বা মোবাইল অ্যাপে Authentication (লগইন/লগআউট সিস্টেম) তৈরি করতে গেলে আমরা প্রায়শই JWT (JSON Web Token) ব্যবহার করি। এখানে মূলত দুটি জিনিস গুরুত্বপূর্ণ:

                            Access Token
                            Refresh Token
                            চলুন বিস্তারিত দেখি।
                            1️⃣ Access Token কী?


                        </p>
                    </div>
                    <div className='flex gap-10'>
                        <div className=''>
                            <p className='text-xl font-semibold'>Chat Gpt </p>
                            <p> 7th September </p>
                        </div>
                        <a href="">read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;