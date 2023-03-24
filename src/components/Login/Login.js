import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'> Log In</h2>
            <form action="">
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p>New here? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
    );
};

export default Login;