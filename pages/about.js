import React, { Component } from 'react'
import Layout from '../components/Layout';


class Contacto extends Component {

    render() {

        return (

            <Layout>
                <div id="hero-profile">
                    
                </div>
                <div className="hero-pic">
                    <img src="https://scontent-mia3-1.cdninstagram.com/vp/efdb74a62b1de19fc15239d1f961338c/5D660160/t51.2885-15/e35/25014636_860155184162180_7142514670329397248_n.jpg?_nc_ht=scontent-mia3-1.cdninstagram.com" alt="Moi" />
                </div>
                <p>About page</p>
                <style jsx>{`

                #hero-profile{
                    width: 100%;
                    height: 150px;
                    background:#DFE4F0;


                }

                .hero-pic {
                    width:120px;
                    height:120px;
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
  
                }


      


                   
                `}</style>
            </Layout>
        );
    }

}

export default Contacto;
