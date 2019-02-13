import React, { Component } from 'react';

import classes from './Navigation.module.scss';
import NavigationItem from './NavigationItem/NavigationItem';

class Navigation extends Component {

    render() {

        let menuLinks = <p>Loading</p>;

        if(this.props.menu !== undefined) {
            menuLinks = this.props.menu.map(item => {
                // console.log('link: ', item);
                return <NavigationItem key={item.id} href={item.slug}>{item.name}</NavigationItem>
            });
        }
        
        
        return (
            <nav className={`${classes[this.props.className]}`}>
                <ul>
                    {menuLinks}
                    {/* <NavigationItem href="/" active>Home</NavigationItem>
                    <NavigationItem href="/">Contact</NavigationItem> */}
                    {/* <NavLink className="navigation-link" to="/" brand>ReactSpeed</NavLink>
            <NavLink className="navigation-link" href="https://leanpub.com/reactspeedcoding">Book</NavLink>
            <NavLink className="navigation-link" href="https://github.com/manavsehgal/reactspeedcoding">Code</NavLink>
            <NavLink className="navigation-link" to="/blog">Blog</NavLink> */}
                </ul>
            </nav>
        );
    }
}

export default Navigation;