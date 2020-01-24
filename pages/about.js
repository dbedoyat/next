
import React, { Component } from 'react'
import Layout from '../components/Layout';
import { FaCloudDownloadAlt, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
class Contacto extends Component {
	render() {
		return (
			<Layout>
				<div id="hero-profile">

				</div>
				<div className="hero-pic"
					data-aos="zoom-in"
					data-aos-duration="300">
					<img
						
					
						 src="./static/img/yo.jpg" alt="Moi" />
				</div>
				<div className="container-fluid fix "
				
					data-aos="fade-up"
					data-aos-duration="300"
					data-aos-delay="200" >

						<div className="text-content mt-5">
							<h3 className="mt-5 mb-5">I'm David Bedoya</h3>
							<p>Since June 2015 at the present i work in <a target="_blank" href="https://www.processoft.com.co/">Processoft Colombia</a> as Web Designer support enterprise like <a target="_blank" href="https://www.ssangyong.com.co/">SsangYong Colombia</a>.</p>
							<p>I constant learn new tecnologies and improve myself to give my knowledge and support.
                            My core expertise is in the Front-End development area, also i have experience with branding, prototypes, research and SEO optimization.
                            </p>

							<br />
							<br />
							<div className="link-content">
								<a className="cta  secondary email" href="mailto:dbedoyat@gmail.com">Email me <FaPaperPlane /></a>
								<a className="cta  secondary " target="_blank" href="/static/files/resume-juan-david-bedoya.pdf">Resume <FaCloudDownloadAlt />  </a>
								<a className="cta  secondary " target="_blank" href="https://www.linkedin.com/in/dbedoyat">LinkedIn <FaLinkedin /> </a>
							</div>
							<br />
							<br />
							<hr />
							<p>This site was build with React.js + Next.js + Prismic API Rest with much love ❤ </p>
							<br />
							<br />
						</div>


		

				</div>

				<style jsx>{`
                #hero-profile{
					position: absolute;
					top: 50px;
					width: 100%;
					height: 130px;
					background: #eee;
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
                    left:calc(50% - 60px);
					
                    border:#fff 3px solid;
                    box-shadow:var(--shadow);
					top: 100px;
                }
                .hero-pic img{
                    width:100%;
                    height:auto;
                }

				.text-content {
					width: 100%;
					line-height: 1.6;
					max-width: 800px;
					margin: 0 auto;
					margin-top: 320px;
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