import React from 'react';
// import axios from '../../axios';

import classes from './Content.module.scss';
import MainWrapper from '../MainWrapper/MainWrapper';

const Content = (props) => {

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

    const subTitle = (props.pageContent.subTitle !== '') ? `<h2>${props.pageContent.subTitle}</h2` : null;

    return (
        <main className={classes.Content}>
            <MainWrapper key={props.pageId}>
                <h1>{props.pageContent.title}</h1>
                {subTitle}
                <div dangerouslySetInnerHTML={ { __html: props.pageContent.copy } } />
            </MainWrapper>
        </main>
    )
}

export default Content;
