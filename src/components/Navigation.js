import React from 'react';
import { Route, Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="inner">
            <h1><Link to="/" id="logo">Kev's Secret Santa List</Link></h1>
            <nav id="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">about</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;