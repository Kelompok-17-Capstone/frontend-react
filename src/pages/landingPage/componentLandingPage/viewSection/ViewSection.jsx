import React from 'react';
import { ViewImage } from '../../../../assets';
import './viewSection.css'

const ViewSection = () => {
    return (
        <div className='viewContainer'>
            <div className="imgViewContainer">
                <img src={ViewImage} className='viewImageStyle' alt="ViewImage" />
            </div>
        </div>
    );
}

export default ViewSection;
