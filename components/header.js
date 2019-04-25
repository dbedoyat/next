
import Link from 'next/link'


export default () => (
    <div>
        <header>
            <ul>
                <li><Link href="/"><a href="/">Home</a></Link></li>
                <li><Link href="/blog"><a href="/blog">Posts</a></Link></li>
            </ul>
        </header>
            

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
                color:#000;
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

