import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
const priceForStripe=price*100;
const publishableKey= 'pk_test_51JXmSWSIC6BW93mLh1NlHlVpH9DcZr1z3aD9C7FIAhWtd7QugAd0hBSOawrjVma7abmdnHjxbX3T8PjXZ1uFF5Fs00LS7V0kTu';
const onToken=(token)=>{
    console.log('tokennnnn==>',token)
    alert('Payment Successfull!');
}
return (
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
)
}

export default StripeCheckoutButton;