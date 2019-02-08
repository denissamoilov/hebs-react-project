import React, { Component } from 'react';
// import axios from '../../axios';

import classes from './Content.module.css';
import MainWrapper from '../MainWrapper/MainWrapper';

class Content extends Component {
    
    state = {
        hasSidebar: false,
        error: false
    }

    // componentDidMount() {
        
    //     axios.get(`/content.json?id=${this.props.pageId}`).then(response => {
            
    //         const data = response.data.data;
            
    //         console.log(data);

    //         this.setState({
    //             pageData: data
    //         });
            
    //     }).catch(error => {
    //         this.setState({ error: true });
    //     });
    // }

    render() {

        return (
            <main className={classes.Content}>
                <MainWrapper key={this.props.pageId}>
                    <h1>{this.props.pageContent.title}</h1>
                    <h2>{this.props.pageContent.subTitle}</h2>

                    <div dangerouslySetInnerHTML={ { __html: this.props.pageContent.copy } } />
                </MainWrapper>
            </main>
        )
    }
}

export default Content;
