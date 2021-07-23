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
        
      /> */}
      <div className="flex flex-wrap justify-evenly m-10 ">
        {services.map((service) => (
          <motion.div
            whileHover={{ y: -7 }}
            key={service.id}
            className=" w-96  "
          >
            <div className="bg-gray-500 p-4 rounded-xl shadow-lg mt-10 transform hover:shadow-2xl transition duration-400">
              {service.picture && (
                <Image
                  src={service.picture}
                  alt={service.Titre}
                  className="rounded-t-lg
                  "
                  width={500}
                  height={320}
                  layout="responsive"
                />
              )}
              <div className="px-3 py-6 mb-20 text-center">
                <h1 className="text-2xl font-bold text-yellow-500 mb-10">
                  {service.Titre}
                </h1>
                <hr className="bg-gradient-to-r from-yellow-400 to-red-500 my-3 h-px border-none" />
                <p className="text-lg text-gray-200 h-10">
                  {service.Description}
                </p>
              </div>
              <hr className="bg-gray-200 my-3 h-px border-none" />
              <motion.span
                whileHover={{
                  scale: 1.01,
                  originX: 0,
                  color: '#5c5453',
                  backgroundColor: '#fdb31f',
                }}
                className="flex text-lg bg-gray-200 font-bold w-52 shadow-lg hover:shadow-2xl cursor-none px-4 py-2 rounded-lg align-center"
              >
                {' '}
                A partir de {service.Prix} TTC
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/rates`
  );
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
