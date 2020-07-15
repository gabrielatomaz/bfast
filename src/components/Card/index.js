import React from "react"
import './style.scss'
import { IMG, SVG } from '../../assets'
import { Title } from '../'

const Card = ({ title }) => {
    const { CalendarPlusSolid } = SVG;
    return (
        <div className="card-body">
            <aside className="aside-img">
                <img src={IMG.NotebookImg} alt=""/>
            </aside>
            <aside className="aside-infos">
                <Title text={title} size="md" padding="pt-md pl-md pb-sm" />
                <img src={CalendarPlusSolid} alt="Calendar" className="calendar" />
            </aside>
        </div>
    )
};

export default Card