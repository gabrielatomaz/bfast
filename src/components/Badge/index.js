import React from "react"
import { SVG } from '../../assets'
import './style.scss'

const Badge = () => {
    const { WhiteLogo} = SVG
    return (
        <div className="badge">
            <img src={WhiteLogo} alt=""/>
        </div>
    )
};

export default Badge