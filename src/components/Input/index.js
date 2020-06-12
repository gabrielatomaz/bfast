import React from "react"
import './style.scss'

const Input = ({ type, placeholder }) => {
    return (
        <input type={type} placeholder={placeholder}></input> 
    )
}

export default Input