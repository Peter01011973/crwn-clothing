import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.css';
import CustomButton from '../UI/custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/selectors';
import { toggleCartHidden } from '../../redux/cart/actions';

const CartDropdown = ({ cartItems, history, dispatch }) => {

    return (
        <div className = 'cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(({id, ...rest}) => <CartItem key = {id} rest = {rest}/>) 
                    : <span className = 'empty-message'>Your cart is empty.</span>
                }
            </div>
            <CustomButton 
                disabled = {!cartItems.length} 
                onClick = {
                    () => {
                        history.push('/checkout');
                        dispatch(toggleCartHidden());
                    }
                }
            >go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
