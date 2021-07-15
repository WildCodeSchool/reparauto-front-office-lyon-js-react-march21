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
      <div className="px-3 mb-10 ">
        <h1 className="text-4xl sm:text-5xl text-center my-10">
          Nos prestations
        </h1>
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-evenly sm:flex-col md:flex-row"
          >
            <div className="bg-white mt-10 w-80 h-full shadow-lg transform motion-safe:hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
              <Image
                src="/images/diag.jpg"
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-10 py-12 mb-20 text-center">
                <h1 className="text-2xl font-bold text-yellow-500 mb-10">
                  TRAVAUX SIMPLES
                </h1>
                <span className="text-sm">{service.ServiceLow}</span>
              </div>
              <button
                type="button"
                className="w-full  fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-b-lg"
              >
                à partir de{' '}
                <span className="text-4xl">{service.ServiceLowPrice}€</span>
              </button>
            </div>
            <div className="bg-white mt-10 w-80 shadow-lg transform motion-safe:hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
              <Image
                src="/images/vidange.jpg"
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-10 py-12 text-center">
                <h1 className="text-2xl font-bold text-yellow-600 mb-10">
                  TRAVAUX LOURDS
                </h1>
                <span className="text-sm">{service.ServiceHigh}</span>
              </div>
              <button
                type="button"
                className="w-full mt-20 fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-b-lg"
              >
                à partir de{' '}
                <span className="text-4xl">{service.ServiceHighPrice}€</span>
              </button>
            </div>
            <div className="bg-white mt-10 w-80 shadow-lg transform motion-safe:hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
              <Image
                src="/images/carwash.jpg"
                alt="carwash"
                className="w-full"
                width={500}
                height={300}
                layout="responsive"
              />
              <div className="px-10 py-12  text-center">
                <h1 className="text-2xl font-bold text-red-500 mb-10">
                  DIVERS
                </h1>
                <span className="text-sm">{service.OtherService}</span>
              </div>
              <button
                type="button"
                className="w-full fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-red-500 rounded-b-lg"
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
  };
}
