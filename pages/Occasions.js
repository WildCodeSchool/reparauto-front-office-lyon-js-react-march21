
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios'

export default function Occasions({occasionCars}) {
  return (
    <div className="md:flex flex-col ">
      {occasionCars.map((occasion)=> (
      <div className="md:flex mt-2 ">
        <div className="bg-white w-3/5 md:w-1/3 mt-10  md:mx-20 m-auto border-1  border-dashed border-gray-100 shadow-lg hover:shadow-2xl rounded-lg overflow-hidden ">
          <Image
            src="/images/voiture.jpg"
            alt="Dacia"
            class="w-full"
            width={500}
            height={350}
            layout="responsive"
          />
          <div className="p-4">
            <p className="my-3 text-gray-900 text-lg font-semibold">{occasion.titre}</p>
            <span className="text-gray-700">Prix : <span class="text-xl font-medium">{occasion.prix} TTC</span> </span>
            <button className="flex my-5 shadow-lg hover:shadow-2xl cursor-pointer bg-yellow-300 px-4 py-2 bg-teal-500 rounded-lg  align-center">
              <Link href="./Detail-occasion">Détails</Link>
            </button>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios.get(process.env.NEXT_PUBLIC_OCCASION_URL);
  const occasionCars = res.data;

  return {
    props: { occasionCars },
  };
}