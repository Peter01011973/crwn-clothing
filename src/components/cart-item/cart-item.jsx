import React from 'react';
import './cart-item.css';

const CartItem = ({ rest: { name, price, imageUrl, quantity } }) => {

    return (
        <div className = 'cart-item'>
            <img className = 'image' src = {imageUrl} alt = 'product' />
            <div className="item-details">
                <span className = 'name'>{name}</span>
                <span className = 'price'>{quantity} x ${price}</span>
            </div>
        </div>
    )
}

export default CartItem
