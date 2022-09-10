import React from 'react'
import { Navigate, Outlet} from 'react-router-dom';
import  useAuthState  from '../hooks/useAuthState.js';
import Spinner from './Spinner'

export const PrivateRoute = () => {

const {loggedIn,checkState} = useAuthState();

if(checkState){
    return <Spinner/>
}
 
 return loggedIn ? <Outlet/>: <Navigate to='/signin'/>;
}
