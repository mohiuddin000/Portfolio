import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'


function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer_logo} alt="" />
                <p>I am a front end developer from India</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Your Email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Mohiuddin. All rights</p>
            <div className="footer-bottom-right">
                <p>term of services</p>
                <p>privacy policy</p>
                <p>Contect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer