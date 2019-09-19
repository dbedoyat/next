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
        const { uid } = context.query;
        const response = await getBlogPostAPI(uid);
        return {
            post: response
        };
    }

   
    render() {
        const post = this.props.post.data;

        if (!this.props.post) {
            return <div>404 Error!</div>
        }
        else {
            return (
            <Layout>
    
                <div className="container-fluid fix">
                    <article>
                        <h3
                            data-aos="fade-up"
                            data-aos-duration="300"
                            

                        >{post.title.length ? post.title[0].text : ''}</h3>
                        <img
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-delay="200"
                            src={post.title.length ? post.image.url : ''} alt={post.title.length ? post.title[0].text : ''} />
                        {/* Here we pass our rich text field to Prismics RichText renderer, along with our linkResolver */}
                        
                        <div data-aos="fade-up"
                            data-aos-duration="300"
                            data-aos-delay="400" className="content-text">
                            {RichText.render(post.body, linkResolver)}
                        </div>
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
                        margin-top:60px;
                    }

                    article h3{
                        line-height:1.2;
                    }
                    article img{
                        width:100%;
                        max-width:100%;
                    }

                   
                `}</style>

            </Layout>
            );
        }
    }
}