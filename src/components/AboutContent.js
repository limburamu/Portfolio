import React from 'react'

import "../styles/AboutContentStyles.css";
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am react front-end developer. I create responsive secure website for my clients.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img className="pic" src={require('../assets/front.png')} alt="FrontImg" />
                </div>
                <div className="img-stack bottom">
                    <img className="pic" src={require('../assets/code.jpg')} alt="CodeImg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent