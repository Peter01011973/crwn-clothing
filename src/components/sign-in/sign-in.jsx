import React, { Component } from 'react';
import './sign-in.css';
import FormInput from '../UI/form-input/form-input';
import CustomButton from '../UI/custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className = 'sign-in'>
                <h2 className = 'title'>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email' 
                        value = {this.state.email} 
                        required 
                        handleChange = {this.handleChange}
                        label = 'Email'
                    />
                    <FormInput 
                        type="password" 
                        name='password' 
                        value = {this.state.password} 
                        required 
                        handleChange = {this.handleChange}
                        label = 'Password'
                    />
                    <CustomButton type="submit">sign in</CustomButton>
                    <CustomButton onClick = {signInWithGoogle}>sign in with google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn
