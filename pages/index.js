/* eslint-disable prettier/prettier */
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home({occasionCars}) {
 
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

      
      <div className="sm:mt-0 md:mt-10 ">
        {/*occasionCars && 
        <div>
         <p>{occasionCars[0].SecondHandModel}</p>
         <p>{occasionCars[0].SecondHandBrand}</p>
         <p>{occasionCars[0].Description}</p>
         <p>{occasionCars[0].Price}€</p>
        </div>*/} 
        <Image
          src="/images/accueil-1.jpg"
          alt="accueil"
          height="800px"
          width="1000px"
        />
      </div>
    </div>
  );
}

{/*export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/second-hand-cars')
  const occasionCars = res.data;
  
  return {
    props: {occasionCars}
  };
}*/}