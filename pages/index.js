import React, { Component } from 'react'
import Link from 'next/link';
import Layout from '../components/Layout';
import { getBlogPostsAPI } from '../api';
import { linkResolver, hrefResolver } from '../helpers';
import { Parallax, ParallaxLayer } from 'react-spring/addons.cjs'


	const url = (name, wrap = false) => `${wrap ? 'url(' : ''}/static/img/${name}.svg${wrap ? ')' : ''}`
	const Index = ({ posts = [] }) => (

			<Layout>
			<Parallax pages={8} >
				<section id="work" className="text-center">
			 
 
					<ParallaxLayer className="background" offset={0} speed={0.2} factor={8} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover', filter: 'brightness(0)', left: '0', backgroundRepeat: 'repeat', backgroundPosition: 'center top'}} />
					<ParallaxLayer className="background" offset={0} speed={0.1} factor={8} style={{ backgroundImage: url('starsinverse', true), backgroundSize: 'cover', filter: 'brightness(0.6)', left: '0' , backgroundRepeat: 'repeat', backgroundPosition: 'center top'}} />
						
						{posts.map((post, index) => (
					
								<ParallaxLayer
									key={index} 
									offset={`${index}`}
									speed={0.3}
									className="parallaxItem "
										>

						
									<div className="grid_item"
									data-aos="zoom-in"
									data-aos-duration="300"
									data-aos-delay="200"
									>
									<Link
										as={linkResolver(post)}
										href={hrefResolver(post)}
										passHref>
										<a>
											<div className="text-content content-pc">
												<h1>{post.data.title[0].text}</h1>
											
												<span>{post.data.tags[0].textag}</span>
												<span>{post.data.tags[1].textag}</span>
												<span>{post.data.tags[2].textag}</span>
											</div>
											<div className="img-content" alt={post.data.title[0].text} >
											
												<img src={post.data.image.url} alt="" />
											</div>

											<div className="text-content text-center content-mobile">
												<h1>{post.data.title[0].text}</h1>
											
												<span>{post.data.tags[0].textag}</span> 
												<span>{post.data.tags[1].textag}</span> 
												<span>{post.data.tags[2].textag}</span>
											</div>

										</a>
									</Link>
								</div>
								
							</ParallaxLayer>

							
		
						))}

					
					<p className="end">THE END</p>
			
				
			</section>

	
					<style jsx>{`
						#work{
							padding:0;
							width:100%;
							max-width:1200px;
							margin: 0 auto;
						}
						.grid {
							display: grid;
							grid-gap: 50px;
							grid-template-columns:auto;
							background-color: #fff;
							color: #444;
						
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
								grid-column: 1;
								grid-row: auto;
							
								
							
									
							}
							.grid_item{
								max-width:800px;
								grid-column: 1 !important;
								grid-row: auto !important;
								height:300px;
								margin: 0 auto;
								display: block;
   								width: 100%;
								display: flex;
								flex-direction: column;
								justify-content: center;
								align-items: center;
							}



							.grid_item a{
							
								width: 800px;
								max-width: 100%;
								display: block;
								margin: 0 auto;
							}
		
							.text-content {
								width: calc(100% - 430px); 
								float: left;
								text-align: left;
								padding: 15px;
							}

							.text-content h1 {
								font-size: 42px;
								margin:0;
								    margin-bottom: 20px;
							}
							.text-content p {
								font-size: 24px;

								color:#707070;
							}

							.text-content span{
							
								margin-right: 20px;
								font-size: 14px;
								border-radius: 40px;
								font-weight: 600;
							}

							.text-content span:last-child{
							
								margin-right: 0;
								
							}
							.img-content {
								width: 400px;
								margin: 0 auto;
								float:left;
								overflow: hidden;
    							display: flex;
							}
							.grid_item .img-content img{
								width: 100%;
								transition: all ease 300ms;
							}
							.grid_item:hover .img-content img {
								transform: scale(1.1);
								transition: all ease 300ms;
							}


							.content-pc{
								display:block;
							}
							.content-mobile{
								display:none;
							}

							.end{
								position: absolute;
								bottom: 0;
								width: 100%;
								font-weight: 700;
								letter-spacing: 3px;
								color:#707070;
								background:#fff;
								padding:5px;
							}

							.end:before{
								width: calc(100% - 30px);
								background:#707070;
								height:2px;
								content:'';

							}

							.end{
								width: calc(100% - 30px);
							}
									
							@media only screen and (max-width : 520px) {

							
								.grid {
									display: grid;
									grid-template-columns:auto !important;
									height:auto;
								}
								.box{
									grid-column: 1 !important;
									grid-row: auto !important;
								}
								.grid_item{
							
									margin-bottom: 50px;
									width: calc(100% - 30px);
									height: 500px;
									max-width: 100%;
								}
								
								.content-pc{
									display:none;
								}
								.content-mobile{
									display:block;
									text-align:center;
								}

								.text-content, .img-content{
									width:100%;
									padding:0;
							
								}

								.text-content h1 {
									font-size: 26px;
									margin: 10px 0 15px;
								}
								
								.text-content p{
									margin: 10px 0 15px;
								}

								.text-content span{
							
						
								font-size: 16px;
								color:#707070
								
							}

								.grid_item a {
									margin: 0 auto;
									padding: 25px;
									display: block;
									width: calc(100% - 50px);
								}
																				
							}					


					`}</style>

				</Parallax>
		
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