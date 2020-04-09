import React from 'react';
import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, inverted, disabled, ...otherProps }) => {

    return (
        <button className = {`${disabled ? 'disabled' : ''} ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-button' : ''} custom-button`}  
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
