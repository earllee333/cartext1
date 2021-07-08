import Head from 'next/head'
import Image from 'next/image'
import Footer from '../component/Footer'
import SliderPho from '../component/SliderPho'
import styles from '../styles/Home.module.css'

//<meta name="viewport" contentcontent="width=device-width initial-scale=1, user-scalable=1"/>
export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Don'sCar|Home</title>
        <link rel="icon" href="/soup.ico" />
        <link rel="preload" as="image" href='/blog'>
            </link>
      </Head>
      <SliderPho />
    <div className='Aim'>
      <p>If you like a girl,</p>
      <p>Go ahead and say 'I like you' </p>
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
