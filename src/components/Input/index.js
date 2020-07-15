import React from "react"
import './style.scss'

const Input = ({ type, placeholder, value, defaultValue, name }) => {
    return (
        <input 
            type={type}
            name={name} 
            value={value} 
            placeholder={placeholder} 
            defaultValue={defaultValue}
            className="c-input"
        >
        </input> 
    )
}

export default Input