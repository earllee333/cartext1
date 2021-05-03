import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

const CarsMenu = ({data}) => {

    const {titles,time,stock,slug,price,media,photo,profilePicture,tag} = data.fields
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
                <p>{titles} {price}</p>
                <p>{tag.map(tag=>('#'+tag ) )+''}</p>
                {stock && <p>{stock}</p>}
                {time}
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
            }`}
        </style>
        </div>

       </>
     );
}
 
export default CarsMenu;