import React from 'react';
import Slider from "react-slick";

import * as Button from '../UI/Button/Button';
import classes from './TopImage.module.scss';

const TopImage = (props) => {

    let images = props.images.map( (image, key) => {

        const caption = (image.title !== '') ? <figcaption>{image.title}</figcaption> : null;

        return (
                <div key={key}>
                    <figure style={{backgroundImage: `url(${image.path})`}}>
                        <img src={image.path} alt="" />
                        {caption}
                    </figure>
                </div>
        );
    });

    var settings = {
        customPaging: function(i) {
            return (
                <Button.SliderDot text={`Photo ${i}`} />
            );
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Button.ArrowRight text="Next Photo" />,
        prevArrow: <Button.ArrowLeft text="Previous Photo" />
    };

    return (
        <div className={classes.TopImage}>
            <Slider className={classes.SlickSlider} {...settings}>
                {images}
            </Slider>
        </div>
    )
}

export default TopImage;
