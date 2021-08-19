import React from 'react';
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import { connect } from 'react-redux';

const CartDropdown=({cartItems})=>(
    <div className='cart-dropdown'>
        {
            cartItems.map((cartItem, idx)=>(
                <div key={idx}>
                    {cartItem.quantity}
                </div>
            ))
        }
        <div className='cart-items'/>
        <CustomButton>GO TO CHECKOUT</CustomButton>

    </div>
)
const mapStateToProps=({cart:{cartItems}})=>({
    cartItems
}) 
export default connect(mapStateToProps)(CartDropdown);