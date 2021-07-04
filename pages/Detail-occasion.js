import Image from 'next/image';
import axios from 'axios'
//import fs from 'fs';
//require('dotenv').config()

// eslint-disable-next-line camelcase
export default function Detail_occasions({occasionCars}) {
  return (
    <div className="my-10">
    {occasionCars.map((occasion) => (
      <div className="bg-white w-96 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="slider">
          <figure>
            <Image
              src="/images/voiture.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture2.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture3.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture4.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture5.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture6.jpg"
              alt="Dacia"
              class="w-full"
              width={384}
              height={250}
              layout="responsive"
            />
          </figure>
        </div>
        <div className="p-4">
          <p className="mb-1 text-gray-900 font-semibold">{occasion.titre}</p>
          <br />
          <h3 className="mb-1 text-gray-900 font-semibold"></h3>
          <p className="text-gray-700">Marque: {occasion.marque}</p>
          <br />
          <p className="text-gray-700">Modèle: {occasion.model}</p>

          <br />
          <h3>Description:</h3>
          <p className="text-gray-700"> {occasion.description}</p>
          <p className=" mt-3 text-gray-700">Prix : {occasion.prix} TTC{' '}</p>

          <div className="mt-8 mb-3" />
        </div>
      </div>
    ))};
    </div>
  )
}


export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/second-hand-cars');
  const occasionCars = res.data;
  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { occasionCars },
  };
}