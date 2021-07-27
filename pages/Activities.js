import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';

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
      <div className="flex flex-wrap justify-evenly md:my-10 ">
        {services.map((service) => (
          <motion.div whileHover={{ y: -7 }} key={service.id} className=" ">
            <div className="bg-gray-500 md:w-96 w-screen rounded-xl shadow-lg mb-10 transform hover:shadow-2xl transition duration-400">
              {service.picture && (
                <Image
                  src={service.picture}
                  alt={service.Titre}
                  className="rounded-t-lg "
                  width={500}
                  height={320}
                  layout="responsive"
                  priority="true"
                />
              )}
              <div className=" my-2 ">
                <h1 className="text-xl p-3 font-bold text-yellow-500 ">
                  {service.Titre}
                </h1>
                <hr className="mx-4 bg-gradient-to-r from-yellow-400 to-red-500 my-3 h-px border-none" />
                <p className="text-lg text-gray-200 my-5 p-3">
                  {service.Description}
                </p>
                <hr className="mx-4 bg-gray-200 my-3 h-px border-none" />
                <motion.button
                  whileHover={{
                    scale: 1.01,
                    originX: 0,
                    color: '#5c5453',
                    backgroundColor: '#fdb31f',
                  }}
                  className="bg-gray-200 text-lg my-3 ml-3 p-3 w-52 cursor-none rounded-lg "
                >
                  {' '}
                  A partir de {service.Prix} € TTC
                </motion.button>
              </div>
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
