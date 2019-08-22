import React from 'react';

const Intro = () => {
    return (
        <div className="intro">
            <img src={require("../assets/portrait.jpg")} alt="portrait" className="portrait"/>
            <h1>Luis De Anda</h1>
            <h2>Full-Stack JavaScript Developer</h2>
        </div>
    )
}

export default Intro;