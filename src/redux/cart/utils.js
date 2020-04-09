export const addItemToCart = (cartItems, item) => {
    let notExist = true;
    const newCartItems = cartItems.map(element => {
        if (element.id === item.id) 
            {
                notExist = false;
                return {...element, quantity: element.quantity+1}
            } 
        else return element }
    )
    if (notExist) {return [...cartItems, {...item, quantity: 1}]} else {return newCartItems}
}

export const reduceItemQuantity = (cartItems, item) => {
    if (item.quantity === 1) {return cartItems.filter(cartItem => cartItem.id !== item.id)} 
    else {return cartItems.map(cartItem => (cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem ))}
    
}
