import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="nav">
            <nav>
                <li className="nav-item"><NavLink to="/Personal/" activeStyle={{color: '#F64B29'}}>Personal</NavLink></li>
                <li className="nav-item"><NavLink to="/Blog/" activeStyle={{color: '#F64B29'}}>Blog</NavLink></li>
                <li className="nav-item"><NavLink to="/Github/" activeStyle={{color: '#F64B29'}}>Github</NavLink></li>
            </nav>
        </div>
    )
}

export default Nav;