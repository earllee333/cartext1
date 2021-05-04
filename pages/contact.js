const Contact = () => {
    return ( 
        
        <div className="contact">
            <ul>
                <li>Line:123@gmail.com</li>
                <li>Ig:123@gmail.com</li>
                <li>Facebook:123@gmail.com</li>
                <li>Phone:123@gmail.com</li>
                <li>Address:123@gmail.com</li>
            </ul>
        <style jsx>
            {`{
            li{
                text-align:center;
                margin:10px;
                font-size:20px;
                color:gray;
                list-style-type: none;;
                font-weight:600;
                
            }
            }`}
        </style>
        </div>
    
     );
}
 
export default Contact;