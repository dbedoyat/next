
import Head from 'next/head';
import Header from './Header';
import GoogleFontLoader from 'react-google-font-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../theme.css';


    

export default ({ children, title = 'dbedoyat' }) => (
    <div>

    <GoogleFontLoader
            fonts={[
            {
                font: 'Nunito',
                weights: [400, 600, 700],
            }
            ]}
        />
        

        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name="keywords" itemProp="keywords" content="design,develop,react,nodejs,web,html,css,jquery,wordpress,diseño,responsive,mobile" />
            <meta name="description" itemProp="description" content="my own page" />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name="theme-color" content="#000000" />
            <link rel="manifest" href="/static/manifest/manifest.json" />
            <link rel="shortcut icon" type="image/png" href="https://cdnprocessoft.s3.amazonaws.com/SITIOS/xGJ4XukfAJKAPdHEBn0PZd87ZD0tRng595yu2SHQgDM/favicon-32x32.png" />
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

