import React from 'react';

import photo from '../../assets/images/photo.jpg';
import classes from './TopImage.css';

const topImage = () => {
    return (
        <div className={classes.TopImage}>
            <figure style={{backgroundImage: `url(${photo})`}}>
                <img src={photo} alt="" />
                <figcaption>Commodo Vestibulum Sem</figcaption>
            </figure>
        </div>
    )
}

export default topImage;
