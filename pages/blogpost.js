
import Head from 'next/head';

import React, { Component } from 'react'
import Layout from '../components/layout';
import Link from 'next/link';
import api from '../api';

class BlogPost extends Component {
  static async getInitialProps({ query: { slug }, res }) {
    const post = (await api.posts().slug(slug).embed())[0];
    if (post) {
      return { post };
    }
  
    if (res) {
      res.statusCode = 404;
    }
    return { error: true };
  }

  render() {

    if (this.props.error) {
      return <div>Post not found</div>;
    }
    const { post } = this.props;

    return (
      <Layout>
        <Head>
            <title>{post.title.rendered }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        <p>{post.date}</p>
        <p>By {post._embedded.author[0].name}</p>
        {
          !!post._embedded['wp:featuredmedia'] &&
          <img
            width={500}
            src={post._embedded['wp:featuredmedia'][0].source_url}
            alt={post._embedded['wp:featuredmedia'][0].alt_text}
          />
        }
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Layout>
    );
  }
}

export default BlogPost;