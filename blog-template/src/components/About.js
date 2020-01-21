import React from 'react'

const About = () => {
    return (
        <div className="about display-item">
            <h2 className="about-header"> > An Intro</h2>
            <p className="about-text">Welcome to my portfolio site! My name is Luis De Anda and I am a Full-Stack Web developer and student with a strong focus around JavaScript. 
                To keep it short, I specialize in frameworks such as React.js for the front-end and Node.js for the back-end plus additional add on libraries to do all the fancy stuff.
            </p>
            <div className="tech-used-container">
                <h2> > Tech I normally use</h2>
                <ul>
                    <li>
                        <div>
                            <h3>JavaScript</h3>
                            <img
                                src={ require('../assets/javascript.svg') }
                                alt="javascript icon"
                                className="icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>React JS</h3>
                            <img
                                src={ require('../assets/atom.svg') }
                                alt="javascript icon"
                                className="icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Node JS</h3>
                            <img
                                src={ require('../assets/node.svg') }
                                alt="javascript icon"
                                className="icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>SASS</h3>
                            <img
                                src={ require('../assets/sass.svg') }
                                alt="javascript icon"
                                className="icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Terminal</h3>
                            <img
                                src={ require('../assets/terminal.svg') }
                                alt="terminal icon"
                                className="icon"
                            />
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Github / Git</h3>
                            <img
                                src={ require('../assets/github.svg') }
                                alt="terminal icon"
                                className="icon"
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About;