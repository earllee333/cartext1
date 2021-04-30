import Link from 'next/link'
import {useContext} from 'react'
import AuthContext from '../stores/authContext'

export default function Navbar() {
    const {user,login,logout,authready}=useContext(AuthContext)
  return (
    <div className="container">
      <nav>
          <ul>
              <li><Link href="/" >Home</Link></li>
              <li><Link href="/about" >About</Link></li>
              <li><Link href="/recipes" >recipe</Link></li>
              <li className="btn" onClick={login} >Sign/Login</li>
              <li className="btn" onClick={logout} >Louout</li>
          </ul>
      </nav>
    </div>
  )
}
