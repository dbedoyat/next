
import Head from 'next/head';
import React, { Component } from 'react'
import Link from 'next/link';
import api from '../api';
import Layout from '../components/layout';

class Blog extends Component {
  static async getInitialProps() {
    const posts = await api.posts().categories(1).embed();
    return { posts };
  }

  render() {
    const { posts } = this.props;

    return (
      <Layout>

        <Head>
            <title>Recent blog posts</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <h1>Recent blog posts</h1>
        {
          posts.map(post => (
            <div key={post.id}>
              <Link
                href={{
                    pathname: '/blogpost',
                    query: {
                    slug: post.slug,
                    },
                }}
                as={`/blog/${post.slug}`}
                >
                <a>
                  <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </a>
              </Link>
              <p>{post.date}</p>
              {
                !!post._embedded['wp:featuredmedia'] &&
                <img
                  width={500}
                  src={post._embedded['wp:featuredmedia'][0].source_url}
                  alt={post._embedded['wp:featuredmedia'][0].alt_text}
                />
              }
              <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
            </div>
          ))
        }
      </Layout>
    );
  }
}

export default Blog;
