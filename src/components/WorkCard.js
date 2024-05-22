import './WorkCardStyles.css'
import pro1 from "../assets/Ecart.jpg"
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const WorkCard = (props) => {
    console.log(props.view,"propss");
    return (
        <div className='project-card'>
        <img src={props.imgsrc} alt="image" className='img1'/>
        <h2 className='project-title'>{props.title}</h2>
        <div className='pro-details'>
            <p>{props.text}</p>
            <div className='pro-btns'>
            <a href={props.view} className="btn" target="_blank" rel="noopener noreferrer">View</a>
            <a href={props.source} className="btn" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
        </div>
    </div>
    )
}

export default WorkCard