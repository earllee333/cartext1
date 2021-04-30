import {useEffect, createContext,useState} from 'react'
import netlifyIdentity from 'netlify-identity-widget'
const authContext = createContext({
    user:null,
    login:()=>{},
    logout:()=>{},
    authReady:false
})
export const AuthContextProvider = ({Children})=>{
    const[user,setUser]=useState(null)
    const[authReady,setAuthReady]=useState(false)

    useEffect(() => {
        netlifyIdentity.on('login',(user)=>{
            setUser(user)
            netlifyIdentity.close()
            console.log('event login')
        })

        netlifyIdentity.on('init',(user)=>{
            setAuthReady(true)
            setUser(user)
            console.log('init event')
        })
        netlifyIdentity.init()
        return()=>{
            netlifyIdentity.off('login')
        }
       
    },[])
         const login = ()=>{
            netlifyIdentity.open()
        }
        const context = {user,authReady,login}

    return(
        <AuthContextProvider>
            {Children}
        </AuthContextProvider>
    )
}