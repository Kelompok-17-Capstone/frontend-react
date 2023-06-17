import { Col, Row, Button } from "antd";
import React from "react";
import { Circle1, Circle2, Keyboard } from "../../../../assets";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div>
      <Row className="bodyHeroSection">
        <Col span={11} className="heroLeft">
            <div className="textContainer">
                <p className="headlineText">RASAKAN PERFORMANYA</p>
                <p className="secondText">
                    Sambutlah keyboard mechanical AltaTech yang paling hening dan sebuah
                    ikon dirancang ulang!
                </p>
                <br />
                <Button className="btnBeliSekarang">
                    Beli sekarang
                </Button>
            </div>
        </Col>
        <Col span={13} className="heroRight">
            <div className="imageContainer">
                <img src={Keyboard} alt="keyboard-img" className="img-hero" />
            </div>
        </Col>
      </Row>
      <div className="circleContainer">
        <Row className="rowContainer">
            <Col span={8}>
                <img src={Circle1} alt="circle1" />
            </Col>
            <Col span={8}>
                <img src={Circle2} className="circle2" alt="circle2" />
            </Col>
            <Col span={8}>
                <img src={Circle2} className="circle3" alt="circle3" />
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroSection;
