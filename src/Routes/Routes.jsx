import {
  createBrowserRouter,
} from "react-router-dom";

import Main from "../Layouts/Main";
import SignUp from "../Components/Authentication/SignUp";
import SignIn from "../Components/Authentication/SignIn";
import Home from "../Pages/Home/Home/Home";
import JobDetails from "../Pages/Home/Job details/JobDetails";
import AllJobs from "../Pages/All Job Page/AllJobs";
import AddJob from "../Pages/Add A Job/AddJob";
import MypostedJobs from "../Pages/My posted jobs/MypostedJobs";
import UpdateJob from "../Pages/Update job/UpdateJob";
import axios from "axios";
import AppliedJobs from "../Pages/Applied Job/AppliedJobs";
import PopUpmodal from "../Components/Modal/PopUpmodal";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
              path: '/',
              element: <Home></Home>
            },
            {
              path:'signin',
              element:<SignIn></SignIn>
            },
            {
              path:'signup',
              element:<SignUp></SignUp>
            },
            {
              path:'/job-details/:id',
              element: <JobDetails></JobDetails>,
              loader: async ({params})=> {
                const res = await axios.get(`http://localhost:5000/jobs/update/${params.id}`)
                return res.data
              }
            },
            {
              path:'/all-jobs',
              element:<AllJobs></AllJobs>
            },
            {
              path: '/add-job',
              element:<AddJob></AddJob>
            },
            {
              path: '/my-posted-jobs',
              element:<MypostedJobs></MypostedJobs>
            },
            {
              path: '/update-job/:id',
              element: <UpdateJob></UpdateJob>,
              loader:async ({params})=> {
                const res = await axios.get(`http://localhost:5000/jobs/update/${params.id}`)
                return res.data
              },
            },
            {
              path: '/applied-jobs',
              element: <AppliedJobs></AppliedJobs>,
              // loader:async ({params})=> {
              //   const res = await axios.get(`http://localhost:5000/jobs/update/${params.email}`)
              //   return res.data
              // },
            },
            {
              path: '/popup',
              element: <PopUpmodal></PopUpmodal>
            },
            {
              path: '/my-blog',
              element: <Blog></Blog>
            }
            
        ]
    }
])
export default router