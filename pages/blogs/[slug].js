import{createClient} from 'contentful'
import Image from 'next/image'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from 'next/head'
import Link from 'next/link'
import ReactPlayer from 'react-player'
import {ReactAudio} from 'reactjs-media/audio'
import Skeleton from '../../component/Skeleton'
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
        fallback:true
    }
}
export async function getStaticProps({params}){
    const {items} = await client.getEntries({
        content_type:'blog',
        'fields.slug':params.slug
    })
    return{
        props:{datas:items[0]},
        revalidate:1
    }
}
export default function CarsDetail({datas}){
    if(!datas) return <div>Loading</div>
    const {number,description,photo,tag,titles,time,slug,media} = datas.fields
    return ( 
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div className="details">
                <div className="title"><h2>{titles}</h2></div>
                <div className="paragraph"><p>{documentToReactComponents(description)}</p></div>
                <div className="detail-pho">{photo.map(item=>(
                    <div className="each-pho">
                    <Image key={item.sys.id} src = {'https:'+item.fields.file.url}
                    width={450} height={300}
                     />
                    </div>
                ))}</div>
                {media &&
                <div className="video">{media.map(item=>(
                <ReactPlayer url={'https:'+item.fields.file.url}  width={380} height={300} controls />

                ))}

                </div>}
                <div className="price">
                    {number && <p id='TWD'>TWD {number}</p>}
                    {!number && <Link href ='/contact' >Contact US!!</Link>}
                </div>
                
                <p>{tag.map(tag=>('#'+tag ) )+''}</p>
                <p>{time}</p>
            <style jsx>
                {`{
                .details{
                    text-align:center;
                    
                }
                .details .title{
                    border:1px solid;
                    border-radius:30px;
                    margin:10px;
                }
                .each-pho{
                    border-bottom:3px solid;
                    padding:10px;
                    margin:30px;
                    
                }
                .video{
                    margin 0 auto;
                    width:380px
                   }
                
                   .paragraph p{padding:10px;margin:0px;line-height:1.6;
                    text-indent: 10px;
                    letter-spacing:3px;
                    margin-left: auto;margin-right:auto;
                    max-width:1024px;
                    text-align:center;
                    color:black}
                .price{
                
                padding-top:20px;
                text-decoration:none;
                font-weight:500;
                font-size:20px;
                color:gray
                }
                .time{float:left;}
                p{color:gray;}
                #TWD{color:rgb(235, 60, 60)}
                }`}
            </style>
            </div>
        </>
     );
}



