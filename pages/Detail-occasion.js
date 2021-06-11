// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import Image from 'next/image'
export default function Detail_occasions() {
  return (

<div class="flex my-10">
    <div class="bg-white w-1/2 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
    <Image src='/images/voiture.jpg' alt="Dacia" class="w-full" width={500} height={250} layout="responsive"/>
      <div class="p-4">
        <p class="mb-1 text-gray-900 font-semibold">Dacia Logan break MCV phase 2 DCI 85CV</p>

        
<br></br>
<span class="text-gray-700">Gris métallisé, Intérieur tissu</span>
<br></br>
<span class="text-gray-700">Février 2010, 225000km</span>
<br></br>
<span class="text-gray-700">Diesel, 6Cv</span>
<br></br>
<span class="text-gray-700">5 portes, 5 places </span>
<br></br>
<span class="text-gray-700">Climatisation, Vitres avant électrique, Direction assistée, Fermeture centralisée, Barres de toit, 4 pneus 4 saisons</span>
<br></br>
<span class="text-gray-700">Révisée, Distribution neuve, Contrôle technique OK </span>
<br></br>
<span class="text-gray-700">Garantie 3 mois MINIMUM extension possible </span>
        <br></br>
        <br></br>

        <span class="text-gray-700">Prix : <span class="text-xl font-medium">2990€ TTC</span> </span>

        <div class="mt-8 mb-3">
        </div>
      </div>
    </div>
    </div>
  )
  }