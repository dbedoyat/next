// next.config.js
const fetch = require('isomorphic-unfetch')
const withManifest = require('next-manifest')

const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    },
    async exportPathMap() {

        // we fetch our list of posts, this allow us to dynamically generate the exported pages
        const response = await fetch(
            `https://dbedoyat.000webhostapp.com/wp-json/wp/v2/posts?_embed=true&categories=1`
        )
        const postList = await response.json()

        // tranform the list of posts into a map of pages with the pathname `/post/:id`
        const pages = postList.reduce(
            (pages, post) =>
                Object.assign({}, pages, {
                    [`/post/${post.slug}`]: {
                        page: '/post',
                        query: { slug: post.slug }
                    }
                }),
            {}
        )

        // combine the map of post pages with the home
        return Object.assign({}, pages, {
            '/': { page: '/' },
            '/contact': { page: '/contact' },
            '/portfolio': { page: '/portfolio' },
        });

        

    }
});
