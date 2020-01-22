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
                    <div className="preview-container cryptonews-app">
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
                        <div className="button-container">
                            <a href="https://cryptonews-app.now.sh/" target="_blank" rel="noopener noreferrer">Visit App</a>
                        </div>
                    </div>

                </div>
                <div className="portfolio-cards">
                    <h3 className="portfolio-title"> > Todo App</h3>
                    <div className="preview-container todo-app">
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
                                    <td>- React.JS</td>
                                    <td>- SASS</td>
                                </tr>
                            </table>
                        </div>
                        <div className="button-container">
                            <a href="https://todo-app.luisdeanda.now.sh/" target="_blank" rel="noopener noreferrer">Visit App</a>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Portfolio;