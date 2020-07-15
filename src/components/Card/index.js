import React from "react"
import './style.scss'
import { IMG } from '../../assets'
import { Title } from '../'

const Card = ({ title }) => {
    return (
        <div className="card-body">
            <aside className="aside-img">
                <img src={IMG.NotebookImg} alt=""/>
            </aside>
            <aside className="aside-infos">
                <Title text={title} size="md" padding="p-md" />
            </aside>
        </div>
    )
};

export default Card