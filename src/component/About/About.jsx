import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />

      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
            I’m a Frontend Developer from Allahabad with a B.Tech in Computer Science. I enjoy turning complex ideas into simple, user-friendly web experiences. Skilled in React, HTML, CSS, and JavaScript, I focus on clean design, responsive layouts, and scalable code. I'm always eager to learn new technologies and grow as a developer.
            </p>
          </div>
          <div className="about-skills">
          <div className="about-skill">
            <p>HTML& CSS</p> <hr style={{ width: "50%" }} />
          </div>
          <div className="about-skill">
            <p>JavaScript</p> <hr style={{ width: "60%" }} />
          </div>
          <div className="about-skill">
            <p>React</p> <hr style={{ width: "80%" }} />
          </div>
          <div className="about-skill">
            <p>Tailwind CSS</p> <hr style={{ width: "30%" }} />
          </div>
        </div>
        </div>
      </div>
      {/* <div className="about-achievements">
          <div className="about-achievement">
            <h1>10+</h1>
            <p>years of exp</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>100+</h1>
            <p>Project Compeleted</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>15+</h1>
            <p>Happy clients</p>
          </div>
          <hr />  
        </div> */}
    </div>
  )
}

export default About