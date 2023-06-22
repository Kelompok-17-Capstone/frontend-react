import React from 'react';
import HeroSection from './componentLandingPage/heroSection/HeroSection';
import { Layout } from 'antd';
import HeaderLandingPage from './layoutsLandingPage/headerLandingPage/HeaderLandingPage';
import FooterLandingPage from './layoutsLandingPage/footerLandingPage/FooterLandingPage';

const LandingPage = () => {
    const {Content} = Layout
    return (
        <div>
            <div>
            <Layout>
                {/* Header Section */}
                <HeaderLandingPage/>

                {/* Content Section */}
                <Content>
                    <HeroSection/>
                </Content>

                {/* Footer Section */}
                <FooterLandingPage/>
            </Layout>
        </div>
        </div>
    );
}

export default LandingPage;
