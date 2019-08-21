import React from 'react';

const GithubCard = props => {
    return (
        <div className="github-card">
            <h2><a href={props.repo}>{props.name}</a></h2>
        </div>
    )
}

export default GithubCard;