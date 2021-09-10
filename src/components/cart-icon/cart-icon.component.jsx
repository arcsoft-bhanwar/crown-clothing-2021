import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {toogleCartHidden} from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import{CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles'

const CartIcon=({toogleCartHidden, itemCount})=>(
    <CartIconContainer onClick={toogleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps=(dispatch)=>({
    toogleCartHidden:()=>dispatch(toogleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})
export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);