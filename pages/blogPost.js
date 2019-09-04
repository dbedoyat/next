import React, { Component } from 'react';
// RichText is give to us
import { RichText } from 'prismic-reactjs';
// A new API request that will create in just a tick
import { getBlogPostAPI } from '../api';
import linkResolver from '../helpers';
// Here we are reusing our layout again
import Layout from '../components/Layout';

export default class BlogPost extends Component {
    static async getInitialProps(context) {
        // we get the slug of the post so that we can
        // query the API with it
        const { slug } = context.query;
        const response = await getBlogPostAPI(slug);
        return {
            post: response
        };
    }

    render() {
        const post = this.props.post.data;
        return (
            <Layout>
                <div id="hero" style={{
                    backgroundImage:`url(${post.image.url} )`}}>
                </div>
                <div className="container-fluid fix">
                    <article>
                        <h1>{post.title.length ? post.title[0].text : ''}</h1>
                        <img src={post.title.length ? post.image.url : ''} alt=""/>
                        {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
                        {RichText.render(post.body, linkResolver)}
                    </article>
                </div>
                <style jsx>{`
                    #hero{
                        height: 250px;
                        width: 100%;
                        background-repeat:no-repeat;
                        background-size:cover;
                        background-position:50% 50%;

                    }
                    #hero::before {
                        content: "";
                        width: 100%;
                        height: 250px;
                        position: absolute;
                        z-index: 1;
                        background: rgba(0, 0, 0, 0.5);
                    }

                   article {
                        width: 100%;
                        max-width: 800px;
                        line-height: 1.8;
                        font-size: 20px;
                        margin: 0 auto;
                    }

                   
                `}</style>

            </Layout>
        );
    }
}