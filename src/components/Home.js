import React from "react";
import "../styles/HeroImgStyles.css";

import Typical from 'react-typical';

import { Link } from "react-router-dom";

const Home = () => {
    return (

        <div className="hero">
            <div className="mask">
                <img className="joker" src={require('../assets/joker.jpg')} alt="JokerImg" />
            </div>
            <div className="content">
                <p>Hi, I'm a freelancer.</p>
                {/* <h1>React Developer.</h1> */}
                <h1>
                    {" "}
                    <Typical
                        loop={Infinity}
                        steps={[
                            "FrontEnd Developer",
                            1000,
                            "BackEnd Developer",
                            1000,
                        ]}
                    />
                </h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Home