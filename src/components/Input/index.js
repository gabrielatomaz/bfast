import React from "react"
import './style.scss'

const Input = ({ type, placeholder, value, name }) => {
    return (
        <input type={type} name={name} value={value} placeholder={placeholder} className="c-input"></input> 
    )
}

export default Input