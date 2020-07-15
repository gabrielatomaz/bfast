import React from "react"
import './style.scss'

const Input = ({ type, placeholder, value }) => {
    return (
        <input type={type} value={value} placeholder={placeholder} className="c-input"></input> 
    )
}

export default Input