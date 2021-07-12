/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import homeImg from '../public/images/accueil-1.jpg';

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

      <div className="sm:mt-0 md:mt-10">
        <div className="w-full m-auto max-w-7xl">
          <Image
            src={homeImg}
            alt="accueil"
            layout="responsive"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
}
