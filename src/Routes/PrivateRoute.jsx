import React from 'react';
import useAuth from '../Hooks/useAuth';
import LoadingSpinner from '../Components/Shareed/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (user) return children

    if (loading) return <LoadingSpinner></LoadingSpinner>

    return <Navigate to='/signin' state={{ from: location }} ></Navigate>
}
export default PrivateRoute;