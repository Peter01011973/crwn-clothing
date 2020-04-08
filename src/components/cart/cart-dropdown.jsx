import React from 'react';
import './cart-dropdown.css';
import CustomButton from '../UI/custom-button/custom-button';

const CartDropdown = () => {
    return (
        <div className = 'cart-dropdown'>
            <div className="cart-items"/>
            <CustomButton>go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown
