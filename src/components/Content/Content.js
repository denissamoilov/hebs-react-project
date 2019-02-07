import React, { Component } from 'react';

import classes from './Content.css';
import MainWrapper from '../MainWrapper/MainWrapper';

class Content extends Component {
    state = {
        hasSidebar: false
    }

    render() {
        return (
            <div className={classes.Content}>
                <MainWrapper>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <p>Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit libero, a pharetra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>
                </MainWrapper>
            </div>
        )
    }
}

export default Content;
