import React, { Component } from 'react';
import axios from '../../axios';
import Slider from "react-slick";

import * as Button from '../../components/UI/Button/Button';

import classes from './TopImages.module.scss';

class TopImage extends Component {

    state = {
        images: []
    }

    // LOAD TOP IMAGES
    componentWillMount () {
        axios.get('/?format=json').then(response => {

            const data = response.data;

            this.setState({
                images: data.top_images
            });

        }).catch(error => {
            this.setState({
                error: true
            });
        });
    }

    render() {

        let images = this.state.images.map( (image, key) => {

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

        let settings = {
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
}

export default TopImage;
