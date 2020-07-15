import React from "react"
import { Link } from "react-router-dom";
import './style.scss'
const Button = ({ text, type, icon, path, color, disabled, click = () => {} }) => {
    const button = (
        <button type={type} className={color} onClick={click} disabled={disabled}>
            { (icon ? <i className={icon}></i> : '') } { text }
        </button>
    )
    return (
        <div className="button">
            { path ? 
                <Link to={path}>
                    { button }
                </Link> 
                : button
            }
             
        </div>
    )
};

export default Button