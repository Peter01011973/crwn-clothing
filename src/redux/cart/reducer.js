import { CartActionTypes } from './types';
import { addItemToCart, reduceItemQuantity } from './utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN: return {
            ...state, 
            hidden: !state.hidden
        };
        case CartActionTypes.ADD_ITEM: return {...state, cartItems: addItemToCart(state.cartItems, payload)};
        case CartActionTypes.REMOVE_ITEM_FROM_CART: return {
            ...state, 
            cartItems: state.cartItems.filter(cartItem => cartItem.id !== payload.id)
        };
        case CartActionTypes.REDUCE_ITEM_QUANTITY: return {
            ...state, 
            cartItems: reduceItemQuantity(state.cartItems, payload) 
        }
        default: return state
    }
}

export default cartReducer;