import React from 'react';

import classes from './Footer.module.css';
import MainWrapper from '../MainWrapper/MainWrapper';
import Navigation from '../Navigation/Navigation';

const footer = (props) => (
    <footer className={classes.Footer}>
        <MainWrapper>
            <Navigation className='FooterMenu' menu={props.footerMenu} />
        </MainWrapper>
    </footer>
)

export default footer;
