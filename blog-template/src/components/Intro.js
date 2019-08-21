import React from 'react';

const Intro = () => {
    return (
        <div className="intro">
            <img src={require("../assets/portrait.jpg")} alt="portrait" className="portrait"/>
            <h1>Luis De Anda</h1>
            <h2>Full-Stack JavaScript Developer</h2>
            <div className="icon-container">
                <img src={require("../assets/react-seeklogo.com.svg")} alt="React" className="react-icon icon"/>
                <img src={require("../assets/node-node-js-seeklogo.com.svg")} alt="Node.js" className="node-icon icon"/>
                <img src={require("../assets/git-seeklogo.com.svg")} alt="Git" className="git-icon icon"/>
                <img src={require("../assets/sass-seeklogo.com.svg")} alt="Sass" className="sass-icon icon"/>
            </div>
        </div>
    )
}

export default Intro;