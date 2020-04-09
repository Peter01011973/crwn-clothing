import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.css';

import { removeItemFromCart, addItemToCart, reduceItemQuantityInCart } from '../../../redux/cart/actions';

const CheckoutItem = ({ item, removeItemFromCart, increaseItemQuantity, reduceItemQuantity }) => {
    const { imageUrl, name, price, quantity } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div 
                    className="arrow" 
                    onClick = {
                        () =>{ 
                            if (item.quantity !== 0) reduceItemQuantity(item)
                        }
                    }

                > &#10094; </div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick = {() => increaseItemQuantity(item)}> &#10095; </div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => removeItemFromCart(item)}>
                &#10005;
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    increaseItemQuantity: item => dispatch(addItemToCart(item)),
    reduceItemQuantity: item => dispatch(reduceItemQuantityInCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
