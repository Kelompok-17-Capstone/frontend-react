import React, { Suspense, useEffect } from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import DataUser from '../pages/dataUser/DataUser';

const RouteManagement = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/")
        }
    }, [token])

    return (
        <Suspense>
            {!token ? (
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                </Routes>
            ) : (
                <LayoutsComponent>
                    <Routes>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/data-user' element={<DataUser/>}/>
                    </Routes>    
                </LayoutsComponent>   
            )}
        </Suspense>
    );
}


export default RouteManagement;
