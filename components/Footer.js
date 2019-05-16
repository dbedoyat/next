import React, { Component } from 'react'
import Link from 'next/link';
import { FaCodepen, FaGithub, FaInstagram, FaDribbble } from 'react-icons/fa';

class Footer extends Component {

    render() {

        return (

            <footer>
                
                <div className="container-fluid fix">
                    <div className="row">
                    
                        <div className="col-md-6 col-12">
                            <h3>David Bedoya</h3>
                            <p>UI Designer</p>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="social">
                            <a href="" target="_blank">
                                <FaCodepen />
                            </a>
                            </div>
                            <div className="social">
                                <a href="" target="_blank">
                                    <FaGithub />
                                </a>
                            </div>
                            <div className="social">
                                <a href="" target="_blank">
                                    <FaInstagram />
                                </a>
                            </div>

                            <div className="social">
                                <a href="" target="_blank">
                                    <FaDribbble />
                                </a>
                            </div>
                        </div>
                    
                    </div>
                
                </div>


            
                <style jsx>{`
                
                footer{
                    background:#000;
                    font-family: "Open Sans", sans-serif;
                    padding:20px;
                   

                }

                footer h3,
                footer h5,
                footer i,
                footer p,
                footer .social a{
                     color:#fff;

                }

                footer.social{
                    display:inline;
                    margin:10px;
                    width:auto;
                }

      


                   
                `}</style>

            </footer>
        );
    }
}


export default Footer;