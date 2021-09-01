import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import axios from 'axios';
import avatar from '../public/images/avatar.png';
import accueil1 from '../public/images/accueil-1mini.jpg';
import accueil2 from '../public/images/accueil3-min.jpg';
import accueil3 from '../public/images/accueil-2-min.jpg';

export default function Home({ promotions }) {
  const [showModal, setShowModal] = useState(true);

  return (
    <div>
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="description"
          content="Répar'Autombile : Le spécialiste de la réparation de véhicule à domicile"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      {showModal ? (
        <div>
          {promotions.map((promotion) => (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-screen my-6 mx-auto max-w-3xl">
                  {/* content */}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full modal bg-gray-500 outline-none focus:outline-none">
                    {/* header */}
                    <div className="flex items-start justify-center p-5 rounded-t">
                      <h3 className="text-3xl text-gray-200 custom-font cursor-default pt-3">
                        Promotions !
                      </h3>
                    </div>
                    {/* body */}
                    <div className="relative p-6 flex-row custom-font">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${promotion.PromotionPhoto.url}`}
                        alt="accueil"
                        priority="true"
                        width="500"
                        height="300"
                        layout="responsive"
                        className="rounded-lg"
                      />
                      <h6 className="text-2xl text-center text-gray-200 cursor-default mt-3">
                        {promotion.PromotionDescription}
                      </h6>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-yellow-500 rounded-b">
                      <button
                        className="text-yellow-500 background-transparent custom-font text-xl uppercase px-4 py-2 text-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Fermer
                      </button>
                      <motion.button
                        whileHover={{
                          originX: 0,
                          color: '#FFFFFF',
                          backgroundColor: '#fdb31f',
                        }}
                        className="bg-gray-200 text-xl custom-font my-2 ml-4 p-3 w-44 rounded-lg "
                      >
                        <Link href="/Appointments">
                          <p>Ça m'intéresse !</p>
                        </Link>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-75 fixed inset-0 z-40 bg-black" />
            </>
          ))}
        </div>
      ) : null}

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

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/promotions`
  );
  const promotions = res.data;

  return {
    props: { promotions },
    revalidate: 120,
  };
}
