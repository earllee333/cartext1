const CarsMenu = ({data}) => {
    
    return ( 
        <div className="CarsMenu">
            <h2>{data.fields.titles}</h2>
            <h2>{data.fields.price}</h2>
        </div>
     );
}
 
export default CarsMenu;