import React, { Component } from 'react';
import './sign-in.css';
import FormInput from '../UI/form-input/form-input';
import CustomButton from '../UI/custom-button/custom-button';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
export class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (error) {
            console.error(error);
        }        
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { email, password } = this.state;
        return (
            <div className = 'sign-in'>
                <h2 className = 'title'>I have already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name='email'
                        value = {email} 
                        required 
                        handleChange = {this.handleChange}
                        label = 'Email'
                    />
                    <FormInput 
                        type="password" 
                        name='password' 
                        value = {password} 
                        required 
                        handleChange = {this.handleChange}
                        label = 'Password'
                    />
                    <div className="buttons">
                        <CustomButton type="submit">sign in</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
