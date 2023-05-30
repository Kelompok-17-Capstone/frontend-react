import React from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import DataUser from '../pages/dataUser/DataUser';

const RouteManagement = () => {
    return (
        <>
            <LayoutsComponent>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/data-user' element={<DataUser/>}/>
                </Routes>    
            </LayoutsComponent>   
        </>
    );
}

export default RouteManagement;
