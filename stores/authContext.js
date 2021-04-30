import {createContext, useState,useEffect} from 'react'
import netlifyIdentity from "netlify-identity-widget"
const AuthContext =createContext({
    user:null,
    login:()=>{},
    logout:()=>{},
    authReady:false
})

export const AuthContextProvider =({children})=>{    
    const [user,setUser]=useState(null)
    const [authReady,setAuthReady]=useState(false)
    useEffect(() => {
        netlifyIdentity.on('login',(user)=>{
            setUser(user)
            netlifyIdentity.close()
            console.log('login event')
        })
        netlifyIdentity.on('logout',()=>{
            setUser(null)
            netlifyIdentity.close()
            console.log('logout event')
        })

        netlifyIdentity.on('init',(user)=>{
            setAuthReady(true)
            setUser(user)
            console.log('init event')
        })
        netlifyIdentity.init()
        return()=>{
            netlifyIdentity.off('logout')
            netlifyIdentity.off('login')
        }
       

    },[])
     const login = ()=>{
            netlifyIdentity.open()
        }
     const logout = ()=>{
         netlifyIdentity.logout()
     }


    const context = {user,login,logout,authReady}
    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext
