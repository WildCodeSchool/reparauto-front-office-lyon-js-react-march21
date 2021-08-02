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
      className="flex flex-wrap justify-evenly items-center sm:m-0 md:mt-10"
    >
      {occasionCars.map((occasion) => (
        <motion.div key={occasion.id} whileHover={{ y: -7 }} className="w-96 ">
          <div className="mb-7 shadow-xl transform hover:shadow-2xl transition duration-400">
            <div>
              <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${occasion.photos[0].formats.small.url}`}
                alt={occasion.SecondHandModel}
                className="w-screen z-0 rounded-t-lg"
                width={500}
                height={350}
                layout="responsive"
                priority="true"
              />
              <div className="p-4 bg-gray-500 rounded-b-lg">
                <p className="my-4 text-white text-color-white text-lg font-semibold">
                  {occasion.titre}
                </p>
                <hr className=" bg-gradient-to-r from-yellow-400 to-red-500 my-4 h-px border-none" />
                <h2 className="flex justify-end -mb-14 pt-3 text-white text-xl bg-grey-500 ">
                  Prix :
                  <span className="text-xl text-white font-medium">
                    {occasion.prix}€ TTC
                  </span>{' '}
                </h2>
                <motion.button
                  whileHover={{
                    originX: 0,
                    color: '#ffffff',
                    backgroundColor: '#fdb31f',
                  }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  className="flex text-lg bg-gray-200 my-5 shadow-lg hover:shadow-2xl cursor-pointer px-4 py-2 rounded-lg align-center"
                >
                  <Link href={`/Occasions/${occasion.id}`}>Détails</Link>
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
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/second-hand-cars`
  );
  const occasionCars = res.data;

  return {
    props: { occasionCars },
    revalidate: 10,
  };
}
