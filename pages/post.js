
import Head from 'next/head';
import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/Layout';



class portafolio extends Component {
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
          <title>David Bedoya - Portfolio: {this.props.title.rendered}</title>
          <meta charSet='utf-8' />
					<meta name="description" itemProp="description" content={`David Bedoya - Portfolio: ${this.props.title.rendered}`}/>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property="og:title" content={`David Bedoya - Portfolio: ${this.props.title.rendered}`}  />
          <meta property="og:type" content="website" />
          <meta property="og:image" content={this.props._embedded['wp:featuredmedia'][0].source_url} />
        </Head>

        <div id="hero-post">
          	
			<div className="container-fluid fix post">
				<div className="row">
					<div className="col-12">
							<h1 className="hero-title" dangerouslySetInnerHTML={{ __html: this.props.title.rendered }} />

					</div>
				</div> 
			 </div>
			<img src={this.props._embedded['wp:featuredmedia'][0].source_url}
			alt={this.props._embedded['wp:featuredmedia'][0].alt_text} className="hero-img" />
		</div>

			<div  className="container-fluid post">
			<div className="row">
				<div className="col-12 mt-5">
				
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
					width: 110%;
					margin-top: -5%;
					filter: blur(25px);
					margin-left: -5%;
					transform: translateY(-50%);
			}
			#hero-post .hero-title  {
					z-index: 10;
					position: absolute;
					top: 180px;
					left: inherit;
					color: #fff;
			}

			#hero-post .container-fluid{
				position: relative;
				top: -60px;
				display: block;
			}
			div#hero-post:before {
					content: '';
					width: 100%;
					height: 200px;
					background: rgba(0, 0, 0, 0.5);
					position: absolute;
					z-index: 1;
			}
			.container-fluid.post{
				max-width:720px;
			}
			
			.img-post img{
				margin:0 auto;
			}

      @media only screen and (max-width : 768px) {
					#hero-post .hero-img {
							transform: translateY(0%);
							filter: blur(5px);
					}

					#hero-post .hero-title  {

						top: 130px;
						font-size:36px;
					}
				}					
        `}</style>


       
      </Layout>
    );
  }
}

export default portafolio;