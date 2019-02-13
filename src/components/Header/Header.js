import React, { Component } from 'react';
// import axios from '../../axios';

import logo from '../../assets/images/logo.svg';
import classes from './Header.module.scss';
import Navigation from '../Navigation/Navigation';

class Header extends Component {

    state = {
        // menu: {
        //     top: [],
        //     main: [],
        // },
        // menuLoaded: false,
        // level: 'corporate',
        sticky: false,
        error: false
    }

    // componentDidMount () {
    //     axios.get('/menu.json').then(response => {
    //         this.setState({
    //             menu: {
    //                 top: response.data.data.corporate.top,
    //                 main: response.data.data.corporate.main,
    //             },
    //             menuLoaded: true
    //         })
    //     }).catch(error => {
    //         this.setState({ error: true });
    //     });
    // }

    render() {

        // let navigation = <p>Loading</p>;

        // if( !this.state.error && this.state.menuLoaded ) {
        //     navigation = <Navigation className='main-menu' menu={this.props.mainMenu} />;
        // }

        return (
            <header className={`${classes.Header} ${this.state.sticky ? classes.Sticky : ''}`}>
                <img className={classes.logo} src={logo} alt="" />
                {/* {navigation} */}
                <Navigation className='main-menu' menu={this.props.mainMenu} />
            </header>
        )
    }
}

export default Header;