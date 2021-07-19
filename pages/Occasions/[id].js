import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function DetailsOccasions({ occasion }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
      className="flex justify-evenly sm:flex-row md:flex flex-col-reverse"
    >
      <div className="mt-8 mb-16 sm:w-screen md:w-auto bg-white w-96 m-auto border-1 border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="slider">
          {occasion.photos.map((photo) => {
            const photoUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${photo.url}`;
            return (
              <Image
                src={photoUrl}
                alt={occasion.titre}
                className="w-full"
                width={384}
                height={250}
                layout="responsive"
              />
            );
          })}
        </div>
        <div className="p-4">
          <p className="text-gray-700">Marque: {occasion.marque}</p>
          <br />
          <p className="text-gray-700">Modèle: {occasion.model}</p>
          <br />
          <h3>Description:</h3>
          <br />
          <p className="text-gray-700"> {occasion.description}</p>
          <p className=" mt-3 text-gray-700">Prix : {occasion.prix} TTC </p>
          <div className="mt-8 mb-3" />
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
  const occasion = await axios
    .get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/second-hand-cars/${params.id}`
    )
    .then((res) => res.data);

  return {
    props: { occasion },
    revalidate: 10,
  };
}
