import React,{useState, useEffect, useMemo} from 'react'
const expensiveFunction = (inputValue)=>{
let expensiveValue=inputValue*42;
// ... lots and lots of computing depending on inputValue ...
//expensiveValue = 'Word'
return expensiveValue;
}

const NoUseMemoComponent=({tempValue})=>{
    const [inputValue, setInputValue] = useState('');
    //const expensiveValue =  expensiveFunction(inputValue);
    const expensiveValue = useMemo(()=>expensiveFunction(tempValue), [tempValue])
    
    return(
        <div>
            <h1>Hello {expensiveValue} </h1>
        </div>
    )
}

export default NoUseMemoComponent;