import "../styles/HeroImgStyles.css";

import React from 'react';
import JokerImg from "../assets/joker.jpg"
import { Link } from "react-router-dom";

const Image = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="joker" src={JokerImg} alt="JokerImg" />
      </div>
      <div className="content">
        <p>Hi, I'm a freelancer.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Image