import Link from 'next/link'
const Nav = () => {
    return ( 
        <div className="container">
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/recipe">Recipe</Link></li>
                    <li><Link href="/sign">Sign/Login</Link></li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Nav;