import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Activities({ services }) {
  return (
    <div className="flex flex-wrap justify-evenly items-center mb-20 ">
      <Head>
        <title>Répar'Automobile</title>
        <meta
          name="Répar'Auto-mobile"
          content="Activités de l'entreprise, entretien, pneumatiques, freinage, distribution, embrayage, climatisation"
        />
        <link rel="icon" href="./favicon.png" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.1 }}
      >
        <div className="flex flex-wrap md:justify-around w-screen">
          {services.map((service) => (
            <motion.div key={service.id} whileHover={{ y: -7 }}>
              <div className="bg-gray-600 mt-10 md:w-80 p-2 w-screen rounded-xl shadow-lg transform hover:shadow-2xl transition duration-400">
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
                  <h1 className="custom-font text-2xl p-2 font-bold text-yellow-500 ">
                    {service.Titre}
                  </h1>
                  <hr className=" bg-gradient-to-r from-yellow-400 to-red-500 my-3 h-px border-none" />
                  <p className="text-lg text-gray-200 my-5 p-4">
                    {service.Description}
                  </p>

                  <motion.button
                    whileHover={{
                      originX: 0,
                      color: '#FFFFFF',
                      backgroundColor: '#fdb31f',
                      cursor: 'default',
                    }}
                    className="bg-gray-200 text-lg my-2 ml-3 p-3 w-52 cursor-non  rounded-lg "
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
    </div>
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
