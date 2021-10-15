import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toogleCartHidden } from '../../redux/cart/cart.action'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>{
            cartItems.length
                ?
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                :
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>

        }
        </CartItemsContainer>
        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toogleCartHidden());

        }}>GO TO CHECKOUT</CartDropdownButton>

    </CartDropdownContainer>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown));