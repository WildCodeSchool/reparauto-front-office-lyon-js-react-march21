import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import avatar from '../public/images/avatar.png';
import accueil1 from '../public/images/accueil-1mini.jpg';
import accueil2 from '../public/images/accueil3-min.jpg';
import accueil3 from '../public/images/accueil-2-min.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="Répar'Auto-mobile"
          content="Le spécialiste de la réparation de véhicule à domicile"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60}
        totalSlides={3}
        infinite="true"
        isPlaying="true"
        className="text-center max-h-full"
      >
        <Slider className="slider-container">
          <Slide>
            <Image
              src={accueil1}
              alt="accueil"
              width="1400"
              height="770"
              layout="intrinsic"
              priority="true"
              className=""
            />
          </Slide>
          <Slide>
            <Image
              src={accueil2}
              alt="accueil"
              width="1400"
              height="770"
              layout="intrinsic"
              priority="true"
              className=""
            />
          </Slide>
          <Slide>
            <Image
              src={accueil3}
              alt="accueil"
              width="1400"
              height="770"
              layout="intrinsic"
              priority="true"
              className=""
            />
          </Slide>
        </Slider>
      </CarouselProvider>
      <div className="cursor-default fixed bottom-10 w-screen bg-gray-500 md:p-5 p-4 flex flex-wrap justify-center">
        <motion.div className="hidden md:contents">
          <Image
            src={avatar}
            alt="accueil"
            priority="true"
            width="90"
            height="100"
          />
          <hr className="w-px mx-3 md:transform-rotate-90 md:bg-gradient-to-b from-yellow-400 to-red-500 h-auto border-none" />
        </motion.div>
        <div className="bottom-10 md:w-auto md:mx-2 sm:w-screen">
          <div className="md:hidden absolute right-3 top-3">
            <Image
              src={avatar}
              alt="accueil"
              priority="true"
              width="45"
              height="50"
            />
          </div>
          <h2 className="custom-font text-yellow-400 md:text-lg lg:text-xl text-md">
            Bienvenue sur mon site !
          </h2>
          <h2 className="custom-font text-yellow-400 md:text-sm lg:text-lg text-md">
            Je suis Florian LEBLOND
          </h2>
          <p className="text-gray-200 md:text-md md:font-semibold text-sm">
            Mécanicien depuis 2001, j'ai décidé de me mettre à mon compte en
            2017,
            <br />
            afin d'apporter à mes clients mes compétences de professionnel à
            domicile.
          </p>
        </div>
      </div>
    </div>
  );
}
