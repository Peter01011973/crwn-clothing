import React from 'react';
import './signin-and-signup.css';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

const SignInAndSignUpPage = () => {

    return (
        <div className = 'signin-and-signup'>
           <SignIn />
           <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage
