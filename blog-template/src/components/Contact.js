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
                <li><a href="https://www.linkedin.com/in/luis-de-anda-368aab16b/">LINKEDIN</a></li>
                <li><a href="https://www.instagram.com/code.with.luis/">INSTAGRAM</a></li>
                <li><a href="https://github.com/Luis1D">GITHUB</a></li>
            </ul>
        </div>
    )
}

export default Contact;