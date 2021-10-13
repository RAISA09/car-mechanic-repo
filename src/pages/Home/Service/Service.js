import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, img, describtion } = service
    return (
        <div className="service-container">
            <img src={img} alt="" />
            <h3>Name:{name}</h3>
            <h6>Price:{price}</h6>
            <p>Describtion:{describtion}</p>

        </div>
    );
};

export default Service;