import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio-section display-item">
            <div className="portfolio-cards">
                <h3 className="portfolio-title"> > Crypto News And Data</h3>
                <div className="preview-container">
                    <div className="desktop-container">
                        <div className="frame cryptonews">
                            <a href="https://cryptocurrency-news.now.sh/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="legs"></div>
                        <div className="bottom"></div>
                    </div>
                    <div className="mobile-container">
                        <div className="top"></div>
                        <div className="frame cryptonews">
                            <a href="https://cryptocurrency-news.now.sh/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
            <div className="portfolio-cards">
                <h3 className="portfolio-title"> > Reusablelighters.com</h3>
                <div className="preview-container">
                    <div className="desktop-container">
                        <div className="frame reusable-lighters">
                            <a href="https://reusablelighters.com/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="legs"></div>
                        <div className="bottom"></div>
                    </div>
                    <div className="mobile-container">
                        <div className="top"></div>
                        <div className="frame reusablelighters">
                            <a href="https://reusablelighters.com/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>
                
            </div>
            <div className="portfolio-cards">
                <h3 className="portfolio-title"> > Todo App</h3>
                <div className="preview-container">
                    <div className="desktop-container">
                        <div className="frame todo-app">
                            <a href="https://todo-app.luisdeanda.now.sh/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="legs"></div>
                        <div className="bottom"></div>
                    </div>
                    <div className="mobile-container">
                        <div className="top"></div>
                        <div className="frame todoapp-mobile">
                            <a href="https://todo-app.luisdeanda.now.sh/" target="_blank" rel="noopener noreferrer">
                                <h3>Visit App</h3>
                            </a>
                        </div>
                        <div className="bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;