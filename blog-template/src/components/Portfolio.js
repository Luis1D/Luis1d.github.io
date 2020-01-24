import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio-section display-item">
            <div className="portfolio-cards">
                <h3 className="portfolio-title"> > Crypto News And Data</h3>
                <div className="preview-container cryptonews-app">
                    <a href="https://cryptocurrency-news.now.sh/" target="_blank" rel="noopener noreferrer">
                        <h3>Visit App</h3>
                    </a>
                </div>
                <div className="tech-used">
                    <h4>Tech Used:</h4>
                    <table>
                        <tbody>
                            <tr>
                                <th>Language</th>
                                <th>Frameworks</th>
                                <th>Styling</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>JavaScript</td>
                                <td>React.JS <br/>Chart.JS</td>
                                <td>SASS</td>
                            </tr>
                        </tbody>
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
                        <tbody>
                            <tr>
                                <th>Language</th>
                                <th>Frameworks</th>
                                <th>Styling</th>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>JavaScript</td>
                                <td>React.JS</td>
                                <td>SASS</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;