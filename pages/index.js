import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import homeImg from '../public/images/accueil3-min.jpg';
import avatar from '../public/images/avatar.png';

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

      <div className="absolute bottom-10 w-screen bg-gray-500 md:p-10 p-5 flex flex-wrap justify-center">
        <Image
          src={avatar}
          alt="accueil"
          priority="true"
          placeholder="blur"
          width="230"
          height="150"
          className="m-2"
        />
        <hr className="w-px mx-4 md:transform-rotate-90 md:bg-gradient-to-b from-yellow-400 to-red-500 h-60 border-none" />
        <hr className="w-10/12 my-4 md:hidden bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none" />
        <div className="md:w-3/6 md:m-5 m-3 sm:w-screen ">
          <h2 className="text-yellow-400 md:text-xl md:font-semibold text-lg my-3">
            Bienvenue sur mon site !
          </h2>
          <h2 className="text-yellow-400 md:text-xl md:font-semibold text-lg">
            {' '}
            Je suis Florian LEBLOND 
          </h2>
          <p className="text-gray-200 md:text-xl md:font-semibold text-md">
            Mécanicien depuis 2001, j'ai décidé de me mettre à mon compte en
            2017, afin d'apporter à mes clients les compétences d'un
            professionnel à domicile.
            <br /> Vous pouvez me contacter au 06-34-37-24-42 et par mail
            repar-auto-mobile@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
