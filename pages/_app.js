import '../styles/globals.css'
import Layout from'../component/Layout'
import {AuthContextProvider} from '../stores/authContext'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
//import 'semantic-ui-css/semantic.min.css'


function MyApp({ Component, pageProps }) {
  
  
return (
    <AuthContextProvider>
      <Layout />
      <Component {...pageProps}/>
      <Footer/>
    </AuthContextProvider>
    

    
  )

}

export default MyApp
