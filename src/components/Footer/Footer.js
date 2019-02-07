import React from 'react';

import classes from './Footer.css';
import MainWrapper from '../MainWrapper/MainWrapper';
import Navigation from '../Navigation/Navigation';

const footer = (props) => (
    <footer className={classes.Footer}>
        <MainWrapper>
            <Navigation className='FooterMenu' />
        </MainWrapper>
    </footer>
)

export default footer;
