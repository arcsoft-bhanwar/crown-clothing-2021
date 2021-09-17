import React,{useEffect,useState} from 'react'
import {CounterStylesContainer, ColorGreen, ColorRed} from './testNeww.styles'
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
        <div><CounterStylesContainer>Counter:</CounterStylesContainer>{counter %2==0 ? (<ColorGreen>{counter}</ColorGreen>) : (<ColorRed>{counter}</ColorRed>)}</div>
    )

}

export default TestNeww;