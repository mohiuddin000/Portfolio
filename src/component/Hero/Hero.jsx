import React from 'react'
import './Hero.css'
import profileImg from '../../assets/cropped_circle_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profileImg} alt="" />
            <h1><span>Hi, I’m MohiUddin,</span> Frontend Developer | React.js | UI/UX Enthusiast </h1>
            <p>I build responsive and user-friendly interfaces using React, HTML, and CSS. Passionate about clean design, focused work, and continuous learning.</p>
            <div className="hero-action">
                <div className="hero-connect">
                <AnchorLink className='anchor-link' offset={50} href="#contact">Connect with me </AnchorLink>
                </div>
                <div className="hero-resume">
                    My resume
                    
                </div>
            </div>
        </div>
    )
}

export default Hero