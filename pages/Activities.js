/* eslint-disable prettier/prettier */
import Image from 'next/image';
import Head from 'next/head';
import axios from 'axios';


export default function Activities({activities}) {
  console.log(activities)
  return (
    <main className="px-3 mb-6">
      <div>
      <div className="text-4xl sm:text-5xl text-center my-10">
        Nos prestations
      </div>
      {activities.map((service)=> (

        <div className="grid md:grid-cols-3 gap-2 max-w-5xl m-auto mx-5px">
        <div className="bg-white">
          <Image
            src="/images/diag.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={250}
            layout="responsive"
            />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-yellow-500 mb-4">
            TRAVAUX SIMPLES
            </div>
            <span className="text-sm">
              {service.ServiceLow}
            </span>
          </div>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-yellow-500 rounded-lg">
            à partir de <span className="text-4xl">{service.ServicesPrice}</span>
          </button>
        </div>
        <div className="bg-white">
          <Image
            src="/images/vidange.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={250}
            layout="responsive"
            />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-yellow-600 mb-4">
            TRAVAUX LOURDS
            </div>
            <span className="text-sm">
              {service.ServiceHigh}
            </span>
          </div>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-yellow-600 rounded-lg">
            à partir de <span className="text-4xl">{service.ServiceHighPrice}€</span>
          </button>
        </div>
        <div className="bg-white">
          <Image
            src="/images/carwash.jpg"
            alt="carwash"
            class="w-full"
            width={500}
            height={250}
            layout="responsive"
            />
          <div className="px-10 py-6 mb-10 text-center">
            <div className="text-2xl font-bold text-red-500 mb-4">
              DIVERS 
            </div>
            <span className="text-sm">
              {service.OtherService}
            </span>
          </div>
          <button className="w-full text-lg h-16 text-white font-extrabold bg-red-500 rounded-lg">
            à partir de <span className="text-4xl">{service.OtherServicePrice}€</span>
          </button>
        </div>
      </div>
        ))}
      </div>
    </main>
  );
}
export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/Rates');
  const activities = res.data;

  return {
    props: { activities },
  };
}
