import Image from 'next/image';
import Head from 'next/head';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import styles from '../styles/Home.module.css';
import avatar from '../public/images/avatar.png';
import acceuil3 from '../public/images/accueil3.jpg';
import 'pure-react-carousel/dist/react-carousel.es.css';
import flecheGauche from '../public/images/flechegauche.png';
import flecheDroite from '../public/images/flechedroite.png';

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
      <div className="h-40 md:px-20 mt-0 sm:px-0">
        <CarouselProvider
          naturalSlideWidth={150}
          naturalSlideHeight={75}
          totalSlides={4}
          isPlaying
          infinite
          // isIntrinsicHeight="true"
          layout="fill"
          objectfit="cover"
          className="h-4"
        >
          <Slider className="">
            <Slide index={0}>
              <Image
                alt="reparHome"
                src={acceuil3}
                layout="fill"
                objectFit="cover"
                className=""
              />
            </Slide>
            <Slide index={1}>
              <Image
                alt="reparActivities"
                src={acceuil3}
                layout="fill"
                objectFit="cover"
              />
            </Slide>
            <Slide index={2}>
              <Image
                alt="reparAppointments"
                src={acceuil3}
                layout="fill"
                objectFit="cover"
              />
            </Slide>
            <Slide index={3}>
              <Image
                alt="reparNotices"
                src={acceuil3}
                layout="fill"
                objectFit="cover"
              />
            </Slide>
          </Slider>

          <div className="flex justify-around">
            <ButtonBack className="absolute  left-2 top-80 ">
              <Image
                className="absolute sm:w-3 md:w-10"
                src={flecheGauche}
                alt="left"
              />
            </ButtonBack>
            <ButtonNext className="absolute right-2 top-80">
              <Image className="w-10" src={flecheDroite} alt="right" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>

      <div className="fixed bottom-10 w-screen bg-gray-500 md:p-3 p-2 flex flex-wrap justify-center">
        <Image
          src={avatar}
          alt="accueil"
          priority="true"
          width="110"
          height="120"
        />

        <hr className="w-px mx-4 md:transform-rotate-90 md:bg-gradient-to-b from-yellow-400 to-red-500 h-auto border-none" />
        <hr className="w-10/12 my-4 md:hidden bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none" />
        <div className="md:w-auto  sm:w-screen ">
          <h2 className="text-yellow-400 md:text-lg lg:text-xl md:font-semibold text-lg my-1">
            Bienvenue sur mon site !
          </h2>
          <h2 className="text-yellow-400 md:text-sm lg:text-lg md:font-semibold text-md">
            {' '}
            Je suis Florian LEBLOND
          </h2>
          <p className="text-gray-200 md:text-sm  md:font-semibold text-md">
            Mécanicien depuis 2001, j'ai décidé de me mettre à mon compte en
            2017,
            <p>
              {' '}
              afin d'apporter à mes clients mes compétences de professionnel à
              domicile.
            </p>
            Vous pouvez me contacter au 06-34-37-24-42 et par Email sur
            repar-auto-mobile@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
