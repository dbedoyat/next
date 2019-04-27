import React, { Component, Fragment } from 'react'
import content from '../content/home.md';
import Head from 'next/head'

export default class Home extends Component {
    render() {
        let { html, attributes: { title, portafolio} } = content;
        return (
            <Fragment> 
            <head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </head>
            <article>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <ul>
                    {portafolio.map((item, k) => (
                        <li key={k}>
                            <img src={item.image} alt={item.name}/>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </article>
            </Fragment>  
        )
    }
}