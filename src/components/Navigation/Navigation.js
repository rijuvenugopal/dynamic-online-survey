import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
    <nav className="NavigationComponent">
        <Link to="/name"><button>back</button></Link>
        <Link to="/age"><button>next</button></Link>
    </nav>
);

export default Navigation;