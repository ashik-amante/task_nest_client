import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FullBlog = () => {
    const blog = useLoaderData()
    console.log(blog);
    const  {title,author,coverImage, createdAt, content,tags} = blog
    return (
        <div>
            <h1>Blog for : {blog.title}</h1>
            <div className='flex justify-center items-center mt-20 border-2'>
                <div className=''>
                    <h1>{title}</h1>
                    <h2>By : {author.name}</h2>

                    <div>
                        <img className='h-[500px]' src={coverImage} alt="" />
                    </div>
                    <div>
                        <p>{content[0].text}</p>
                        <p>{content[1].text}</p>
                       <div>
                        <p>{content[2].language}</p>
                        <p>{content[2].code}</p>
                       </div>

                       <div>{content[3].text}</div>
                       <p className='text-red-500'>have to style</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FullBlog;