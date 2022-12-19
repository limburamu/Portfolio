import React from "react";

import HeroImg2 from "./HeroImg2";

const About = () => {
    return (
        <div className="hero-img">
            <div className="heading">
                <h1>ABOUT.</h1>
                <p>{this.props.text}</p>
            </div>
        </div>
    )
}

export default About