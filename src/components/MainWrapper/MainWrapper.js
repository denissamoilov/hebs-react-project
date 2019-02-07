import React from 'react';

import classes from './MainWrapper.css';

const mainWrapper = (props) => (
    <div className={classes.MainWrapper}>{props.children}</div>
)

export default mainWrapper;