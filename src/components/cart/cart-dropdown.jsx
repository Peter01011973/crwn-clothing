import React from 'react';
import './cart-dropdown.css';
import CustomButton from '../UI/custom-button/custom-button';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({ cartItems }) => {
    return (
        <div className = 'cart-dropdown'>
            <div className="cart-items">
                {cartItems.map(({id, ...rest}) => <CartItem key = {id} rest = {rest}/>)}
            </div>
            <CustomButton>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)
