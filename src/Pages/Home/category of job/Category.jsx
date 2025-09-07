import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

import useAllJob from '../../../Hooks/useAllJob';

const Category = () => {
   const [jobs] = useAllJob()

    // console.log(jobs);

    const programming = jobs.filter(item => item.category === 'Programming Tech')
    const digital = jobs.filter(item => item.category === 'Digital Marketing')
    const graphic = jobs.filter(item => item.category === 'Graphics Design')
    const food = jobs.filter(item => item.category === 'Food Services')


    return (
        <div >
            <h1 className='text-3xl text-center p-8
            '>Popular Job category</h1>
            <div className='flex justify-center px-6'>
                <Tabs>
                    <TabList>
                        <Tab>All Job</Tab>
                        <Tab>Programming & Tech </Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics & Design</Tab>
                        <Tab>Food Services</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
                            {
                                jobs.map(job => <JobCard
                                    job={job} key={job._id}
                                ></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
                            {
                                programming.map(job => <JobCard
                                    job={job} key={job._id}
                                ></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
                            {
                                digital.map(job => <JobCard
                                    job={job} key={job._id}
                                ></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
                            {
                                graphic.map(job => <JobCard
                                    job={job} key={job._id}
                                ></JobCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-10'>
                            {
                                food.map(job => <JobCard
                                    job={job} key={job._id}
                                ></JobCard>)
                            }
                        </div>

                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default Category;