import React from 'react';
import './displaySection.css'
import { Row, Col } from 'antd';
import { DisplayImg } from '../../../../assets';

const DisplaySection = () => {
    return (
        <div className='displaySectionContainer'>
            <Row align={'middle'}>
                <Col span={13}>
                    <img src={DisplayImg} className='imgDisplay' alt="Display Img" />
                </Col>
                <Col span={11}>
                    <div className="containerTextDisplay">
                        <p className='titleDisplay'>PRODUK KAMI</p>
                        <div className="containerBodyTextDisplay">
                            <p className='bodyTextDisplay'>
                                <b>Diskon 10%</b> untuk setiap pembelian
                                produk <span className='textBlue'>Blue Alien Series</span> 
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default DisplaySection;
