import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../category of job/Category';

const Home = () => {
    return (
        <div className='space-y-10'>
            <Banner></Banner>
            <Category></Category>
        </div>
    );
};

export default Home;