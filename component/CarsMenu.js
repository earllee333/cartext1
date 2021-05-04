import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const CarsMenu = ({data}) => {

    const {number,titles,time,stock,slug,media,photo,profilePicture,tag} = data.fields
    console.log(data)
    return ( 
       <>
        <Head>
            <title>Cars Menu</title>
        </Head>
        <div className='carsmenu'>
            <div className="profile-pho">
              <Image src={'https:'+profilePicture.fields.file.url} 
              width={400} height={300} />
            </div>
            <div className="content">
                <ul>
                    <li>{titles}</li>
                    <li id='price'><strong>{number}</strong></li>
                </ul>
                
                <p>{tag.map(tag=>('#'+tag ) )+''}</p>
                {stock && <p>{stock}</p>}
                {time}
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
            border:1px solid;
            padding:10px;
            padding-top:50px}
            ul{list-style-type:none;text-align:center}
            li{display:inline-block;padding-left:15px}
            #price{color:rgb(235, 60, 60)}
            a{color:red;padding-left:5px}
            }`}
        </style>
        </div>

       </>
     );
}
 
export default CarsMenu;