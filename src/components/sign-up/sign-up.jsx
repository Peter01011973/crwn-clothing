import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.css';
import FormInput from '../UI/form-input/form-input';
import CustomButton from '../UI/custom-button/custom-button';

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        
        if (password !== confirmPassword) {
            alert(`Passwords don't match!`)
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
                        
            await createUserProfileDocument(user, {displayName});
            this.state = {
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }

        } catch (error) {
            console.error(error);     
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='signUp'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type = 'text'
                        name = 'displayName'
                        value = {displayName}
                        required 
                        handleChange = {this.handleChange}
                        label = 'Display name'
                    />
                    <FormInput 
                        type = 'email'
                        name = 'email'
                        value = {email}
                        required 
                        handleChange = {this.handleChange}
                        label = 'Email'
                    />
                    <FormInput 
                        type = 'password'
                        name = 'password'
                        value = {password}
                        required 
                        handleChange = {this.handleChange}
                        label = 'Password'
                    />
                    <FormInput 
                        type = 'password'
                        name = 'confirmPassword'
                        value = {confirmPassword}
                        required 
                        handleChange = {this.handleChange}
                        label = 'Conrifm Password'
                    />
                    <CustomButton type="submit">sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp

