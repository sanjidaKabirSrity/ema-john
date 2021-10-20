import React from 'react';
import { Link , useLocation , useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {user , signInUsingGoogle} = useAuth();

    const location = useLocation();

    const history = useHistory();

    const redirect_uri = location.state?.from || '/shop';

    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }
    return (
        <div className="form">
            <div>
                <h2>Sign-In</h2>
                <form>
                    <input type="email" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-John <Link to="/register">Create Account</Link></p>
                <div>----------or----------</div>
                <button onClick ={handleGoogleSignIn} className="btn">Continue</button>
            </div>
        </div>
    );
};

export default Login;