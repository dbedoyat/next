import React from 'react';
import Router from "next/router";
import NProgress from "nprogress";
import App, { Container } from 'next/app';

// display a loader a the top of our page
/* Router.onRouteChangeStart = url => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();
*/

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
       
            <Component {...pageProps} />
        );
    }
}
export default MyApp;