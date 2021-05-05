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
      <p>For great</p>
      <p><strong>Be Brilliant.</strong></p>
    </div>
    <style jsx>
      {`{
        .Aim{padding-top:60px}
      }`}
    </style>
    </div>
  )
}
