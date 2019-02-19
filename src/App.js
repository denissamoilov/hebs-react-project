import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import axios from './axios';

import './assets/global-css/reset.css';
import './assets/global-css/slick.min.css';

// import Layout from './containers/Layout/Layout';
import Header from './containers/Header/Header';
import TopImages from './containers/TopImages/TopImages';
import Content from './containers/Content/Content';
import Footer from './containers/Footer/Footer';

class App extends Component {

    state = {
        currentPageId: '1',
        menu: {
            top: [],
            main: [],
            footer: [],
            error: false
        },
        pageData: {
            title: '',
            subTitle: '',
            copy: '',
            error: false
        },
        topImages: [],
        promoTiles: [],
        menuLoaded: false,
        level: 'corporate',
        sticky: false,
        error: false
    }

    componentWillMount () {
        console.log('componentWillMount');

        // LOAD MENU

        axios.get('json/menu.json').then(response => {

            const data = response.data.data.corporate;

            this.setState({
                menu: {
                    top: data.top,
                    main: data.main,
                    footer: data.footer,
                },
                menuLoaded: true
            })
        }).catch(error => {
            this.setState({ menu: {error: true } });
        });

        // LOAD CONTENT

        axios.get(`json/content.json?id=${this.state.currentPageId}`).then(response => {
            
            const data = response.data.data;

            this.setState({
                pageData: {
                    title: data.name,
                    subTitle: data.sub_header,
                    copy: data.description
                }
            });
            
        }).catch(error => {
            this.setState({ pageData: {error: true } });
        });

        // LOAD PROMOTILES

        axios.get(`json/featured.json`).then(response => {
            
            const data = response.data.data;

            this.setState({
                promoTiles: data
            });
            
        }).catch(error => {
            this.setState({ pageData: {error: true } });
        });

    }

    render() {

        // let content = <p style={{textAlign: 'center'}}>Loading Content...</p>

        // if (this.state.pageData.title.length !== 0 ) {
        //     content = <Content pageId={this.state.currentPageId} pageContent={this.state.pageData} />;
        // }

        return (
            <BrowserRouter>
                <>
                    <Header mainMenu={this.state.menu.main} topMenu={this.state.menu.top} />
                    <TopImages />
                    {/* {content} */}
                    {/* <Content pageId={this.state.currentPageId} pageContent={this.state.pageData} /> */}
                    <Footer footerMenu={this.state.menu.footer} />
                    {/* <Layout /> */}
                </>
            </BrowserRouter>
        );
    }
}

export default App;
