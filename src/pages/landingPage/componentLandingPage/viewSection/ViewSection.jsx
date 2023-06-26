import React from 'react';
import { ViewImage } from '../../../../assets';
import {CaretRight} from '@phosphor-icons/react'
import './viewSection.css'
import { Button, Col, Row } from 'antd';

const ViewSection = () => {
    return (
        <div className='viewContainer'>
            <div className="imgViewContainer">
                <img src={ViewImage} className='viewImageStyle' alt="ViewImage" />
            </div>
            <div className="textViewContainer">
                    <p className='titleView'>Kuasai Ruang Anda</p>
                <div className="bodyTextContainerView">
                    <p className='bodyTextView'>
                        Beli Monitor MX 32 Inch sekarang dan dapatkan Wireless Keyboard with Touch Pad serta berkesempatan menangkan hadiah <br /> <b>Iphone 13 Pro!</b> 
                    </p>
                </div>
                <div className="btnViewContainer">
                <Button className='btnView'>
                    <Row>
                        <Col span={15} className='textButton'>
                            <div className='verticalCenter'>
                                Selengkapnya
                            </div>
                        </Col>
                        <Col span={9} className='iconButton'>
                            <CaretRight size={28} color="#ffffff" />
                        </Col>
                    </Row>
                </Button>
                </div>
            </div>
        </div>
    );
}

export default ViewSection;
