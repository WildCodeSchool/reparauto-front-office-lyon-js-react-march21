/* eslint-disable react/button-has-type */
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function Occasions({ occasionCars }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="md:flex flex-row justify-evenly "
    >
      {occasionCars.map((occasion) => (
        <div key={occasion.id} className="md:flex mt-2 ">
          <div className="bg-white sm:w-full md:w-80 my-10 m-auto border-1 border-dashed border-gray-100 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden ">
            <div>
              <Image
                src={occasion.Photos[0].url}
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
  };
}
