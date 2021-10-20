import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {signInUsingGoogle} = useAuth();
    return (
        <div className="form">
            <div>
                <h2>Create Account</h2>
                <form onSubmit="">
                    <input type="text" placeholder="Your Name" />
                    <br />
                    <input type="email" placeholder="Your Email"/>
                    <br />
                    <input type="password" placeholder="Password" />
                    <br />
                    <input type="password" placeholder="Re-enter Password" />
                    <br />
                    <button onClick ={signInUsingGoogle} className="btn">Continue</button>
                </form>
                <p>Already have an account? <Link to="/signIn">Sign-In</Link></p>
            </div>
        </div>
    );
};

export default Register;