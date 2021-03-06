import React, { Component } from 'react';
// RichText is give to us
import { RichText } from 'prismic-reactjs';
// A new API request that will create in just a tick
import { getBlogPostAPI } from '../api';
import linkResolver from '../helpers';
// Here we are reusing our layout again
import Layout from '../components/Layout';
import { FiExternalLink } from "react-icons/fi";

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
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="300">
                            {post.title.length ? post.title[0].text : ''}

                        </h1>

                        <br/>
                        <span className="tags">{post.tags[0].textag}</span>
                        <span className="tags">{post.tags[1].textag}</span>
                        <span className="tags">{post.tags[2].textag}</span>

                        <img className="mt-5 featured"
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

                   
                        <a className={`gowebsite ${post.show_website} `} target="_blank" href={post.url_website.length ? post.url_website : ''}>
                                Go to the website <FiExternalLink/>    
                            </a>
                   
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

                    article h1{
                        line-height:1.2;
                        display: inline-block;
                        margin-bottom:5px
                    }

                    .featured{
                        margin-top:30px;
                    }
                    article img{
                        width:100%;
                        max-width:100%;
                    }
                    .gowebsite.no,
                    .gowebsite{
                        display:none;
                    }
                    .gowebsite.yes{
                        display:block;
                    }

                    .gowebsite {
                        width: auto;
                        background: #000;
                        padding: 12px 20px;
                        color: #fff;
                        border-radius: 23px;
                        position: fixed;
                        bottom: 20px;
                        left: 50%;
                        transform: translateX(-50%);
                        box-shadow:0 3px 10px 0  rgba(0,0,0,0.12);
                        transition:ease all 300ms;
                        text-align:center;
                        
                    }
                     .gowebsite:hover {
                        background:#fff;
                        color:#000;
                        transform: translateX(-50%);
                        transition:ease all 300ms;
                    }

                  span.tags {
                    margin-right: 20px;
                    font-size: 14px;
                    border-radius: 40px;
                    font-weight: 600;
                }

                                
                @media only screen and (max-width : 520px) {
                    .gowebsite {
                        width: calc(100% - 100px);
                        text-align: center;
                    }
                }

                   
                `}</style>

            </Layout>
            );
        }
    }
}