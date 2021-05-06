import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const CarsMenu = ({data,index,datas}) => {

    const {number,titles,time,stock,slug,media,photo,profilePicture,tag} = data.fields
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
              <Image src={'https:'+profilePicture.fields.file.url} 
              width={450} height={300} 
              loading={datas.length === index+1 ?'eager':'lazy'}/>
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
            <div className='action'>
                <Link href={'/blogs/'+slug}>
                    <a>Detail</a>
                </Link>
            </div>

        <style jsx>
            {`{
            .carsmenu {text-align:center;
            border-top:0.5px solid gray;;
            padding:0px;
            margin:0px;
            width:100%;
            padding-top:50px}
            ul{list-style-type:none;text-align:center}
            li{display:inline-block;}
            #price{color:rgb(235, 60, 60);padding-left:10px;}
            a{color:red;padding-left:5px;font-weight:800;}
            .profile-pho image{width:100%}
            li {font-weight:bold;font-size:20px;}
            #tag{color:gray;font-size:12px}
            #time{color:gray;font-size:12px;font-weight:500;}
            }`}
        </style>
        </div>

       </>
     );
}
 
export default CarsMenu;