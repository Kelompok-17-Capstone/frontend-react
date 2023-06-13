import React from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import DataUser from '../pages/dataUser/DataUser';
import EditUser from "../pages/dataUser/EditUser"

const RouteManagement = () => {
    return (
        <>
            <LayoutsComponent>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='/data-user' element={<DataUser/>}/>
                    <Route path='/edit-user' element={<EditUser/>}/>
                </Routes>    
            </LayoutsComponent>   
        </>
    );
}

export default RouteManagement;
