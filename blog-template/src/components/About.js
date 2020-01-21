import React from 'react'
import TechIUse from './techIUse';

const About = () => {
    return (
        <div className="about display-item">
            <h2 className="about-header"> > An Intro</h2>
            <p className="about-text">Welcome to my portfolio site! My name is Luis De Anda and I am a Full-Stack Web developer and student with a strong focus around JavaScript. 
                To keep it short, I specialize in frameworks such as React.js for the front-end and Node.js for the back-end plus additional add on libraries to do all the fancy stuff.
            </p>
            <TechIUse />
        </div>
    )
}

export default About;