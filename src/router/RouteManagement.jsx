import React, { Suspense, useEffect } from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import DataUser from '../pages/dataUser/DataUser';
import DataProduk from '../pages/dataProduk/DataProduk';
import DaftarPesanan from '../pages/daftarPesanan/DaftarPesanan';
import LandingPage from '../pages/landingPage/LandingPage';

const RouteManagement = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        if (token && window.location.pathname === '/admin') {
            navigate('/admin');
        }
    }, [token, navigate]);

    return (
        <Suspense>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {!token && <Route path="/admin" element={<LoginPage />} />}
                {token && (
                    <LayoutsComponent>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/data-user" element={<DataUser />} />
                        <Route path="/daftar-pesanan" element={<DaftarPesanan />} />
                        <Route path="/data-produk" element={<DataProduk />} />
                    </LayoutsComponent>
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};



export default RouteManagement;
