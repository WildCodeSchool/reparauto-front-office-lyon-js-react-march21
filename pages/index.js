import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { useState } from 'react';
import modalBg from '../public/images/background-min.jpg';
import avatar from '../public/images/avatar.png';
import acceuil1 from '../public/images/accueil-1mini.jpg';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const promotionFactor = '50';
  const promotionDescription = 'toutes les vidanges';
  const promotionEndDate = '31 aout';

  return (
    <div>
      <Head>
        <Script async src="https://www.google-analytics.com/analytics.js" />
        <title>Répar'Automobile</title>
        <meta
          name="descritpion"
          content="Répar'Autombile : Le spécialiste de la réparation de véhicule à domicile"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-screen my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full modal outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-center p-5 border-b border-solid border-yellow-500 rounded-t">
                  <h3 className="text-3xl text-gray-200 font-semibold cursor-default">
                    Promotions !
                  </h3>
                </div>
                {/* body */}
                <div className="relative p-6 flex-row">
                  <Image
                    src={modalBg}
                    alt="accueil"
                    priority="true"
                    layout="responsive"
                  />
                  <hr className="w-px mx-3 md:transform-rotate-90 md:bg-gradient-to-b from-yellow-400 to-red-500 h-auto border-none" />
                  <h6 className="text-2xl text-center text-gray-200 font-semibold cursor-default mt-1">
                    {promotionFactor}% de promotion sur {promotionDescription}{' '}
                    jusqu'au {promotionEndDate} !
                  </h6>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-yellow-500 rounded-b">
                  <button
                    className="text-red-400 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    J'ai compris !
                  </button>
                  <motion.button
                    whileHover={{
                      originX: 0,
                      color: '#FFFFFF',
                      backgroundColor: '#fdb31f',
                    }}
                    className="bg-gray-200 text-lg my-2 ml-3 p-3 w-52 rounded-lg "
                  >
                    {' '}
                    <Link href="/Appointments">
                      <p>Ça m'intéresse !</p>
                    </Link>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
      <div className="flex justify-center  md:mt-10 xl:mt-16 xl:mt-20">
        <Image
          src={acceuil1}
          alt="accueil"
          layout="intrinsic"
          height="700"
          width="1200"
          priority="true"
          className=" md:rounded-xl "
        />
      </div>
      <div className="cursor-default fixed bottom-10 w-screen bg-gray-500 md:p-5 p-4 flex flex-wrap justify-center">
        <motion.div className="hidden md:contents">
          <Image
            src={avatar}
            alt="accueil"
            priority="true"
            width="100"
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
