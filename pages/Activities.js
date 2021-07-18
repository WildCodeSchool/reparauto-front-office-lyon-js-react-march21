import Image from 'next/image';
import axios from 'axios';
import { motion } from 'framer-motion';
import serviceLowImg from '../public/images/service1.jpg';
import serviceHighImg from '../public/images/service2.jpg';
import otherServiceImg from '../public/images/services3.jpeg';

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
      <div className="md:mb-20">
        <h1 className="text-3xl sm:text-5xl text-center py-3 bg-white md:bg-transparent w-full">
          Nos prestations
        </h1>
        {services.map((service) => (
          <div
            key={service.id}
            className="grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 md:ml-16"
          >
            <div className="bg-white md:mt-10 sm:w-screen md:w-64 rounded-b-lg shadow-lg transform hover:shadow-2xl transition duration-400">
              <Image
                src={serviceLowImg}
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-3 py-6 mb-20 text-center">
                <h1 className="text-2xl font-bold text-yellow-500 mb-10">
                  TRAVAUX SIMPLES
                </h1>
                <hr className="mb-5 w-5/5 bg-gray-700 h-px border-none" />
                <p className="text-md h-20">{service.ServiceLow}</p>
              </div>
              <button
                type="button"
                className="w-full fixed bottom-0 text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-b-lg"
              >
                à partir de{' '}
                <span className="text-4xl">{service.ServiceLowPrice}€</span>
              </button>
            </div>
            <div className="bg-white mt-10 sm:w-screen md:w-64 rounded-b-lg shadow-lg transform hover:shadow-2xl transition duration-400">
              <Image
                src={serviceHighImg}
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-3 py-6 text-center">
                <h1 className="text-2xl font-bold text-yellow-600 mb-10">
                  TRAVAUX LOURDS
                </h1>
                <hr className="mb-5 w-5/5 bg-gray-700 h-px border-none" />
                <p className="text-md h-32">{service.ServiceHigh}</p>
              </div>
              <button
                type="button"
                className="w-full fixed bottom-0 text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-b-lg"
              >
                à partir de{' '}
                <span className="text-4xl">{service.ServiceHighPrice}€</span>
              </button>
            </div>
            <div className="bg-white mt-10 sm:mb-20 md:mb-0 sm:w-screen md:w-64 rounded-b-lg shadow-lg transform hover:shadow-2xl transition duration-400">
              <Image
                src={otherServiceImg}
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-3 py-6 text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-10">
                  TRAVAUX DIVERS
                </h1>
                <hr className="mb-5 w-5/5 bg-gray-700 h-px border-none" />
                <p className="text-md h-32">{service.OtherService}</p>
              </div>
              <button
                type="button"
                className="w-full fixed bottom-0 text-lg h-16 text-white font-extrabold bg-red-500 rounded-b-lg"
              >
                à partir de{' '}
                <span className="text-4xl">{service.OtherServicePrice}€</span>
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
  const services = res.data;

  return {
    props: { services },
    revalidate: 60,
  };
}
