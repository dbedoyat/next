import React, { Component } from 'react'
import { FaCodepen, FaLinkedin, FaInstagram } from 'react-icons/fa';

class Footer extends Component {

    render() {

        return (

            <footer>
                
                <div className="container-fluid fix">
                    <div className="row align-items-center">
                    
                        <div className="col-md-6 col-12 name">
                            <h3>David Bedoya</h3>
                            <p>Web Designer</p>
                        </div>
                        <div className="divSocial col-md-6 col-12">
                            <div className="social">
                            <a href="https://codepen.io/dongato" target="_blank" aria-label="codepen">
                                <FaCodepen />
                            </a>
                            </div>
                            <div className="social">
                                <a href="https://www.linkedin.com/in/dbedoyat" target="_blank" aria-label="linkedIn">
                                    <FaLinkedin />
                                </a>
                            </div>
                            <div className="social">
                                <a href="https://instagram.com/david.frontend" target="_blank" aria-label="instagram">
                                    <FaInstagram />
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

                footer .social {
                    display: inline-flex;
                    margin: 5px 15px;
                    width: auto;
                }

                footer .divSocial {
                    text-align:right;
                }
                
                @media only screen and (max-width : 768px) {

                    footer .divSocial,
                    footer .name {
                        text-align:center;
                    }  
                }


      


                   
                `}</style>

            </footer>
        );
    }
}


export default Footer;