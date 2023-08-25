import React, { useState } from 'react'
import './TodoInput.css';

export const TodoInput = (props) => {
  const  [inputText,setInputText] = useState('');
const handleEnterPress = (e) =>{
  if (e.keyCode===13) {
    props.addList(inputText)
        setInputText('')
  }
}
  return (
    <div className="submit-form">
        <input onKeyDown={handleEnterPress} value={inputText} onChange={e => {setInputText(e.target.value)}} className='input-box' type="text" placeholder='Enter Your Data' />


        <button onClick={() =>{props.addList(inputText)
        setInputText('')
        }}
  
        
        className='btn '>Add</button>
    </div>
  )
}
