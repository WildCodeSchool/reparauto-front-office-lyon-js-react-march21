// import Head from 'next/head'
// import Layout, { siteTitle } from '../components/layout'
// import utilStyles from '../styles/utils.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Occasions() {
    return (
<div className="md:flex flex-col">
  <div className="md:flex mt-2">
    <div className="bg-white w-3/5 md:w-1/3 mt-10  md:mx-20 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden ">
      <Image src='/images/voiture.jpg' alt="Dacia" class="w-full" width={500} height={250}/>
      <div className="p-4">
        <p className="mb-1 text-gray-900 text-xl font-semibold">Dacia Logan break MCV phase 2 DCI 85CV</p>

        <br></br>
        <br></br>

        <span className="text-gray-700">Prix : <span class="text-xl font-medium">2990€ TTC</span> </span>

        <div className="mt-8 mb-3">
        <Link href="./Detail-occasion"
            className="cursor-pointer bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center"> Détails</Link>
        </div>
      </div>
    </div>
    <div className="bg-white w-3/5 md:w-1/3 my-10 md:mx-20 m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
    <Image src='/images/voiture.jpg' alt="Dacia" class="w-full" width={500} height={250}/>
      <div className="p-4">
        <p className="mb-1 text-gray-900 text-xl font-semibold">Dacia Logan break MCV phase 2 DCI 85CV</p>

        <br></br>
        <br></br>

        <span className="text-gray-700">Prix : <span class="text-xl font-medium">2990€ TTC</span> </span>

        <div className="mt-8 mb-3">
        <Link href="./Detail-occasion"
            className=" bg-yellow-300 px-4 py-2 bg-teal-500 shadow-lg border rounded-lg text-grey uppercase font-semibold tracking-wider focus:outline-none focus:shadow-outline hover:bg-teal-400 active:bg-teal-400 align-center"> Détails</Link>
        </div>
      </div>
    </div>
  <br></br>
  <br></br>
  </div>
  </div>
    )
  }