import React from 'react';

import classes from './Footer.module.scss';
import MainWrapper from '../MainWrapper/MainWrapper';
import Navigation from '../../components/Navigation/Navigation';

const footer = (props) => (
    <footer className={classes.Footer}>
        <MainWrapper>
            <Navigation className='footer-menu' menu={props.footerMenu} />
        </MainWrapper>
    </footer>
)

export default footer;
