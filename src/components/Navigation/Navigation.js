import React from 'react';

import classes from './Navigation.css';
import NavigationItem from './NavigationItem/NavigationItem';

function Navigation(props) {
    return (
        <nav className={`${classes[props.className]}`}>
            <ul>
                <NavigationItem link="/" active>Home</NavigationItem>
                <NavigationItem link="/">Contact</NavigationItem>
                {/* <NavLink className="navigation-link" to="/" brand>ReactSpeed</NavLink>
        <NavLink className="navigation-link" href="https://leanpub.com/reactspeedcoding">Book</NavLink>
        <NavLink className="navigation-link" href="https://github.com/manavsehgal/reactspeedcoding">Code</NavLink>
        <NavLink className="navigation-link" to="/blog">Blog</NavLink> */}
            </ul>
        </nav>
    );
}

export default Navigation;