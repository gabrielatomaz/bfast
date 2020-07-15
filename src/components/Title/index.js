import React from "react"
import './style.scss'

const Title = ({ text, size, padding }) => {
    return (
        <h1 className={`title ${size} ${padding}`}>{text}</h1>
    )
}

export default Title