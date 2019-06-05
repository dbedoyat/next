import React, { Component } from 'react'
import Link from './Link';

class Header extends Component {

    state = { showMenu: false }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const menutoggle = this.state.showMenu ? 'show' : 'hide';
        return (
            
            <header>
                <div className="container-fluid fix">
                    <button aria-label="menu" role="button" className={`nav-btn ${menutoggle}`} onClick={this.toggleMenu}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </button>
                    <div className="content-logo">
                        <Link href="/">
                            <a href="">
                                <img className="logo" src="/static/img/icon-dbedoyat.svg" alt=""/>                          
                            </a>
                        </Link>
                    </div>
                    <nav className={`menu ${menutoggle}`}>
                        <ul>
                            <li>
                                <Link activeClassName='active' href="/portfolio">
                                    <a href="">Portfolio</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName='active' href="/about">
                                    <a href="">About</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="mailto:dbedoyat@gmail.com">
                                    <a href="mailto:dbedoyat@gmail.com">Email me</a>
                                </Link>
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
                        height:60px;
                        z-index: 100;
                        box-shadow:var(--shadow);
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
                        color:#404040;
                        padding: 4px 14px;
                        font-weight: 600;
                        font-size:16px;
                        display: block;
                    }
                    header li a.active{
                        color:  var(--secondary);

                    }

                    header li a:after{
                        content: '';
                        width: 100%;
                        background: var(--secondary);
                        height: 2px;
                        display: block;
                        -webkit-transform: translate(0px, 0px);
                        -ms-transform: translate(0px, 0px);
                        transform: translate(0px, 0px);
                        border-radius: 2px;
                        transition: 250ms all ease;
                        opacity:0;
                    }

                    header li a:hover{
                        color: var(--secondary);
                        text-decoration: none;
                    }

                    header li a:hover:after{
                        content: '';
                        -webkit-transform: translate(0px, 5px);
                        -ms-transform: translate(0px, 5px);
                        transform: translate(0px, 5px);
                        transition: 250ms all ease;
                        opacity:1;
                    }




                    .content-logo{
                        width: 220px;
                        float:left;

                        padding: 0;
                    }
                    .logo{
                        position: relative;
                        z-index: 10;
                        width: inherit;
                        left: inherit;
                        height:46px;
                        top: 7px;

                    }

                    .content-logo h1{

                        color:var(--secondary);
                        font-size: 24px;
                        padding-top: 5px;
                    }
                    nav{
                        width: calc(100% - 220px);
                        float: left;
                        padding: 13px 15px;
                        text-align: right;
                    }
                        
                    }
                    .nav-btn{
                        display:none;
                    }

                    @media only screen and (max-width : 768px) {

                    .logo {
                        position: absolute;
                        z-index: 10;
                        height:46px;
                        top: 7px;
                        left: 15px;
                    }

                    nav.menu {
                       position: fixed;
                        z-index: 1000;
                        width: 400px;
                        height: 400px;
                        padding: 10px;
                        right: -175px;
                        top: -175px;
                        padding-top: 210px;
                        padding-left: 20px;
                        padding-right: 190px;
                        border-radius: 50%;
                        background: var(--secondary);

                    }
                    nav.menu li{
                       display: inline-block;
                        margin: 0px;
                        width: 100%;
                    }

                    nav.menu.show{
                        transition: all ease .2s;
                        transform: scale(1);
                    }

                     nav.menu.hide{
                        transition: all ease .2s;
                        transform: scale(0);
                    }

                    .nav-btn{
                        position: fixed;
                        right: 0;
                        width: 50px;
                        top: 0px;
                        height: 50px;
                        z-index: 1100;
                        background: transparent;
                        padding: 12px;
                        border: 0;
                        display:block;
                    }


            

                    .nav-btn span{
                        background: var(--secondary);
                        width: 28px;
                        height: 3px;
                        border-radius: 0px;
                        position: absolute;
                        left: 11px;
                        webkit-transition: all ease-in-out .3s;
                        -moz-transition: all ease-in-out .3s;
                        -ms-transition: all ease-in-out .3s;
                        -o-transition: all ease-in-out .3s;
                        transition: all ease-in-out .3s;
                    }

                    .nav-btn.show span{
                        background: #fff;
                    }

                    /* Menu Hamburger state */

                    .nav-btn span.line1{
                        top: 13px;
                    }
                    .nav-btn span.line2{  
                        top: 24px;
                        width: 16px;
                    }
                    .nav-btn span.line3{
                        top: 35px;
                    }

                    
                    
                    /* Menu Close state */

                    .nav-btn.show span.line1{
                        -webkit-transform: rotate(225deg);
                        -moz-transform: rotate(225deg);
                        -ms-transform: rotate(225deg);
                        -o-transform: rotate(225deg);
                        transform: rotate(225deg);
                        top: 24px !important;
                    }
                   .nav-btn.show span.line2{
                        width: 0px !important;
                    }
                   .nav-btn.show span.line3{
                        -webkit-transform: rotate(-225deg);
                        -moz-transform: rotate(-225deg);
                        -ms-transform: rotate(-225deg);
                        -o-transform: rotate(-225deg);
                        transform: rotate(-225deg);
                        top: 24px !important;
                    }
                    nav.menu li a{
                        color: #fff;
                        font-size: 20px;
                        text-align: left;
                    }

                    nav.menu li{
                        display:inline;
                    }

                    nav.menu li:nth-child(1){
                        
                    }
                     
                    nav.menu li:nth-child(2){
                        margin-top:10px;
                        margin-left:20%;
                    }

                    nav.menu li:nth-child(3){
                        margin-top:10px;
                        margin-left:40%;
                    }

                    .content-logo h1{
                        font-size:30px;
                        color:var(--secondary);
                    }
                  
                }    

                
                `}</style>

            </header>
        );
    }
}


export default Header;