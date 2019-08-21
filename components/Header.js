import React, { Component } from 'react'
import Link from './Link';

class Header extends Component {

    render() {
        return (
            
            <header>
                <div className="container-fluid fix">
                   
                    <div className="content-logo">
                        <Link href="/">
                            <a href="" aria-label="Logo David Bedoya">
                                Some<span>Text</span>                       
                            </a>
                        </Link>
                    </div>
                    <nav className="menu">
                        <ul>
                            <li>
                                <Link activeClassName='active' href="/portfolio">
                                    <a href="">Work</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName='active' href="/about">
                                    <a href="">About</a>
                                </Link>
                            </li>

                            <li>
                               
                                    <a href="mailto:dbedoyat@gmail.com">Email me</a>
                              
                            </li>
                         
                        </ul>
                    </nav>
                </div>
                <style jsx>{`
                    header{
                        background: #fff;
                        display: inline-block;
                        width: 100%;
                        top: 0;
                        position: fixed;
                        height:50px;
                        z-index: 100;

                    }

                    header ul {
                        margin:0;
                        padding: 0px;
                        list-style: none;
                    }

                    header ul li {
                        display: inline-block;
                        margin: 0px;
                    }
                    header li a{
                        color: var(--dark);
                        padding: 4px 14px;
                        font-weight: 600;
                        font-size:16px;
                        display: block;
                        overflow:hidden;
                    }
                    header li a.active{
                        color:   var(--secondary);
                    }
                     header li a:hover{
                        color: var(--primary);
                    }

                   
               



                    .content-logo{
                        top: 10px;
                        width: auto;
                        float: left;
                        padding: 0;
                        position: relative;
                    }
                
                    .content-logo > a {
                        color: var(--primary);
                        font-weight: 700;
                        font-size: 24px;
                        display: inline-flex;
                    }
                    .content-logo > a > span {
                        color: var(--secondary);
                        width: auto;
                        float: left;
                        padding: 0;
                        position: relative;
                    }

     
                    nav{
                        width: auto;
                        float: left;
                        padding: 13px 15px;
                        text-align: left;
                    }
                           

             

                
                `}</style>

            </header>
        );
    }
}


export default Header;