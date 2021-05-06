import Head from "next/head";
import Image from 'next/image'
const Contact = () => {
    return ( 
    
        <div className="contact">
            <Head>
                <title>Contact US!!</title>
            </Head>
            <ul>      
               <li>
                   <ul>
                   <li> <Image src='/line-icon.png' width={24} height={24}></Image>
                </li>
                <li>Line@12345678</li>
                   </ul>
               </li>
               <li>
                   <ul>
                   <li> <Image src='/fb-icon.png' width={24} height={24}></Image>
                </li>
                <li>Fb@12345678</li>
                   </ul>
               </li>
               <li>
                   <ul>
                   <li> <Image src='/ig-icon.jpg' width={24} height={24}></Image>
                </li>
                <li>Ig@12345678</li>
                   </ul>
               </li>
               <li>
                   <ul>
                   <li> <Image src='/phone-icon.png' width={24} height={24}></Image>
                </li>
                <li>Phone@12345678</li>
                   </ul>
               </li>   
            </ul>
        <style jsx>
            {`{
            ul li{
                display:inline;
                text-align:center;
            }
            li{
                text-align:center;
                margin:10px auto;
                font-size:28px;
                color:gray;
                list-style-type: none;;
                font-weight:600;
                display:block;
                padding:1px;
                line-height:20px;
                                              
                
            }

            ul li ul li{display:flex
                text-algin:center;
                
            }
            ul  {
                text-align:center;
                padding:10px;
                margin:10px ;
                padding-top:30px               
            }
            }`}
        </style>
        </div>
    
     );
}
 
export default Contact;