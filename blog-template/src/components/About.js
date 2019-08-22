import React from 'react'

const About = () => {
    return (
        <div className="about display-item">
            <h2 className="about-header">An Intro</h2>
            <div className="icon-container">
                <img src={require("../assets/react-seeklogo.com.svg")} alt="React" className="react-icon icon"/>
                <img src={require("../assets/node-node-js-seeklogo.com.svg")} alt="Node.js" className="node-icon icon"/>
                <img src={require("../assets/git-seeklogo.com.svg")} alt="Git" className="git-icon icon"/>
                <img src={require("../assets/sass-seeklogo.com.svg")} alt="Sass" className="sass-icon icon"/>
            </div>
            <p className="about-text">Welcome to my portfolio site! My name is Luis De Anda and I am a Full-Stack Web developer and student with a strong focus around JavaScript. To keep it short, I specialize in frameworks such as React.js for the front-end and Node.js for the back-end plus additional add on libraries to do all the fancy stuff.</p>
            <p className="about-text">This website was made as a directory for just about everything that I spend my time on. In the <span className="bold">Github</span> tab, you will find a collection of repositories that link to the many projects I worked on while attending Lambda School. In the <span className="bold">Portfolio</span> tab, you will find a list of personal projects that I have worked on through-out my free time. </p>
        </div>
    )
}

export default About;