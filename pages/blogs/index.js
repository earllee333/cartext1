import {createClient} from 'contentful'
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
    
    return ( 
        <div className="list-menu">
        {datas.map(data=>(
            <CarsMenu key={data.sys.id} data={data} />
        ))}
        </div>
     );
}
 
export default List;