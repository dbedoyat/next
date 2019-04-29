
import Head from 'next/head';
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';



class BlogPost extends React.Component {
  static async getInitialProps({ query }) {
	  
    const slug = query.slug
    const response = await fetch(`https://dbedoyat.000webhostapp.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
    const post = await response.json();
    console.log(`Leyendo: ${post[0].title.rendered}`);
	return post[0]
	
	
  }

  render() {
    return (
      <Layout>
        <Head>
          <title>{this.props.title.rendered}</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />


          <meta property="og:title" content={this.props.title.rendered} />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={this.props._embedded['wp:featuredmedia'][0].source_url} />
        </Head>

        <div id="hero-post">
          	
			<div className="container-fluid fix">
				<div className="row">
					<div className="col-12">
							<h1 className="hero-title" dangerouslySetInnerHTML={{ __html: this.props.title.rendered }} />

					</div>
				</div>
			</div>
			<img src={this.props._embedded['wp:featuredmedia'][0].source_url}
			alt={this.props._embedded['wp:featuredmedia'][0].alt_text} className="hero-img" />
		</div>

		<div id="post" className="container-fluid">
			<div className="row">
				<div className="col-12">
       
					<p>{this.props.date}</p>
					<p>By {this.props._embedded.author[0].name}</p>
					{
					!!this.props._embedded['wp:featuredmedia'] &&
							<div className="img-post text-center  mt-4 mb-4">
						<img className="img-fluid"
						src={this.props._embedded['wp:featuredmedia'][0].source_url}
						alt={this.props._embedded['wp:featuredmedia'][0].alt_text}/>
					</div>
					}
					<div dangerouslySetInnerHTML={{ __html: this.props.content.rendered }} />
				</div>
			</div>
		</div>
        <style jsx>{`
						
			#hero-post {
             	width: 100%;
              	height: 200px;
				overflow:hidden;	
         	}
			 			
			#hero-post .hero-img {
             	width: 100%;
				 top:50%;

         	}
			#hero-post .hero-title {
				z-index: 10;
				position: absolute;
				top: 180px;
				left: inherit;
			}

			#hero-post .container-fluid{
				position: relative;
				top: -60px;
				display: block;
			}
			#post.container-fluid{
				max-width:720px;
			}
			
			.img-post img{
				margin:0 auto;
			}
								
        `}</style>


       
      </Layout>
    );
  }
}

export default BlogPost;