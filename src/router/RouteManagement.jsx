import React from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';

const RouteManagement = () => {
    return (
        <>
            <LayoutsComponent>
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                </Routes>    
            </LayoutsComponent>   
        </>
    );
}

export default RouteManagement;
