import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

class Index extends Component {

    static async getInitialProps() {
        const res = await fetch(`https://dbedoyat.000webhostapp.com/wp-json/wp/v2/posts?_embed=true`)
        const portfolio = await res.json();
        console.log(`Home > Portfolio: ${portfolio.length}`);
        return { portfolio }
    }
    render() {
        const { portfolio } = this.props;

        return (

            <Layout>
          
                <div className="container-fluid fix">
                    <div className="row">
                        {portfolio.map(post => (
                            <div className="col-md-4 col-sm-4 col-12 mb-4" key={post.id}>
                                <Link
                                    href={{
                                        pathname: '/post',
                                        query: {
                                            slug: post.slug,
                                        },
                                    }}
                                    as={`/post/${post.slug}`}>
                                    <a>
                                        <img className="img-fluid" src={post._embedded['wp:featuredmedia'][0].source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} />
                                        <h4 className="pl-3 pr-3 mt-2 mb-2">
                                            {post.title.rendered}
                                        </h4>
                                    </a>
                                </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>

            </Layout>
        );
    }
}

export default Index;
