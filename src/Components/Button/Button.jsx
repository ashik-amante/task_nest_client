import React from 'react';

const Button = ({text}) => {
    return (
        <div>
            <button
            type='submit'

                className="btn  w-full relative group bg-white text-black hover:text-white overflow-hidden">
                <span className='absolute inset-0  scale-x-0 group-hover:scale-x-100 origin-left transform transition-all bg-orange-400 hover:text-blue-400 duration-700 '></span>

                <span className='relative z-10'>{text}</span>
            </button>
        </div>
    );
};

export default Button;