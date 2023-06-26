import React from 'react';
import HeroSection from './componentLandingPage/heroSection/HeroSection';
import { Layout } from 'antd';
import HeaderLandingPage from './layoutsLandingPage/headerLandingPage/HeaderLandingPage';
import FooterLandingPage from './layoutsLandingPage/footerLandingPage/FooterLandingPage';
import './landingPage.css'
import HeadlineSection from './componentLandingPage/headlineSection/HeadlineSection';
import ViewSection from './componentLandingPage/viewSection/ViewSection';
import DisplaySection from './componentLandingPage/displaySection/DisplaySection';

const LandingPage = () => {
    const {Content} = Layout
    return (
        <div className='bodyLandingPage'>
            <div>
            <Layout>
                {/* Header Section */}
                <HeaderLandingPage/>

                {/* Content Section */}
                <Content>
                    <HeroSection/>
                    <HeadlineSection/>
                    <ViewSection/>
                    <DisplaySection/>
                </Content>

                {/* Footer Section */}
                <FooterLandingPage/>
            </Layout>
        </div>
        </div>
    );
}

export default LandingPage;
