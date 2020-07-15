import React from "react"
import './style.scss'

import { SVG } from '../../assets'

import { Link } from "react-router-dom"

 
const Menu = () => {
    const { PlusCircleSolid, ListSolid, UserSolid } = SVG
    const items = [
        { src: ListSolid, alt: 'List Items', path: '/items' },
        { src: PlusCircleSolid, alt: 'Collect Item', path: '/loan' },
        { src: UserSolid, alt: 'Profile', path: '/profile' },
    ]

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