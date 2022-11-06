import React from 'react'
import { FaFacebook, FaGithubSquare, FaHome, FaInstagram, FaLaptopCode, FaLinkedin, FaPhone } from 'react-icons/fa'
import { MdEmail } from "react-icons/md"
import './FooterStyles.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location flex'>
                        <FaHome size={20} style={{
                            color: "#fff",
                            marginRight: "10",
                            marginTop: "10"
                        }} />
                        <div>
                            <p className='p'>Kondotty, Malappuram</p>
                            <p>Kerala, India</p>
                        </div>
                    </div>
                    <div className='phone flex'>
                        <FaPhone size={20} style={{
                            color: "#fff",
                            marginRight: "5px",
                            marginTop: "10"

                        }} /> <h4> +918301998293</h4>

                    </div>
                    <div className='email flex'>
                        <MdEmail className='emailIcon' size={20} style={{
                            color: "#fff",
                            marginRight: "5px",
                            marginTop: "10"
                        }} /> <h4>mohammedanvarpp1@gmail.com</h4>

                    </div>

                </div>
                {/* <div className='middle'>
                    <FaLaptopCode fill='#fff' />
                    <h3>About me</h3>
                    <p>I'm a self-taught front-end developer.I've studied web development after completing my Diploma. 3 Months of learning got me a job. Now am working in a IT company as a front-end developer.</p>
                </div> */}
                <div className='right'>
                    <div className='social'>
                        <h4>Follow me On : 👇</h4>
                        <a href="https://www.facebook.com/anwu.anwar"><FaFacebook size={30} style={{ color: "#fff", marginRight: "20px" }} /></a>
                        <a href="https://github.com/MohammedAnvarPP"><FaGithubSquare size={30} style={{ color: "#fff", marginRight: "20px" }} /></a>
                        <a href="https://www.instagram.com/___an__war____/"><FaInstagram size={30} style={{ color: "#fff", marginRight: "20px" }} /></a>
                        <a href="https://www.linkedin.com/in/mohammed-anvar-pp"><FaLinkedin size={30} style={{ color: "#fff", marginRight: "20px" }} /></a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Footer
