import React from "react"
import { SVG } from '../../assets'
import './style.scss'

const Logo = ({ color }) => {
    const { BlueLogo, WhiteLogo } = SVG
    return (
        <div>
            <img className="logo" src={color === 'blue' ?  BlueLogo : WhiteLogo} alt="BFast" />
            <h1 className={color} >BFast</h1>
        </div>
    )
}

export default Logo