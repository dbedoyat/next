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

			<section id="info">


			</section>
				<style jsx>{`

				header{
					height:150px;
				}
					#work{
						padding:16px;
					}
					

						.img-content img{
							max-width:100%;
						}

						.grid {
							display: grid;
							grid-template-columns: 1fr 1fr 1fr;
							grid-gap: 50px;
							grid-auto-flow: dense;
							width:100%;
							max-width:1200px;
							margin:0 auto;
							
						}
						.grid_item {
							background:var(--grid1);
							height: 100%;
							min-height: 300px;
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							padding:0 16px;
						}
						.grid_item:nth-child(2n) {
							background:var(--grid5);
						}
						.grid_item:nth-child(5n) {
							background:var(--grid3);
							grid-column: span 2;
						}
						.grid_item:nth-child(11n) {
							background:var(--grid4);
							grid-row: span 2;
						}

						.grid_item:nth-child(4n) {
							background: var(--grid2);
							height: 400px;
						}




								
						@media only screen and (max-width : 520px) {
							.grid {
								display: grid;
								grid-template-columns:auto !important;
							}
							.grid_item{
								grid-column: 1 !important;
								grid-row: auto !important;
   								height: 300px !important;
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