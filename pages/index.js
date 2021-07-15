import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import homeImg from '../public/images/accueil1.jpg';

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
        <div className="w-full m-auto max-w-7xl pb-20">
          <Image
            src="/images/accueil1.jpg"
            alt="accueil"
            layout="responsive"
            placeholder="blur"
            height="700px"
            width="900px"
          />
        </div>
      </div>
    </div>
  );
}
