import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
export default function RecipesCard({data}){
    //const [slug] = data.fields.slug
    //width={data.fields.thumbnail.fields.file.details.image.width}
    //height={data.fields.thumbnail.fields.file.details.image.height}
    return(
        
        <>
            <Head>
                <title>Recipes</title>
            </Head>
            
            <div className="card">
                <div className="featured">
                    <Image src={'https:'+data.fields.thumbnail.fields.file.url}
                  width={380}
                  height={280}/>
                </div>
                <div className="content">
                    <div className="info"><h4>{data.fields.title}</h4></div>
                    <p>Takes approx  <span >{data.fields.cookingTime} </span>   mins</p>
                </div>
                <div className="actions">
                    <Link href={'/recipes/'+data.fields.slug}>
                        <a>Cook this</a>
                    </Link>
                </div>
                <style jsx>{`.card{
                    border:2px solid;
                    margin:10px;
                    padding-top:8%;
                    text-transform:uppercase;
                }`}</style>
            </div>
        </>
    )
}