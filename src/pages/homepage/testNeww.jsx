import React,{useEffect,useState} from 'react'
import './testNeww.styles.scss'
const TestNeww =({value})=>{

    const [counter, setCounter]=useState(value)

    useEffect(()=>{
        
        setTimeout(
            ()=>{
                setCounter(counter+1)
            },3000
        )

        // setInterval(
        //     ()=>{
        //         setCounter(counter+1)
        //     },3000
        // )
        setTimeout(
            ()=>{   
                setCounter(counter+1)
            },3000
        )
    })


    return(
        <div><span className="counter-style">Counter:</span>{counter %2==0 ? (<span className='color-green'>{counter}</span>) : (<span className='color-red'>{counter}</span>)}</div>
    )

}

export default TestNeww;