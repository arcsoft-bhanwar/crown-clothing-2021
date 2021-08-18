import React from 'react';
import {Link} from 'react-router-dom'
import{connect} from 'react-redux'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils';
import CartIcon from  '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'  
const Header=({currentUser, hidden})=>(
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            

            <Link to='/shop' className='option'>
                CONATCT
            </Link>
            {
            currentUser ?
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link to='/signin' className='option'>
                SIGN IN
            </Link>
            }
            <CartIcon/>

        </div>
        {hidden ? null : <CartDropdown/>
}
    </div>
)

const mapStateToPrios = ({user:{currentUser}, cart:{hidden}})=>({
    currentUser,
    hidden

})
export default connect(mapStateToPrios)(Header);