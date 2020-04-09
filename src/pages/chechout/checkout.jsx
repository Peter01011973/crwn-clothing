import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.css';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/selectors';
import CheckoutItem from './checkout-item/checkout-item';

const Checkout = ({ cartItems, selectCartItemsTotal }) => {
    return (
        <div className = 'checkout'>
            <div className="checkout-header">
                {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((item, index) => <span key = {index} className = 'header-item'>{item}</span>)}
            </div>
            {cartItems.map(item => (
                <CheckoutItem key = {item.id} item = {item}/>
            ))}
            <div className = 'total'>
                <span > TOTAL: ${selectCartItemsTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    selectCartItemsTotal: selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout)