import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.css';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/actions';
import { selectCartItemsCount } from '../../redux/cart/selectors';

const CartIcon = ({ toggleCartHidden, cartItemsCount }) => {
    
    return (
        <div className = 'cart-icon' onClick = {toggleCartHidden}>
            <ShoppingIcon className = 'shopping-icon' />
            <span className = 'item-count'>{cartItemsCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    cartItemsCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
