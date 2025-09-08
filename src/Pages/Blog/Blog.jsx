import React from 'react';

import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


const Blog = () => {
    const axiosSecure = useAxiosSecure()

    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/blogs')
            return data
        }
    })
    return (
        <div>
            <h1 className='text-3xl text-center mt-10 mb-10'>Welcome to my blog page</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10'>
                {
                    blogs.map(blog => <div className="card card-compact bg-base-100 md:w-80 shadow-xl w-full">
                        <figure>
                            <img
                                className='w-80 rounded-lg h-40'
                                src={blog.coverImage}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{blog.title}</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="card-title">By: {blog.author.name}</h1>
                                    <p>{blog.createdAt}</p>
                                </div>
                                <Link to={`/full-blog/${blog._id}`} className="font-bold text-blue-700">Read More ...</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blog;