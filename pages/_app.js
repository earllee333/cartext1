import '../styles/globals.css'
import Layout from'../component/Layout'
import {AuthContextProvider} from '../stores/authContext'


function MyApp({ Component, pageProps }) {
  
  
return (
    <AuthContextProvider>
      <Layout />
      <Component {...pageProps} />
    </AuthContextProvider>
    
  )

}

export default MyApp
