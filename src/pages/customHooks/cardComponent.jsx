import React from 'react'
import './customHook.styles.css'
const Card = ({children}) =>{
    return(
        <div className='card'>
            {children}
        </div>
    )
}
export default Card;