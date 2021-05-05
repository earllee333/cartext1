import Link from 'next/link'
import {useContext} from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
    const {user,login,logout,authready}=useContext(AuthContext)
  return (
    <div className="container">
      <nav>
          <h1>Kaohsiung</h1>
          <ul className="drop-down-menu">
              <li><a>Functions</a>
              <ul>
              <li><Link href="/" >Home</Link></li>
                <li><Link href="/about" >About</Link></li>
                <li><Link href="/contact" >Contact us</Link></li>
                <li><Link href="/blogs" >Cars</Link></li>
              </ul>
              </li>
              
              {user&&<li><Link href="/recipes" >recipe</Link></li>}
              {!user &&<li className="btn" onClick={login} >Login</li>}
              {user&& <li className="btn" onClick={logout} >Louout</li>}
          </ul>
      </nav>
      <style jsx>
        {`{
          .drop-down-menu ul{color:red}
        }`}
      </style>
    </div>
  )
}
