import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color: "fff", marginRight: "2rem" }} />
                    <div>
                      <p>Godhuli Tole, Mechinagar-12, Jhapa</p>
                      <p>Nepal</p>
                    </div>
                </div>
                <div className="phone">
                  <h4><FaPhone size={20} style={{color: "fff", marginRight: "2rem" }} />
                9808310474</h4>   
                </div>
                <div className="email">
                  <h4><FaMailBulk size={20} style={{color: "fff", marginRight: "2rem" }} />
                limburamu23@gmail.com</h4>   
                </div>
            </div>

            <div className="right">
              <h4>About Myself</h4>
              <p>Hello this is me Ramu Samsohang. IT student in Gomendra Multiple College Birtamode, Jhapa.</p>
              <div className="social">
              <FaFacebook size={30} style={{color: "fff", marginRight: "1rem" }} />
              <FaTwitter size={20} style={{color: "fff", marginRight: "2rem" }} />
              <FaLinkedin size={20} style={{color: "fff", marginRight: "2rem" }} />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Footer; 