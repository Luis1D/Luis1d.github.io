import React from 'react'

const About = () => {
    return (
        <div className="about display-item">
            <h2 className="about-header"> > An Intro</h2>
            <p className="about-text">Welcome to my portfolio site! My name is Luis De Anda and I am a Full-Stack Web developer and student with a strong focus around JavaScript. 
                To keep it short, I specialize in frameworks such as React.js for the front-end and Node.js for the back-end plus additional add on libraries to do all the fancy stuff.
            </p>
            <p className="about-text">This website was made as a directory for just about everything that I spend my time on. 
                In the <span className="bold">Github</span> tab, you will find a collection of repositories that link to the many projects I worked on while attending Lambda School. 
                In the <span className="bold">Portfolio</span> tab, you will find a list of personal projects that I have worked on through-out my free time. 
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
                            <p>
                                JavaScript is a scripting or programming language that allows you to implement complex features on web pages — 
                                every time a web page does more than just sit there and display static information for you to look at — 
                                displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — 
                                you can bet that JavaScript is probably involved.
                            </p>
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
                        <p>
                            React makes it painless to create interactive UIs. 
                            Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
                        </p>
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
                        <p>
                            Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. 
                            Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
                        </p>
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
                        <p>Sass (which stands for 'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default About;