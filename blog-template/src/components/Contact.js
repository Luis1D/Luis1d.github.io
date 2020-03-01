import React from 'react';

const Contact = () => {
    return (
        <div id="Contact">
            <div className="contact-body">
                <h2 className="about-header"> > Contact</h2>
                <img 
                    alt="contact"
                    src={ require('../assets/contact.svg') }
                    className="contact-icon"
                />
            </div>
            <h3>Find me on: </h3>
            <hr/>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/luis-de-anda-368aab16b/">
                        <img src={ require('../assets/linkedin.svg') } alt="linkedin" className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/_luisde/">
                        <img src={ require('../assets/instagram.svg') } alt="instagram" className="icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Luis1D">
                        <img src={ require('../assets/github-black.svg') } alt="github" className="icon" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact;