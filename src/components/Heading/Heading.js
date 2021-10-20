import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Logo from "../../images/logo.png"
import './Heading.css';

const Heading = () => {
    const activeLink = {
        backgroundColor: 'rgba(255, 255, 255, 0.707)',
        fontWeight: "bold",
        color: 'black'
      }

    const {user,signOutFrom} = useAuth();
    return (
        <div>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <nav>
                <div>
                <NavLink to="/shop" className="navLink" activeStyle={activeLink}>Shop</NavLink>
                <NavLink to="/order" className="navLink" activeStyle={activeLink}>Order Review</NavLink>
                <NavLink to="/shipping" className="navLink" activeStyle={activeLink}>Shipping</NavLink>
                <NavLink to="/inventory" className="navLink" activeStyle={activeLink}>Manage Inventory here</NavLink>
                </div>
                <div className="login-div">
                {user.email ? 
                    <NavLink to="" onClick={signOutFrom} className="navLink" activeStyle={activeLink}>Sign-Out</NavLink>
                    :
                    <NavLink to="/signIn" className="navLink" activeStyle={activeLink}>Sign-In</NavLink>
                }
                </div>
            </nav>
        </div>
    );
};

export default Heading;