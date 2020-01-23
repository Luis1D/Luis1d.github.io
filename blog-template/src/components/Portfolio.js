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
                <h3 className="portfolio-title"> > CryptoNewsAndData.com</h3>
                <div className="preview-container cryptonews-app">
                    <a href="https://cryptocurrency-news.now.sh/" target="_blank" rel="noopener noreferrer">
                        <h3>Visit App</h3>
                    </a>
                </div>
                <div className="tech-used">
                    <h4>Tech Used:</h4>
                    <table>
                        <tr>
                            <th>Language</th>
                            <th>Frameworks</th>
                            <th>Styling</th>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>React.JS <br/>Chart.JS</td>
                            <td>SASS</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="portfolio-cards">
                <h3 className="portfolio-title"> > Todo App</h3>
                <div className="preview-container todo-app">
                    <a href="https://todo-app.luisdeanda.now.sh/" target="_blank" rel="noopener noreferrer">
                        <h3>Visit App</h3>
                    </a>
                </div>
                <div className="tech-used">
                    <h4>Tech Used:</h4>
                    <table>
                        <tr>
                            <th>Language</th>
                            <th>Frameworks</th>
                            <th>Styling</th>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>React.JS</td>
                            <td>SASS</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;