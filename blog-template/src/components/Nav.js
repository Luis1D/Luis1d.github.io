import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <li className="nav-item"><Link to="/Personal/">Personal</Link></li>
                <li className="nav-item"><Link to="/Blog/">Blog</Link></li>
                <li className="nav-item"><Link to="/Github/">Lambda</Link></li>
            </nav>
        </div>
    )
}

export default Nav;