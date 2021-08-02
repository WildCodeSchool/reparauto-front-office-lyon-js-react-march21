import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import avatar from '../public/images/avatar.png';
import acceuil1 from '../public/images/accueil-1mini.jpg';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="Répar'Auto-mobile"
          content="Le spécialiste de la réparation de véhicule à domicile"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <div className="flex justify-center">
        <Image
          src={acceuil1}
          alt="acceuil"
          layout="intrinsic"
          width="1200"
          height="700"
          priority="true"
        />
      </div>
      <div className=" absolute bottom-10 w-screen bg-gray-500 md:p-6 p-3 flex flex-wrap justify-center">
        <div className="hidden md:contents">
          <Image
            src={avatar}
            alt="accueil"
            priority="true"
            width="110"
            height="120"
          />
          <hr className="w-px mx-4 md:transform-rotate-90 md:bg-gradient-to-b from-yellow-400 to-red-500 h-auto border-none" />
        </div>
        <div className=" bottom-10 md:w-auto md:mx-2  sm:w-screen  ">
          <div className="md:hidden absolute right-3 top-3">
            <Image
              src={avatar}
              alt="accueil"
              priority="true"
              width="50"
              height="55"
            />
          </div>
          <h2 className="custom-font text-yellow-400 md:text-lg lg:text-xl md:font-semibold text-lg my-1">
            Bienvenue sur mon site !
          </h2>
          <h2 className="custom-font text-yellow-400 md:text-sm lg:text-lg md:font-semibold text-md">
            {' '}
            Je suis Florian LEBLOND
          </h2>
          <p className="text-gray-200 md:text-md md:font-semibold text-md">
            Mécanicien depuis 2001, j'ai décidé de me mettre à mon compte en
            2017,
            <br />
            afin d'apporter à mes clients mes compétences de professionnel à
            domicile.
            <br /> Vous pouvez me contacter au 06-34-37-24-42 et
            <br />
            par Email sur repar-auto-mobile@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
