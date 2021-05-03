import Link from 'next/link'
import {useContext} from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
    const {user,login,logout,authready}=useContext(AuthContext)
  return (
    <div className="container">
      <nav>
          <h1>Kao-shun Cars</h1>
          <ul>
              <li><Link href="/" >Home</Link></li>
              <li><Link href="/about" >About</Link></li>
              <li><Link href="/contact" >Contact us</Link></li>
              <li><Link href="/blogs" >Blogs</Link></li>

              {user&&<li><Link href="/recipes" >recipe</Link></li>}
              {!user &&<li className="btn" onClick={login} >Sign/Login</li>}
              {user&& <li className="btn" onClick={logout} >Louout</li>}
          </ul>
      </nav>
    </div>
  )
}
