import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo.png"
import './Heading.css';

const Heading = () => {
    const activeLink = {
        backgroundColor: 'rgba(255, 255, 255, 0.707)',
        fontWeight: "bold",
        color: 'black'
      }
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <NavLink to="/shop" className="navLink" activeStyle={activeLink}>Shop</NavLink>
                <NavLink to="/order" className="navLink" activeStyle={activeLink}>Order Review</NavLink>
                <NavLink to="/inventory" className="navLink" activeStyle={activeLink}>Manage Inventory here</NavLink>
            </nav>
        </div>
    );
};

export default Heading;