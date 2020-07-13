import React from "react"
import { Link } from "react-router-dom";
import listSolid from '../../assets/list-solid.svg'
import userSolid from '../../assets/user-solid.svg'
import plusCircleSolid from '../../assets/plus-circle-solid.svg'

import './style.scss'

const Menu = () => {
    return (
        <div class="container-menu">
            <div class="child">
                <Link to="/items">
                    <img src={listSolid} alt="List Items"/>
                </Link>
            </div>
            <div class="child">
                <Link to="/loan">
                    <img src={plusCircleSolid} alt="Collect Item"/>
                </Link>
            </div>
            <div class="child">
                <Link to="/profile">
                    <img src={userSolid} alt="Profile"/>
                </Link>
            </div>
        </div>
    )
}

export default Menu