import React from 'react';

// ICONS
import javascript from '../assets/javascript.svg';
import atom from '../assets/atom.svg';
import sass from '../assets/sass.svg';
import chartjs from '../assets/chartjs.jpg';

const Portfolio = () => {
    return (
        <div className="portfolio-section display-item">
                <div className="portfolio-cards">
                    <h3 className="portfolio-title"> > Cryptocurrncy News Site</h3>
                    <div className="preview-container">
                        <div className="tech-used">
                        <h4>Tech Used:</h4>
                            <table>
                                <tr>
                                    <th>Language</th>
                                    <th>Frameworks</th>
                                    <th>Styling</th>
                                </tr>
                                <tr>
                                    <td>- JavaScript</td>
                                    <td>- React.JS <br/> - Chart.JS</td>
                                    <td>- SASS</td>
                                </tr>
                            </table>
                        </div>
                        <div className="preview-txt">
                            <p>The cryptocurrency market is growing year after year and is considered by a lot as the future of technology. Stay up to date with the latest news and price data.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://cryptonews-app.now.sh/" target="_blank" rel="noopener noreferrer">Visit App</a>
                            {/* <a href="https://github.com/Luis1D" target="_blank" rel="noopener noreferrer">Source Code</a> */}
                        </div>
                    </div>

                </div>
                <div className="portfolio-cards">
                    <h3 className="portfolio-title"> > Todo App</h3>
                    <div className="preview-container">
                    <div className="tech-used">
                            <table>
                                <tr>
                                    <th>Language</th>
                                    <th>Frameworks</th>
                                    <th>Styling</th>
                                </tr>
                                <tr>
                                    <td>- JavaScript</td>
                                    <td>- React.JS</td>
                                    <td>- SASS</td>
                                </tr>
                            </table>
                        </div>
                        <div className="preview-txt">
                            <p>The cryptocurrency market is growing year after year and is considered by a lot as the future of technology. Stay up to date with the latest news and price data.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://react-todo.luisdeanda.now.sh" target="_blank" rel="noopener noreferrer">Visit App</a>
                            {/* <a href="https://github.com/Luis1D" target="_blank" rel="noopener noreferrer">Source Code</a> */}
                        </div>
                    </div>
                    
                </div>
                <div className="portfolio-cards">
                    <h3 className="portfolio-title"> > Team Builder</h3>
                    <div className="preview-container">
                    <div className="tech-used">
                            <table>
                                <tr>
                                    <th>Language</th>
                                    <th>Frameworks</th>
                                    <th>Styling</th>
                                </tr>
                                <tr>
                                    <td>- JavaScript</td>
                                    <td>- React.JS</td>
                                    <td>- SASS</td>
                                </tr>
                            </table>
                        </div>
                        <div className="preview-txt">
                            <p>The cryptocurrency market is growing year after year and is considered by a lot as the future of technology. Stay up to date with the latest news and price data.</p>
                        </div>
                        <div className="button-container">
                            <a href="https://user-onboarding.luisdeanda.now.sh/" target="_blank" rel="noopener noreferrer">Visit App</a>
                            {/* <a href="https://github.com/Luis1D" target="_blank" rel="noopener noreferrer">Source Code</a> */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Portfolio;