import React from "react"
import { Link } from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import './style.scss'

const Button = ({ text, icon, path }) => {
    return (
        <div>
             <Link to={path}>
                <button type="button">
                    { (icon ? <i className={icon}></i> : '') } { text }
                </button>
            </Link>
        </div>
    )
};

export default Button