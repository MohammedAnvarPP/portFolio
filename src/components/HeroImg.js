import React from 'react'
import './HeroImgstyle.css'
import introBg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom'
const HeroImg = () => {
  return (
   <div className='hero'>
     <div className='mask'>
        <img className='intro-img' src={introBg} alt="introBg"/>
      </div>
      <div className='content'>
            <p>Hi, I'M Mohammed Anvar.</p>
            <h1>Front End Developer.</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn-light'>Contact</Link>
            </div>
      </div>
   </div>
  )
}

export default HeroImg
