import{createClient} from 'contentful'
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from 'next/head'

const client =createClient({
    space:'2xmx8hal6xz6',
    accessToken:'di0I-SWjotyOIw-ISEdtrdPL6JUJWUFWdL8BXxIbkYc'
})

export const getStaticPaths = async() => {
    const res = await client.getEntries({
        content_type:'blog'
    })
    const paths = res.items.map(item=>{
        return{
            params:{slug:item.fields.slug}
        }
    })
    return{
        paths:paths,
        fallback:false
    }
}
export async function getStaticProps({params}){
    const {items} = await client.getEntries({
        content_type:'blog',
        'fields.slug':params.slug
    })
    return{
        props:{datas:items[0]}
    }
}
const CarsDetail = ({datas}) => {
    console.log(datas)
    const {price,description,photo,tag,titles,time,slug} = datas.fields
    return ( 
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div className="details">
                <div className="title"><h2>{titles}</h2></div>
                <div>{documentToReactComponents(description)}</div>
                <div className="detail-pho">{photo.map(item=>(
                    <div className="each-pho">
                    <Image key={item.sys.id} src = {'https:'+item.fields.file.url}
                    width={450} height={300} />
                    </div>
                ))}</div>
                <div className="price">
                    {price && <p>TWD {price}</p>}
                    {!price && <p>Contact US!!!</p>}
                </div>
                
                <p>{tag.map(tag=>('#'+tag ) )+''}</p>
                <p>{time}</p>
            <style jsx>
                {`{
                .details{
                    text-align:center
                    
                }
                .details .title{
                    border:1px solid;
                    border-radius:30px;
                    margin:10px;
                }
                .each-pho{
                    border:1px solid;
                    padding:10px
                }
                .price{
                float:right;
                padding-right:30px;
                padding-top:20px;
                text-decoration:underline;
                font-weight:500;
                font-size:20px;
                color:gray
                }
                .time{float:left;}
                p{color:gray}
                }`}
            </style>
            </div>
        </>
     );
}
 
export default CarsDetail;