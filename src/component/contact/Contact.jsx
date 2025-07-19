import React from 'react'
import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg"
import mail_icon from "../../assets/mail_icon.svg"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"

const Contact = () => {
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I’m currently open to new opportunities and collaborations. Whether you have a project, a question, or just want to say hello — feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>mohiuddin3551@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p> 7897312572</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>allahabad</p>
                    </div>
                </div>
            </div>
            <form  className="contact-right">
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='enter your email' name='email' />
                <label htmlFor="">Wriet your message here</label>
                <textarea name="message" rows='8' placeholder='enter your message here'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact