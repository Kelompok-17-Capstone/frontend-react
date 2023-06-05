import { Col, Layout, Row } from "antd";
import React from "react";
import "./headerLandingPage.css";
import { AltaTech, LogoHeader } from "../../../../assets";

const HeaderLandingPage = () => {
  const { Header } = Layout;
  return (
    <div>
        <Header className='header-container'>
            <div className="header-content">
                <div className="container-img">
                    <img src={LogoHeader} alt="Logo Alta" className='logo-alta' />
                    <img src={AltaTech} alt="" className='text-alta' />
                </div>
                <div className="list-container">
                    <ul className="list">
                        <li>Tentang Kami</li>
                        <li>Beli Sekarang</li>
                        <li>Membership</li>
                        <li>Download</li>
                    </ul>
                </div>
            </div>
        </Header>

    </div>
  );
};

export default HeaderLandingPage;
