import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';
import { getBlogPostsAPI } from '../api';
import { linkResolver } from '../helpers';



	const Index = ({ posts = [] }) => (

			<Layout>
			<section id="work" className="text-center">
				
				
				<div className="grid">
					{posts.map((post, index) => (
				
							<div key={index} className="grid_item">
								<Link
									as={linkResolver(post)}
									href={`/blogPost?slug=${post.uid}`}
									passHref>
									<a>

										<div className="img-content" alt={post.data.title[0].text} >
										<img src={post.data.image.url}  alt=""/>
										</div>

									</a>
								</Link>
							</div>
	
					))}

				
			
				</div>
			
			</section>

	
					<style jsx>{`
						#work{
							padding:16px;
						}
						.grid {
							display: grid;
							grid-gap: 20px;
							grid-template-columns: 1fr 1fr 1fr;
							background-color: #fff;
							color: #444;
							width:100%;
							max-width:1200px;
							margin:0 auto;
						}

							.box {
								background-color: transparent;
								color: var(--dark);
								border-radius: 7px;
								padding: 0;
								min-height: 200px;
								font-size: 24px;
								font-weight: 700;
								grid-column: auto;
								grid-row: auto;
							}
							.grid_item{
								grid-column: 1 !important;
								grid-row: auto !important;
   								height: 300px !important;
							}


									
							@media only screen and (max-width : 520px) {
								.grid {
									display: grid;
									grid-template-columns:auto !important;
								}
								.box{
									grid-column: 1 !important;
									grid-row: auto !important;
								}
												
							}					


					`}</style>


		
			</Layout>
);

Index.getInitialProps = async () => {
	// Here we call the API and request 5 documents
	const response = await getBlogPostsAPI();
	return {
		posts: response.results
	};
};

export default Index;