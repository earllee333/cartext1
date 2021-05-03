import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Cars|Home</title>
        <meta name="viewport" contentcontent="width=device-width"/>
      </Head>
    <h1>from index</h1>
    </div>
  )
}
