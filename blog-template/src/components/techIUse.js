import React from 'react';

const TechIUse = () => {
    return (
        <div id="techIUse">
            <div className="tech-used-container">
                <div className="header-container">
                    <h2> > COMMON TECH I USE</h2>
                    <img
                        src={ require('../assets/toolbox.svg') }
                        alt="toolbox"
                        className="toolbox-icon"
                    />
                    {/* Icons made by <a href="https://www.flaticon.com/authors/catkuro" title="catkuro">catkuro</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> */}
                </div>
                <ul>
                    {/* JAVASCRIPT */}
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
                    {/* REACT JS */}
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
                    {/* NODE JS */}
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
                    {/* SASS */}
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
                    {/* TERMINAL */}
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
                    {/* GITHUB */}
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
};

export default TechIUse;