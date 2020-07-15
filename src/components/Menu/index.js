import React from "react"
import './style.scss'

import listSolid from '../../assets/list-solid.svg'
import userSolid from '../../assets/user-solid.svg'
import plusCircleSolid from '../../assets/plus-circle-solid.svg'

import { Link } from "react-router-dom";

 
const Menu = () => {
    const items = [
        { src: listSolid, alt: 'List Items', path: '/items' },
        { src: plusCircleSolid, alt: 'Collect Item', path: '/loan' },
        { src: userSolid, alt: 'Profile', path: '/profile' },
    ];

    return (
        <div className="container-menu">
                {items.map(item => (
                    <div key={item.path} className="child">
                        <Link to={item.path}>
                            <img src={item.src} className="menu" alt={item.alt}/>
                        </Link>
                    </div>
                ))}
        </div>
    )
}

export default Menu