import React from 'react'

const About = () => {
    return (
        <div>
            <div className="icon-container">
                <img src={require("../assets/react-seeklogo.com.svg")} alt="React" className="react-icon icon"/>
                <img src={require("../assets/node-node-js-seeklogo.com.svg")} alt="Node.js" className="node-icon icon"/>
                <img src={require("../assets/git-seeklogo.com.svg")} alt="Git" className="git-icon icon"/>
                <img src={require("../assets/sass-seeklogo.com.svg")} alt="Sass" className="sass-icon icon"/>
            </div>
        </div>
    )
}

export default About;