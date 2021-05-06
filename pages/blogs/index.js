import {createClient} from 'contentful'
import Head from 'next/head'
import CarsMenu from '../../component/CarsMenu'

export async function getStaticProps(){
    const client = createClient({
        space:'2xmx8hal6xz6',
        accessToken:'di0I-SWjotyOIw-ISEdtrdPL6JUJWUFWdL8BXxIbkYc'
    })
    const res = await client.getEntries({content_type:'blog'})
    return {
        props:{
            datas:res.items
        }
    }
}

const List = ({datas}) => {
    console.log()
    if(!datas) return <div>Loading</div>
    return ( 
        <div className="list-menu">
            <Head>
                <title>CarsMenu</title>
            </Head>
        {datas.map((data,index)=>(
            <CarsMenu key={data.sys.id} datas={datas} data={data} index={index} />
        ))}
        </div>
     );
}
 
export default List;