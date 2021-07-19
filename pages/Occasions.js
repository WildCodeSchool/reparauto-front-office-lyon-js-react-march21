/* eslint-disable react/button-has-type */
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { motion } from 'framer-motion';
import occasionImg from '../public/images/accueil3.jpg';

export default function Occasions({ occasionCars }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex-col justify-center md:mt-10"
    >
      <div>
        <h1 className="text-2xl sm:text-5xl text-center py-3 bg-white w-full md:bg-transparent ">
          Venez découvrir nos Occasions !
        </h1>
      </div>
      {occasionCars.map((occasion) => (
        <motion.div
          key={occasion.id}
          whileHover={{ y: -7 }}
          className="md:flex mt-2 "
        >
          <div className="bg-white sm:w-full md:w-2/5 my-10 m-auto border-1 border-dashed border-gray-100 shadow-xl transform hover:shadow-2xl transition duration-400 rounded-lg overflow-hidden ">
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${occasion.photos[0].formats.large.url}`}
                alt={occasion.SecondHandModel}
                className="w-screen z-0"
                width={500}
                height={350}
                layout="responsive"
              />
              <div className="p-4 bg-gray-500">
                <p className="my-3 text-white text-color-white text-xl font-semibold">
                  {occasion.titre}
                  <hr className="bg-gradient-to-r from-yellow-400 to-red-500 my-3 h-px border-none" />
                </p>
                <span className="flex justify-end -mb-14 pt-3 text-white text-xl bg-grey-500 ">
                  Prix :{' '}
                  <span className="text-xl text-white font-medium">
                    {occasion.prix} TTC
                  </span>{' '}
                </span>
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    originX: 0,
                    color: '#5c5453',
                    backgroundColor: '#fdb31f',
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex text-lg bg-gray-200 my-5 shadow-lg hover:shadow-2xl cursor-pointer px-4 py-2 rounded-lg align-center"
                >
                  <Link href="./Detail-occasion">Détails</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_OCCASION_URL);
  const occasionCars = res.data;

  return {
    props: { occasionCars },
    revalidate: 10,
  };
}
