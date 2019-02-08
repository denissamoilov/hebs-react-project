import React from 'react';
import Swiper from 'react-id-swiper';

import photo from '../../assets/images/photo.jpg';
import classes from './TopImage.module.css';

const topImage = (props) => {

    console.log('props: ', props);

    let images = <figure style={{backgroundImage: `url(${photo})`}}>
                    <img src={photo} alt="" />
                    <figcaption>Commodo Vestibulum Sem</figcaption>
                </figure>;

    images = props.images.map( (image, key) => {
        return (
            <figure key={key} style={{backgroundImage: `url(${image.path})`}}>
                <img src={image.path} alt="" />
                <figcaption>{image.title}</figcaption>
            </figure>
        );
    });

    const params = {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
            spaceBetween: 30
        };

    return (
        <div className={classes.TopImage}>
            <Swiper {...params} >
                {images}
            </Swiper>
        </div>
    )
}

export default topImage;
