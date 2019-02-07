import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg';
import classes from './Header.css';
import Navigation from '../Navigation/Navigation';

class Header extends Component {

    state = {
        sticky: false
    }

    render() {
        return (
            <header className={`${classes.Header} ${this.state.sticky ? classes.Sticky : ''}`}>
                <img className={classes.logo} src={logo} alt="" />
                <Navigation className='main-menu' />
            </header>
        )
    }
}

export default Header;