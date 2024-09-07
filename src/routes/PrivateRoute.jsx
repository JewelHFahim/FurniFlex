/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/AuthContext';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location)
    const {user, loading} = useContext(UserContext);

    if(loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    }
    return <Navigate to ="/signin" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;