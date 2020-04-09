import React from 'react';
import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
        <button className = {`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-button' : ''} custom-button`}  
            {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
