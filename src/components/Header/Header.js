import React, { Component } from 'react';

import logo from '../../assets/images/logo.svg';
import classes from './Header.css';
import MainMenu from '../Menu/MainMenu/MainMenu';

class Header extends Component {

    state = {
        sticky: false
    }

    render() {
        return (
            <header className={classes.Header}>
                <img className={classes.Logo} src={logo} alt="" />
                <MainMenu />
            </header>
        )
    }
}

export default Header;