import React from "react"
import './style.scss'

import whiteLogo from '../../assets/logo-white.svg'
import blueLogo from '../../assets/logo-blue.svg'


const Logo = ({ color }) => {
    return (
        <div>
            <img className="logo" src={color === 'blue' ?  blueLogo : whiteLogo} alt="BFast" />
            <h1 className={color} >BFast</h1>
        </div>
    )
}

export default Logo