import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './checkout.css';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/selectors';
import CheckoutItem from './checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const Checkout = ({ cartItems, selectCartItemsTotal }) => {
    return (
        <div className='checkout'>
            <div className="checkout-header">
                {['Product', 'Description', 'Quantity', 'Price', 'Remove'].map((item, index) => <span key={index} className='header-item'>{item}</span>)}
            </div>
            {cartItems.map(item => (
                <CheckoutItem key={item.id} item={item} />
            ))}
            <div className='total'>
                <span > TOTAL: ${selectCartItemsTotal}</span>
                <div className='test-warning'>
                    *Please use the following test credit card for payments*
                    <br />
                    4242 4242 4242 4242 - Exp: 05/20 - CVV: 123
                </div>
                <StripeCheckoutButton amount={selectCartItemsTotal} />

            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    selectCartItemsTotal
})

export default connect(mapStateToProps)(Checkout)