import React from "react"
import './style.scss'
import { IMG, SVG } from '../../assets'
import { Title } from '../'

const Card = ({ title, date, daysWithMe }) => {
    const { CalendarPlusSolid, UndoAltSolid } = SVG;
    return (
        <div className="card-body">
            <aside className="aside-img">
                <img src={IMG.NotebookImg} alt=""/>
            </aside>
            <aside className="aside-infos">
                <Title text={title} size="md" padding="pt-md pl-md pb-sm" />
                <img id="returnItem" src={UndoAltSolid} alt="Return item" />
                <div className="infos">
                    <img src={CalendarPlusSolid} alt="Calendar" className="calendar" />
                    <span><b>{ date }</b></span>
                    <p><b>{ daysWithMe } days with me</b></p>
                </div>
            </aside>
        </div>
    )
};

export default Card