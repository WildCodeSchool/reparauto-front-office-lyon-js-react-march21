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
        <div key={occasion.id} className="md:flex mt-2 ">
          <div className="bg-white sm:w-full md:w-3/5 my-10 m-auto border-1 border-dashed border-gray-100 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden ">
            <div>
              <Image
                src={occasionImg}
                alt={occasion.SecondHandModel}
                className="w-screen z-0"
                width={500}
                height={350}
                layout="responsive"
              />

              <div className="p-4">
                <p className="my-3 text-gray-900 text-lg font-semibold">
                  {occasion.titre}
                </p>
                <span className="text-gray-700">
                  Prix :{' '}
                  <span className="text-xl font-medium">
                    {occasion.Price} TTC
                  </span>{' '}
                </span>
                <button
                  type="button"
                  className="flex my-5 shadow-lg hover:shadow-2xl cursor-pointer bg-yellow-300 px-4 py-2 bg-teal-500 rounded-lg  align-center"
                >
                  <Link href="./Detail-occasion">Détails</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_OCCASION_URL);
  const occasionCars = res.data;

  return {
    props: { occasionCars },
    revalidate: 90,
  };
}
