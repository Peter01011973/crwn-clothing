import React from 'react';
import './custom-button.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
    return (
        <button className = {`${isGoogleSignIn ? 'google-button' : ''} custom-button`}  {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
