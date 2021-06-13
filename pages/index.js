import Head from 'next/head'

import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Répar'Automobile</title>
        <meta name="Répar'Auto-mobile" content="Réparation de véhicule à domicile" />
        <link rel="icon" href="./favicon.png"/>
      </Head>
      <h1>Main page under construction</h1>
    </div>
  );
}
