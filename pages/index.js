/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';


export default function Home() {
 
  return (
    <div className={styles.container}>
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="Répar'Auto-mobile"
          content="Réparation de véhicule à domicile"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>

      
      <div className="sm:mt-0 md:mt-0 ">
        <Image
          src="/images/accueil-1.jpg"
          alt="accueil"
          height="700px"
          width="900px"
          opacity="0.5"
        />
      </div>
    </div>
  );
}

