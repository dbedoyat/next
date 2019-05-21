import React, { Component } from 'react'
import Layout from '../components/Layout';
import { FaCloudDownloadAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

class Contacto extends Component {

    render() {

        return (

            <Layout>
                <div id="hero-profile">
                    
                </div>
                <div className="hero-pic">
                    <img src="https://scontent-mia3-1.cdninstagram.com/vp/efdb74a62b1de19fc15239d1f961338c/5D660160/t51.2885-15/e35/25014636_860155184162180_7142514670329397248_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Moi" />
                </div>

                <div className="container-fluid fix post mt-5">
                    <div className="row mt-5">
                    
                        <div className="col-12 mt-5">
                            <h3 className="mt-5 mb-5">I'm David Bedoya</h3>
                            <p>Since June 2015 at the present i work in <a target="_blank" href="https://www.processoft.com.co/">Processoft Colombia</a> as Web Designer support enterprise like <a target="_blank" href="https://www.ssangyong.com.co/">SsangYong Colombia</a>.</p>
                            <p>I constant learn new tecnologies and improve myself to give my knowledge and support.
                            My core expertise is in the Front-End development area, also i have experience with branding, prototypes, research and SEO optimization.
                            </p>


                        
                            <br />
                            <br />
                            <div className="link-content">
                                <a className="cta mr-3 secondary email" href="mailto:dbedoyat@gmail.com">Email me <FaPaperPlane /></a>

                                <a className="cta mr-3" target="_blank" href="/static/files/resume-david-bedoya.pdf">Resume <FaCloudDownloadAlt />  </a>

                                <a className="cta mr-3" target="_blank" href="https://www.linkedin.com/in/dbedoyat">LinkedIn <FaLinkedin /> </a>

                            </div>
                            <br />
                            <br />

                            <hr/>
                            <p>This site was build with React.js + Next.js + Wordpress API Rest and much love ❤ </p>

                            <br />
                            <br />
                        </div>
                
                    
                    </div>
                
                </div>
                
                <style jsx>{`

                #hero-profile{
                    width: 100%;
                    height: 150px;
                    background:#DFE4F0;


                }
                .container-fluid.post{
                    max-width:720px;
                }
                

                .hero-pic {
                    width:180px;
                    height:180px;
                    overflow:hidden;
                    border-radius:50%;
                    position:absolute;
                    left:50%;
                    transform:translate(-50%, -50%);
                    border:#fff 3px solid;
                    box-shadow:var(--shadow);

                }

                .hero-pic img{
                    width:100%;
                    height:auto;

                }
                
                @media only screen and (max-width : 768px) {
                    
                    .hero-pic {
                        width:120px;
                        height:120px;
                    

                    }

                    .link-content{
                        text-align:center;
                    }

                    .email{
                        margin-bottom:30px;
                    }
                }


      


                   
                `}</style>
            </Layout>
        );
    }

}

export default Contacto;
