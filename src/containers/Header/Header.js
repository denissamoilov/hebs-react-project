import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg';
import classes from './Header.css';
import Navigation from '../../components/Menu/Navigation';

class Header extends Component {

    state = {
        sticky: false
    }

    render() {
        return (
            <header className={classes.Header}>
                <img className={classes.logo} src={logo} alt="" />
                <Navigation />
            </header>
        )
    }
}

export default Header;