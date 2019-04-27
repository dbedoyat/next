import React, { Component, Fragment } from 'react'
import content from '../content/home.md';
import Head from 'next/head'

export default class Home extends Component {
    render() {
        let { html, attributes: { title, Portafolio } } = content;
        return (
            <Fragment> 
            <Head>
                <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <article>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{ __html: html }} />
                <ul>
                    {Portafolio.map((Portafolio, k) => (
                        <li key={k}>
                            <img src={Portafolio.image} alt={Portafolio.name}/>
                            <h2>{Portafolio.name}</h2>
                            <p>{Portafolio.description}</p>
                            <span>{Portafolio.tags}</span>
                        </li>
                    ))}
                </ul>
            </article>
            </Fragment>  
        )
    }
}