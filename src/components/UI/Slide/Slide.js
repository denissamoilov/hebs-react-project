import React from 'react';

import classes from './Slide.scss';

const slide = (props) => (
    <div className={classes.Slide} style={{...props.style}}>
        {props.children}
    </div>
)

export default slide;