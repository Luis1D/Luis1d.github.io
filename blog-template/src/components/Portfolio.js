import React from 'react';

const Portfolio = () => {
    return (
        <div className="portfolio-section display-item">
                <div className="portfolio-cards">
                    <h3 className="portfolio-title">Todo App</h3>
                    <a href="https://react-todo.luisdeanda.now.sh" target="_blank"><button className="portfolio-app">View App</button></a>
                    <a href="https://github.com/Luis1D" target="_blank"><button className="portfolio-github">View On Github</button></a>
                </div>
                <div className="portfolio-cards">
                    <h3 className="portfolio-title">Team Builder</h3>
                    <a href="https://user-onboarding.luisdeanda.now.sh" target="_blank"><button className="portfolio-app">View App</button></a>
                    <a href="https://github.com/Luis1D/User-Onboarding/tree/master/user-onboarding" target="_blank"><button className="portfolio-github">View On Github</button></a>
                </div>
        </div>
    )
}

export default Portfolio;