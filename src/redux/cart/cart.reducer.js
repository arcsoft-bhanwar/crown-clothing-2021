import {CartActionTypes} from '../cart/cart.types'
import { addItemToCart,removeItemFromCart } from './cart.utils';
const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                //cartItems:[...state.cartItems, action.payload]
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems, action.payload)
            };

        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem=>cartItem.id !== action.payload.id) 
                
                // if above condition true then filter will return a new array with all the cartItem.id that not exist in action.payload.id

            }        
        default:
            return state
    }
}
export default cartReducer; 