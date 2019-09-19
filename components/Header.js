import React, { Component } from 'react'
import Link from 'next/link';
import { FiUser, FiMail } from 'react-icons/fi';

class Header extends Component {
  
    render() {
        return (
            
            <header>
                <div className="container-fluid fix text-center">
                    <button className="about">
                        <Link href="/about">
                            <a href="" aria-label="About">
                                <FiUser />
                            </a>
                        </Link>
                    </button>

                    <div className="content-logo">
                        <Link href="/">
                            <a href="" aria-label="Logo David Bedoya">
                                 D A V I D    B E D O Y A                                                   
                            </a>
                        </Link>
                    </div>
                    <button className="contact">
                        <a href="mailto:dbedoyat@gmail.com" aria-label="About">
                            <FiMail />
                        </a>
                    </button>

                </div>
                <style jsx>{`
                    header{
                        background: #000;
                        width: 100%;
                        top: 0;
                        height:50px;
                        z-index: 100;
                        position:fixed;
                        left:0;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }

                    header ul {
                        margin:0;
                        padding: 0px;
                        list-style: none;
                    }

                     header .container-fluid.fix {
                    
                        display: inline-block;
                        padding: 0;
                    }

                    header .about{
                        float: left;
        
                    }

                    .about,
                    .contact{
                        font-size:28px;
                        background: transparent;
                        border: 0;
                        width:50px;
                        height:50px;
                        padding:0;
                        color:#fff !important;
             
                    }

                     .about a,
                    .contact a{
                        color:#fff !important;
                        width:50px;
                        height:50px;
                            display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                                
                    }
                    header .contact{
                        float:right;
                       
                    }

                    .content-logo{
                        display: initial;
                        width: calc(100% - 100px);
                        float: none;
                        padding: 0;
                        height:50px;

                    }


                
                    .content-logo > a {
                        color:#000;
                        background:#fff;
                        padding:5px 10px;
                        font-weight: 700;
                        font-size: 20px;
                        display: inline-flex;
                        margin-top:7px;
                    }

                    
                  
     

             

                
                `}</style>

            </header>
        );
    }
}


export default Header;