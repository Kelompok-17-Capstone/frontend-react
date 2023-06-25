import React from 'react';
import './headlineSection.css'
import { Circle1, Circle2 } from '../../../../assets';
import { Col, Row } from 'antd';

const HeadlineSection = () => {
    return (
        <div className='headlineContainer'>
            <div className="containerTextHeadline">
                    <p className='textHeadline'>Tingkatkan Kenyamananmu dengan Performa dari Produk AltaTech!</p>
                <div className="bodyTextContainer">
                    <p className='bodyTextHeadline'>
                        AltaTech menghadirkan produk komputer dan aksesoris terbaik dengan performa yang mumpuni. Kami menghadirkan kenyamanan pada ruang Anda. <br /> <b>Ayo, beli sekarang!</b>
                    </p>
                </div>
            </div>
            <div className="circleContainer2">
                <Row className="rowContainer2">
                    <Col span={8}>
                        <img src={Circle2} className="circleStyle1" alt="circle1" />
                    </Col>
                    <Col span={8}>
                        <img src={Circle2} className="circleStyle2" alt="circle2" />
                    </Col>
                    <Col span={8}>
                        <img src={Circle1} className='circleStyle3' alt="circle3" />
                    </Col>
                </Row>
            </div>
        </div>


    );
}

export default HeadlineSection;
