import React, { Component } from 'react'
import Link from './Link';


class Header extends Component {
  
    render() {
        return (
            
            <header>
                <div className="container-fluid fix text-center">
                    <button className="about">
                   
                    </button>

                    <div className="content-logo">
                        <Link href="/">
                            <a href="" aria-label="Logo David Bedoya">
                                 H E L L O                                                        
                            </a>
                        </Link>
                    </div>
                    <button className="contact">
               
                    </button>

                </div>
                <style jsx>{`
                    header{
                        background: #fff;
                        width: 100%;
                        top: 0;
                        height:60px;
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
                        background: transparent;
                        border: 0;
                    }

                    .about img,
                    .contact img{
                        width:32px;
                        height:32px;
                    }
                    header .contact{
                        float:right;
                        background: transparent;
                        border: 0;
                    }

                    .content-logo{
                        display: initial;
                        width: auto;
                        float: none;
                        padding: 0;

                    }


                
                    .content-logo > a {
                        color:#000;
                        font-weight: 600;
                        font-size: 24px;
                        display: inline-flex;
                    }
                  
     

             

                
                `}</style>

            </header>
        );
    }
}


export default Header;