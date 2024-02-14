import React from 'react'
import '../App.css';

const Button = ({buttonText,onClick}) => {
  return (
    <div>
        <button onClick={onClick}>{buttonText}</button>
    </div>
  )
}

export default Button
