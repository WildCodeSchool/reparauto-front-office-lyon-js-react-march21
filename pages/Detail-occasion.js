// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';

// eslint-disable-next-line camelcase
export default function Detail_occasions() {
  return (
    <div className="my-10">
      <div className="bg-white w-2/3 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
        <div className="slider">
          <figure>
            <Image
              src="/images/voiture.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture2.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture3.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture4.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture5.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
            <Image
              src="/images/voiture6.jpg"
              alt="Dacia"
              class="w-full"
              width={500}
              height={250}
              layout="responsive"
            />
          </figure>
        </div>
        <div className="p-4">
          <p className="mb-1 text-gray-900 font-semibold">
            Dacia Logan break MCV phase 2 DCI 85CV
          </p>

          <br />
          <span className="text-gray-700">Gris métallisé, Intérieur tissu</span>
          <br />
          <span className="text-gray-700">Février 2010, 225000km</span>
          <br />
          <span className="text-gray-700">Diesel, 6Cv</span>
          <br />
          <span className="text-gray-700">5 portes, 5 places </span>
          <br />
          <span className="text-gray-700">
            Climatisation, Vitres avant électriques, Direction assistée,
            Fermeture centralisée, Barres de toit, 4 pneus 4 saisons
          </span>
          <br />
          <span className="text-gray-700">
            Révisée, Distribution neuve, Contrôle technique OK{' '}
          </span>
          <br />
          <span className="text-gray-700">
            Garantie 3 mois MINIMUM extension possible{' '}
          </span>
          <br />
          <br />

          <span className="text-gray-700">
            Prix : <span className="text-xl font-medium">2990€ TTC</span>{' '}
          </span>

          <div className="mt-8 mb-3" />
        </div>
      </div>
    </div>
  );
}
