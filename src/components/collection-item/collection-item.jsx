import React from 'react';
import { connect } from 'react-redux';

import './collection-item.css';
import CustomButton from '../UI/custom-button/custom-button';
import { addItemToCart } from '../../redux/cart/actions';

const CollectionItem = ({ item, addItemToCart }) => {
    const { name, price, imageUrl } = item;
    
    return (
        <div className = 'collection-item'>
            <div className = "image" style ={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className = 'item-info'>
                <span>{name}</span>
                <span>${price}</span>
            </div>
            <CustomButton 
                className = 'custom-button' 
                inverted
                onClick = {() => addItemToCart(item)}
            >Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemToCart: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)
