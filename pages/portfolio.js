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
                    <div className="col-12 text-center mt-5 mb-5">
						<h2>Portfolio</h2>
					</div>
						{portfolio.map(post => (
							<div className="col-md-4 col-sm-4 col-12 mb-4" key={post.id}>
								<div className="card">
								<Link
									href={{
										pathname: '/post',
										query: {
											slug: post.slug,
										},
									}}
									as={`/portfolio/${post.slug}`}
								>
									<a>
										
										<h4 className="titlePort pl-3 pr-3 mt-2 mb-2"  dangerouslySetInnerHTML={{ __html: post.title.rendered }}>
										
										</h4>
										

										<div className="description pl-3 pr-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
									</a>
								</Link>
								</div>
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
