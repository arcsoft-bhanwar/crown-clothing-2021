import React,{useRef, useState}  from 'react'

const  TextInputWithFocusButton=()=> {
  const[field, setField] = useState({})
    const inputEl = useRef(null);
    
    //debugger;
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();

      setField(inputEl.current.value)
      
      
    };
    return (
      <div name='HSR'>
        <input ref={inputEl} type="text" name="bsr"/>
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );
  }

  export default TextInputWithFocusButton;

