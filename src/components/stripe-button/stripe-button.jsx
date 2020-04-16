import React from 'react';
import ReactCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ amount }) => {
    const amountInCents = amount * 100;
    const publishableKey = 'pk_test_se4X7jJlyqFkzfL0hLXXGknu00kEB11Koh';
    const onToken = (token) => {
        alert('Success!')
        
    }
    return (
        <div>
            < ReactCheckout 
                label = 'Pay now'
                name = 'CRWN Clothing'
                amount = {amountInCents}
                billingAddress
                shippingAddress
                image = 'https://svgshare.com/i/CUz.svg'
                description = {`Your total amount is ${amount}`}
                panelLabel = 'Pay now'
                stripeKey = {publishableKey}
                token = {onToken}
            />
        </div>
    )
}

// https://github.com/azmenak/react-stripe-checkout
export default StripeCheckoutButton
