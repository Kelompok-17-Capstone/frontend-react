import React, { Suspense, useEffect } from 'react';
import LayoutsComponent from '../components/layouts/LayoutsComponent';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/loginPage/LoginPage';
import Dashboard from '../pages/dashboard/Dashboard';
import DataUser from '../pages/dataUser/DataUser';
import DataProduk from '../pages/dataProduk/DataProduk';
import DaftarPesanan from '../pages/daftarPesanan/DaftarPesanan';
import LandingPage from '../pages/landingPage/LandingPage';
import EditDataProduk from '../pages/dataProduk/editDataProduk/EditDataProduk';
import EditPesanan from '../pages/daftarPesanan/editPesanan/EditPesanan';

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
                    <React.Fragment>
                        <Route path="/admin" element={<LayoutsComponent><Dashboard /></LayoutsComponent>} />
                        <Route path="/dashboard" element={<LayoutsComponent><Dashboard /></LayoutsComponent>} />
                        <Route path="/data-user" element={<LayoutsComponent><DataUser /></LayoutsComponent>} />
                        <Route path="/daftar-pesanan" element={<LayoutsComponent><DaftarPesanan /></LayoutsComponent>} />
                        <Route path="/data-produk" element={<LayoutsComponent><DataProduk /></LayoutsComponent>} />
                        <Route path="/edit-produk" element={<LayoutsComponent><EditDataProduk/></LayoutsComponent>}/>
                        <Route path="/edit-pesanan" element={<LayoutsComponent><EditPesanan/></LayoutsComponent>}/>
                    </React.Fragment>
                )}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Suspense>
    );
};
// sd
export default RouteManagement;


