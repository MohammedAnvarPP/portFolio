import './AboutContentStyles.css'

import react1 from '../assets/react1.jpg'
import react2 from '../assets/react2.webp'

import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am i?</h1>
            <p>
                I'm a React Front-end Developer.
            </p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={react1} alt="true" className='img'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={react2} alt="true" className='img'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default AboutContent
