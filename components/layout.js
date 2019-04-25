
import Head from 'next/head';
import Header from '../components/header';
import GoogleFontLoader from 'react-google-font-loader';
import 'bootstrap/dist/css/bootstrap.min.css';



    

export default ({ children, title = 'Home page' }) => (
    <div>

    <GoogleFontLoader
            fonts={[
            {
                font: 'Nunito',
                weights: [400, '400i'],
            }
            ]}
        />
        

        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
     
        <Header />

        <div id="page-content" className="page-content">
            
            {children}
        </div>
        
        <style jsx>{`
            header{
                background: #fff;
                color: #000;
                display: inline-block;
                width: 100%;
                top: 0;
                position: fixed;
                height:60px;
                font-family: "Nunito", sans-serif;
                z-index: 100;
            }
            header a{
                color:#fff;
                padding: 10px; 
            }
            .logo{
                width:200px;
                padding:18px 15px; 
                float:left;  
            }
            .nav{
                width:calc(100% - 200px);
                float:left;
                padding:18px 15px; 
                
            }
            .page-content {
                margin-top: 60px;
                min-height:600px;
                font-family: "Nunito", sans-serif;
            }

             footer {
                background: #eee;
                padding: 25px;
                text-align: center;
                color: #000;
                font-family: "Nunito", sans-serif;
            }
         
           
        `}</style>

      
    </div>



)

