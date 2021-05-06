import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const CarsMenu = ({data,index,datas}) => {

    const {mark,number,titles,time,stock,slug,media,photo,profilePicture,tag} = data.fields
    console.log(data)
    return ( 
       <>
        <Head>
            <title>Cars Menu</title>
            <link rel="preload" as="image" href={'https:'+profilePicture.fields.file.url}>
            </link>
        </Head>
        <div className='carsmenu'>
            
            <div className="profile-pho">
              <Link prefetch href={'blogs/'+slug}>
                     <Image href={'/blogs/'+slug} src={'https:'+profilePicture.fields.file.url} 
              width={450} height={300} 
              loading={datas.length === index+1 ?'eager':'lazy'}/>
              </Link>
            </div>
            <div className="content">
                <ul>
                    <li>{titles}</li>
                    <li id='price'><strong>{number}</strong></li>
                </ul>
                
                <p id='tag'>{tag.map(tag=>('#'+tag ) )+''}</p>
                {stock && <p>{stock}</p>}
                <a id="time">{time}</a>
                {stock && <a> On Sale</a>}
                {!stock&&<a>Temporarily sold</a>}
            </div>
            {mark&&
            <div className="mark">
                <Image src={'https:'+mark.fields.file.url} width={36} height={36} ></Image>
            </div>}

        <style jsx>
            {`{
            .carsmenu {text-align:center;
            padding:0px;
            margin:0px;
            width:100%;
            }
            ul{list-style-type:none;text-align:center}
            li{display:inline-block;}
            #price{color:rgb(235, 60, 60);padding-left:10px;}
            a{color:red;padding-left:5px;font-weight:800;}
            .profile-pho image{width:100%}
            li {font-weight:bold;font-size:20px;}
            #tag{color:gray;font-size:12px}
            #time{color:gray;font-size:12px;font-weight:500;}
            .mark{
                position:relative;
                right:160px;
                bottom:90px
                
              }
            }`}
        </style>
        </div>

       </>
     );
}
 
export default CarsMenu;