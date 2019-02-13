import React from 'react';

import classes from './Thumbnail.scss';

const thumbnail = (props) => (
    <div className={classes.Thumbnail}>
        {children}
    </div>
)

export default thumbnail;