
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import GoogleFontLoader from 'react-google-font-loader';
import '../theme.css';
import { initGA, logPageView } from '../utils/analytics.js'

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        if (!window.GA_INITIALIZED) {
          initGA()
          window.GA_INITIALIZED = true
        }
        logPageView()
        window.prismic = {
            endpoint: 'https://dbedoyat.cdn.prismic.io/api/v2'
        };
      }

    render() {
      const { children, title = 'app' } = this.props;
      return (
        <div>

    <GoogleFontLoader
            fonts={[
            {
                font: 'Montserrat',
                weights: [400, 600, 700],
            }
            ]}
        />
        

        <Head>
            <title>{title}</title>
            
            <meta charSet='utf-8' />
            <meta name="keywords" itemProp="keywords" content="design,develop,react,nodejs,web,html,css,jquery,wordpress,diseño,responsive,mobile" />
            <meta name="description" itemProp="description" content="Hello! I'm David Bedoya. Enjoy working with Front-End Dev " />



            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://dbedoyat.now.sh/" />
            <meta property="og:title" content="David Bedoya - Web Designer" />
            <meta property="og:description" content="Hello! I'm David Bedoya. Enjoy working with Front-End Dev " />
            <meta property="og:image" content="../static/img/dbedoyat-cover.png" />

                            
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://dbedoyat.now.sh/" />
            <meta property="twitter:title" content="David Bedoya - Web Designer" />
            <meta property="twitter:description" content="Hello! I'm David Bedoya. Enjoy working with Front-End Dev " />
            <meta property="twitter:image" content="../static/img/dbedoyat-cover.png" />
              

            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <meta name="google-site-verification" content="FyuiPsN__hVWmh351u9RX4Ocf25NpubqxgL_e
        hM8ZvA" />
            <meta name="theme-color" content="#000000" />

                
            <link rel="shortcut icon" type="image/png" href="../static/img/icon.png" />

        </Head>
     
        <Header />

        <div id="page-content" className="page-content">
            
            {children}
        </div>

        <style jsx>{`

            .page-content {
                margin-top: 0;
                height: auto;
            }

     
         
           
        `}</style>

      
    </div>

      );
    }
  }