import React from "react";
import "./headerLandingPage.css";
import { AltaTech, LogoHeader } from "../../../../assets";
import { MENU_ITEM } from "./constants";

const HeaderLandingPage = () => {
  return (
    <div>
            <div className="header-content">
                <div className="container-img">
                    <img src={LogoHeader} alt="Logo Alta" className='logo-alta' />
                    <img src={AltaTech} alt="" className='text-alta' />
                </div>
                    <ul className="list">
                        {MENU_ITEM.map((item) => (
                            <li key={item.key}>
                                <a href="">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
            </div>

    </div>
  );
};

export default HeaderLandingPage;
