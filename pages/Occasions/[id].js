import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function DetailsOccasions({ occasion }) {
  if (!occasion) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex justify-center "
    >
      <div className="bg-grey-600 sm:m-0 md:mt-8 lg:mt-16 mb-16 sm:w-screen md:w-96 ">
        <div className="slider">
          {occasion.photos.map((photo) => {
            const photoUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${photo.url}`;
            return (
              <figure key={photo.id}>
                <Image
                  src={photoUrl}
                  alt={occasion.titre}
                  className="w-full"
                  width={500}
                  height={320}
                  layout="responsive"
                  priority="true"
                />
              </figure>
            );
          })}
        </div>
        <div className=" bg-gray-500 text-gray-200 md:text-lg p-4">
          <div className="flex mb-2 w-96">
            <h3 className="text-yellow-400">Marque:</h3>
            <p className="ml-3">{occasion.marque}</p>
            <h3 className="ml-5 text-yellow-400">Modèle:</h3>
            <p className="ml-3">{occasion.model}</p>
          </div>
          <h3 className="text-yellow-400 my-4">Description:</h3>
          <p className=""> {occasion.description}</p>
          <hr className="w-full my-5 bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none " />
          <div className="flex ">
            <h3 className="text-yellow-400">Prix:</h3>
            <p className="ml-5 ">{occasion.prix}€ TTC </p>
          </div>
        </div>
      </div>
    </motion.div>
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
