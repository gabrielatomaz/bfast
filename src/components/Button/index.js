import React from "react"
import { Link } from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './style.scss'

const Button = ({ text, icon, path, click = () => {} }) => {
    const button = (
        <button onClick={click}>
            { (icon ? <i className={icon}></i> : '') } { text }
        </button>
    )
    return (
        <div>
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