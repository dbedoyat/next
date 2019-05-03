import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';


class Index extends Component {

	static async getInitialProps() {


		const res = await fetch(`https://dbedoyat.000webhostapp.com//wp-json/wp/v2/posts?_embed=true`)
		const portfolio = await res.json();
		console.log(`Home > Portfolio: ${portfolio.length}`);
		
		return { portfolio }
	
}


	render() {
		const { portfolio } = this.props;
	
		return (

			<Layout>
				<div id="hero">
				
				</div>

				<div className="container-fluid fix">
					<div className="row">

					<div className="col-12 text-center mb-5">
						<h2>Showcase</h2>
					</div>
						{portfolio.map(post => (
							<div className="col-md-4 col-sm-4 col-12 " key={post.id}>
								<div className="card">
								<Link
									href={{
										pathname: '/post',
										query: {
											slug: post.slug,
										},
									}}
									as={`/post/${post.slug}`}
								>
									<a>
										<div className="img-content">
											<img className="img-fluid" src={post._embedded['wp:featuredmedia'][0].source_url} alt={post._embedded['wp:featuredmedia'][0].alt_text} />
										</div>
										<h3 className="pl-3 pr-3 mt-2 mb-2">
											{post.title.rendered}
										</h3>
										

										<div className="description pl-3 pr-3" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
									</a>
								</Link>
								</div>
							</div>
						))
						}
					</div>
				</div>

				<style jsx>{`

					body{
						background:#F8F8F8 !important;
					}
						
					#hero{
						width:100%;
						height:400px;
						background:#ddd;
						margin-bottom:40px;
					}
					.card {
						box-shadow: 0 2px 20px 0 rgba(0,0,0,0.05);
						border: 0;
						transition: box-shadow .3s ease-out, transform .3s ease-out, opacity .2s ease-out;
						transition-delay: .1s;
						border-radius: 4px;
						transform: translateZ(0);
						background-color: #fff;
						overflow: hidden;
						height: 100%;
						text-decoration:none;
					}

					.card h3 {
						color: #303030;
						font-size: 24px;
						font-weight:600;
					}

					
                
                `}</style>


			</Layout>
		);
	}
}

export default Index;
