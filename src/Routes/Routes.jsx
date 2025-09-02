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
              // loader: ({params})=> fetch(`job.json/${params.id}`)
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
            }
        ]
    }
])
export default router