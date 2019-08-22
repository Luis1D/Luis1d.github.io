import React, { useState, useEffect } from 'react';
import GithubCard from './GithubCard';
import axios from 'axios';

class Github extends React.Component {
    constructor() {
        super();
        this.state = {
            github: []
        }
    };

    componentDidMount() {
        this.fetchGithub();
    };

    fetchGithub = () => {
        axios.get('https://api.github.com/users/luis1d/repos')
        .then(res => {
            const data = res.data
            this.setState({ github: data })
            console.log("RESPONSE", data);
        })
        .catch(err => {
            console.log("ERROR", err);
        })
    };
    render() {
        return (
            <div className="github display-item">
                <h2 className="github-title">The following are projects worked on while attending Lambda School</h2>
                <a href="https://github.com/Luis1D"><button className="view-github">View On Github</button></a>
                {
                    this.state.github.map(value => {
                        return <GithubCard name={value.full_name} repo={value.clone_url} key={value.id}/>
                    })
                }
            </div>
        )
    }
}

export default Github;