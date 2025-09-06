
import axios from 'axios'
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()

    axiosSecure.interceptors.response.use( res=>{
        return res
    }, async err=>{
        console.log('error at interceptor',err.response);
        if(err.response.status === 401 || err.response.status === 403){
            await logOut()
            navigate('/signIn')
        }
    })

    return axiosSecure
};

export default useAxiosSecure;