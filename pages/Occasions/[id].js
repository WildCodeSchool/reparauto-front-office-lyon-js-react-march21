import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function DetailsOccasions({ occasion }) {
  if (!occasion) return null;
  return (
    <>
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="description"
          content="Nos voitures d'occasions disponibles à la vente."
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1 }}
        className="container items-center justify-center"
      >
        <div className="cursor-default details-occasion bg-gray-600 p-3 mb-14 ">
          <div className="slider  ">
            {occasion.photos.map((photo, index) => {
              const photoUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${photo.url}`;
              return (
                <CarouselProvider
                  naturalSlideWidth={100}
                  naturalSlideHeight={125}
                  totalSlides={6}
                  className="text-center max-h-full"
                >
                  <Slider className="slider-container">
                    <Slide index={index}>
                      <Image
                        src={photoUrl}
                        alt={occasion.titre}
                        className="m-5"
                        width={490}
                        height={320}
                        layout="responsive"
                        priority="true"
                      />
                    </Slide>
                  </Slider>
                </CarouselProvider>
              );
            })}
          </div>
          <hr className="w-full bg-gradient-to-r from-yellow-400 to-red-600 h-px border-none" />
          <div className=" bg-gray-500 text-gray-200 md:text-lg p-4">
            <div className="flex mt-2 mb-2 ">
              <h3 className="custom-font text-xl text-yellow-400">Marque:</h3>
              <p className="ml-3">{occasion.marque}</p>
              <h3 className="custom-font text-xl ml-5 text-yellow-400">
                Modèle:
              </h3>
              <p className="ml-3">{occasion.model}</p>
            </div>
            <h3 className="custom-font text-xl text-yellow-400 my-4">
              Description:
            </h3>
            <p className=""> {occasion.description}</p>
            <div className="flex my-3">
              <h3 className="custom-font text-xl text-yellow-400">Prix:</h3>
              <p className="ml-5 custom-font text-xl">{occasion.prix} € TTC </p>
              <motion.button
                whileHover={{
                  originX: 0,
                  color: '#ffffff',
                  backgroundColor: '#fdb31f',
                }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="ml-20 md:ml-48 lg:ml-96 custom-font text-gray-600 text-lg  bg-gray-200 border rounded-lg py-1 px-3 cursor-pointer rounded-lg"
              >
                <Link href="mailto:repar-auto-mobile@hotmail.com">Acheter</Link>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export async function getStaticPaths() {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/second-hand-cars?_limit=-1`;
  const occasions = await axios.get(url).then((res) => res.data);
  const paths = occasions.map((occasion) => ({
    params: { id: occasion.id.toString() },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/second-hand-cars/${params.id}`;
  const occasion = await axios.get(url).then((res) => res.data);

  return {
    props: { occasion },
    revalidate: 10,
  };
}
