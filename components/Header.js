import Link from './Link';

export default class Header extends React.Component {

    render() {
        return (

            <header>
                <div className="container-fluid fix">
                    <div className="content-logo">
                        <Link activeClassName='active' href="/">
                            <a href="">
                                <h1>Logo</h1>                            
                            </a>
                        </Link>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <Link activeClassName='active' href="/portfolio">
                                    <a href="">Link1</a>
                                </Link>
                            </li>
                            <li>
                                <Link activeClassName='active' href="/contact">
                                    <a href="">Link2</a>
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
                        width: 200px;
                        float:left;
                        padding: 10px;
                    }
                    .logo{
                        position: relative;
                        z-index: 10;
                        width: inherit;
                        left: inherit;
                        top: 5px;
                        height: 20px;
                    }
                    nav{
                        width:calc(100% - 360px);
                        float:left;
                        padding: 13px 15px;
                        
                    }
                    nav.tiendaVirtual{
                        width:160px;
                        float:left;
                        text-align: right;
                        padding: 11px 15px;
                        
                        
                    }
                
                `}</style>

            </header>
        );
    }
}