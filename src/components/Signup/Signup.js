import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState('');
    const {createUser} = useContext(AuthContext)
    const signUpHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confPass = form.confirm.value;
        // console.log(email, password, confPass)
        if(password.length < 6){
            setError('*Password is less than 6 character')
            return
        }
        if(password != confPass){
            setError("*Password didn't match")
            return
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            setError(error.message)
        })
        form.reset()
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up</h2>
            <form onSubmit={signUpHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="Password">Password</label>
                    <input type="password" name='password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name='confirm' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='error-msg'>{error}</p>
            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
        </div>
    );
};

export default Signup;