import React, { Component } from 'react';

// import Layout from './containers/Layout/Layout';
import Header from './components/Header/Header';
import TopImage from './components/TopImage/TopImage';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <>
                <Header />
                <TopImage />
                <Content />
                <Footer />
                {/* <Layout /> */}
            </>
        );
    }
}

export default App;
