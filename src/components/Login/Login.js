import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css';

const Login = () => {

    const { user, signInUsingGoogle } = useAuth();

    const location = useLocation();

    const history = useNavigate();

    const redierct_url = location.state?.from || '/shop';
    console.log('came from', redierct_url);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history(redierct_url)
                console.log(result.user);
            })
    }

    return (
        <div className="login-form">

            <div>
                <h2>Login</h2>
                <form
                    onSubmit=""
                >
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>

                <p>New to Emajohn? <Link to="/register"> Create Account</Link></p>

                <div>------------- Or-----------</div>

                <button className='btn-regular'
                    onClick={handleGoogleLogin}
                >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;