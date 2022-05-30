import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';





const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    const { location } = useLocation();
     console.log('location', location);

    return (
        user.email ? (
            children
        ) : (
            <Navigate to="/login" state={{ from: location }} replace />
        )
    );
};




export default PrivateRoute;