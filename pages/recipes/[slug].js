import {createClient} from 'contentful'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Skeleton from '../../component/Skeleton'
const client = createClient({
    space:'2xmx8hal6xz6',
    accessToken:'di0I-SWjotyOIw-ISEdtrdPL6JUJWUFWdL8BXxIbkYc'
    
})
 
export const getStaticPaths = async()=>{
    const res = await client.getEntries({
        content_type:'sample1ForWeb'
    })

    const paths = res.items.map(item=>{
        return {
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
        content_type:'sample1ForWeb',
        'fields.slug':params.slug
    })
    return{
        props:{recipe:items[0]}
    }
}





export default function RecipeDetails({recipe}){
    console.log(recipe);
    if(!recipe) return <Skeleton />
    const {featuredImage,title,cookingTime,ingredients,methods}=recipe.fields
    return(
        <div>
            <div className='banner'>
                <Image src={`http://`+featuredImage.fields.file.url }width={450}height={250}>
                </Image>
                <h2>{title}</h2>
            </div>
            <div className="info">
                <p>Take About: <div className="cookingTime">{cookingTime}</div></p>
                <h3>Ingredients:</h3>
                {ingredients.map(ing=> (
                    <span key={ing}>{ing}</span>
                ))}
            </div>
            <div className="method">
                <h3>Method:</h3>
                <div>{documentToReactComponents(methods)}</div>
            </div>
            <style jsx>
                {`
                .banner h2{ margin:0;
                background:#fff;
                display:inline-block;
                padding:20px;
                position:relative;
                top:-60px;
                left:-10px;
                transform:rotateZ(-2deg);
                box-shadow:1px 3px 5px rgba(0,0,0,0.1);
                }
                .info p {margin:0;}
                .info span::after{
                    content:",";
                }
                .info span:last-child::after{content:",";
                }
                .cookingTime{
                    display:inline;
                    color:red;
                    font-size:20px
                }
                `}
            </style>

        </div>
     
    )
}

