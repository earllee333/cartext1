import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import styles from '../styles/Home.module.css'

//<meta name="viewport" contentcontent="width=device-width initial-scale=1, user-scalable=1"/>
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Don'sCar|Home</title>
        <link rel="icon" href="/soup.ico" />
      </Head>
    <div className='Aim'>
      <p>如果喜歡一個女生 就和她告白</p>
      <p>我用這個方法從未失敗過</p>
      <p id="chris">Chris Evens</p>
    </div>
    <style jsx>
      {`{
        .Aim{padding-top:60px;margin:0 auto};
        
      }`}
    </style>
    </div>
  )
}
