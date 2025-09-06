import React from 'react';
import axios from 'axios'

const axiosPublc = axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosPublc = () => {
    return axiosPublc
};

export default useAxiosPublc;