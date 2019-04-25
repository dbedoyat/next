import React, { Component } from 'react'
import Link from 'next/link';
import api from '../api';
import Layout from '../components/layout';

class Index extends Component {
  static async getInitialProps() {
	const posts = await api.posts().embed();
    return { posts };
  }

  render() {
    const { posts } = this.props;
	console.log(`Posts cargados: ${posts[0].title.rendered}`);
return (

	<Layout>
		<h1>Recent blog posts</h1>
			<div className="container-fluid fix">
				<div className="row">
				{
					posts.map(post => (
						<div className="col-lg-4 col-md-4 col-12" key={post.id}>
						
							<Link href={{pathname: '/blogpost', query: {slug: post.slug,},}} as={`/blog/${post.slug}`}>
								<a>	
								<div className="img-content">
									{!!post._embedded['wp:featuredmedia'] &&
									<img
										className="img-fluid"
										src={post._embedded['wp:featuredmedia'][0].source_url}
										alt={post._embedded['wp:featuredmedia'][0].alt_text}
									/>
									}
								</div>
						
								
										<h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
									
							
									
								
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
