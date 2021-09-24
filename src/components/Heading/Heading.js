import React from 'react';
import Logo from "../../images/logo.png"
import './Heading.css';

const Heading = () => {
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/manage">Manage Inventory here</a>
            </nav>
        </div>
    );
};

export default Heading;