/* eslint-disable prettier/prettier */
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';


export default function Activities({services}) {
  return (
    <main className="px-3 mb-20">
      <div className="text-4xl sm:text-5xl text-center my-10">
        Nos prestations
      </div>
<<<<<<< HEAD

      <div className="grid md:grid-cols-3 gap-2 max-w-5xl m-auto ">
        <div className="bg-white">
=======
      {services.map((service) => (
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl m-auto">
        <div className="bg-white h-full  shadow-lg transform hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
>>>>>>> 0673f3ae2520cad421a890de42001fab90a43895
          <Image
            src="/images/diag.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={300}
            layout="responsive"
          />
          <div className="px-10 py-12 mb-20 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-10">
            TRAVAUX SIMPLES
            </div>
            <span className="text-sm">
              {service.ServiceLow}
            </span>
          </div>
<<<<<<< HEAD
          <button type="button" className="w-full text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-lg">
            à partir de <span className="text-4xl">35€</span>
=======
          <button className="w-full  fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-lg">
            à partir de <span className="text-4xl">{service.ServiceLowPrice}€</span>
>>>>>>> 0673f3ae2520cad421a890de42001fab90a43895
          </button>
        </div>
        <div className="bg-white shadow-lg transform hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
          <Image
            src="/images/vidange.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={300}
            layout="responsive"
          />
          <div className="px-10 py-12 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-10">
            TRAVAUX LOURDS
            </div>
            <span className="text-sm">
              {service.ServiceHigh}
            </span>
          </div>
<<<<<<< HEAD
          <button type="button" className="w-full text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-lg">
            à partir de <span className="text-4xl">55€</span>
=======
          <button className="w-full mt-20 fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-lg">
            à partir de <span className="text-4xl">{service.ServiceHighPrice}€</span>
>>>>>>> 0673f3ae2520cad421a890de42001fab90a43895
          </button>
        </div>
        <div className="bg-white shadow-lg transform hover:shadow-2xl transition duration-500 transform hover:scale-105 transition duration-500">
          <Image
            src="/images/carwash.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={300}
            layout="responsive"
          />
          <div className="px-10 py-12  text-center">
            <div className="text-2xl font-bold text-red-500 mb-10">
              DIVERS 
            </div>
            <span className="text-sm">
              {service.OtherService}
            </span>
          </div>
          <button className="w-full fixed -bottom-2 text-lg h-16 text-white font-extrabold bg-red-500 rounded-lg">
            à partir de <span className="text-4xl">{service.OtherServicePrice}€</span>
          </button>
        </div>
      </div>
        ))}
    </main>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_SERVICES_URL);
  const services = res.data;

  return {
    props: { services },
  };
}