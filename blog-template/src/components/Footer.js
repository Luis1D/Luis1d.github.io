import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <ul className="footer-ul">
            <div className="list-container">
                <span className="footer-head">Social</span>
                <div className="icon-container">
                    <a href="https://www.instagram.com/code.with.luis/"><img src={require("../assets/instagram.svg")} alt="Instagram" className="social-icon" /></a>
                    <a href="https://twitter.com/CodeWithLuis"><img src={require("../assets/twitter.svg")} alt="twitter" className="social-icon" /></a>
                </div>
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            </div>
            <div className="footer-spacer"></div>
            <div className="list-container">
                <span className="footer-head">Directory</span>
                <li className="f-nav-item"><NavLink exact to="/" className="footer-link" activeStyle={{color: '#F64B29'}}>About</NavLink></li>
                <li className="f-nav-item"><NavLink to="/Portfolio/" className="footer-link" activeStyle={{color: '#F64B29'}}>Portfolio</NavLink></li>
                {/* <li className="nav-item"><NavLink to="/Blog/" activeStyle={{color: '#F64B29'}}>Blog</NavLink></li> */}
                <li className="f-nav-item"><NavLink to="/Github/" className="footer-link" activeStyle={{color: '#F64B29'}}>Github</NavLink></li>
            </div>
            </ul>
        </div>
    )
}

export default Footer;