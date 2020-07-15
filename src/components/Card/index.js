import React from "react"
import './style.scss'
import img from '../../assets/notebook.jpg'

const Card = ({ title }) => {
    return (
        <div className="card-body">
            <aside className="aside-img">
                <img src={img} />
            </aside>
            <aside className="aside-infos">
            { title }
            </aside>
        </div>
    )
};

export default Card