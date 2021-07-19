import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
// import pictureActivities from '../public/images/pictureActivities.jpg';

export default function Activities({ services }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.1 }}
    >
      {/* <Image
        className="opacity-30 mt-40 z-0"
        src={pictureActivities}
        alt="background"
        layout="fill"
      /> */}
      <div className="flex flex-row justify-center md:mb-20">
        <h1 className="text-3xl sm:text-5xl text-center py-3 bg-white md:bg-transparent w-full">
          Nos prestations
        </h1>
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col justify-center bg-red-300 w-80 md:ml-16"
          >
            <div className="bg-white md:mt-10 sm:w-screen md:w-80 rounded-b-lg shadow-lg transform hover:shadow-2xl transition duration-400">
              {service.picture && (
                <Image
                  src={service.picture}
                  alt={service.Titre}
                  className="w-full"
                  width={500}
                  height={300}
                  layout="responsive"
                />
              )}
              <div className="px-3 py-6 mb-20 text-center">
                <h1 className="text-2xl font-bold text-yellow-500 mb-10">
                  {service.Titre}
                </h1>
                <hr className="mb-5 w-5/5 bg-gray-700 h-px border-none" />
                <p className="text-md h-20">{service.Description}</p>
              </div>
              <button
                type="button"
                className="w-full fixed bottom-0 text-lg h-16 text-white font-extrabold bg-yellow-500 md:rounded-b-lg"
              >
                à partir de <span className="text-4xl">{service.Prix}€</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_SERVICES_URL);
  const services = res.data.map((service) => {
    const picture = service.Image[0] && service.Image[0].url;
    return {
      ...service,
      picture: picture
        ? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${picture}`
        : null,
    };
  });

  return {
    props: { services },
    revalidate: 10,
  };
}
