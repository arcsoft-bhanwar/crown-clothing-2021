import React from 'react'
import {CartItemContainer, CartItemImage, ItemDetailContainer} from './cart-item.styles'
const CartItem=({item:{imageUrl, price, name, quantity}})=>{

return (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailContainer>


    </CartItemContainer>
)
}

export default CartItem;