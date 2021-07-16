import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="fixed -bottom-24 flex justify-around items-end w-screen h-36 bg-gray-600 transform hover:-translate-y-24 transition duration-500 ">
      <h1 className="text-xl absolute top-2 items-start text-yellow-400">
        Informations
      </h1>
      <Link href="./Contact">
        <img
          type="image"
          src="./logo.png"
          alt="logo"
          className="w-10 h-10items-center transform hover:scale-110 transition duration-500 mb-3"
        />
      </Link>
      <Link href="https://www.wildcodeschool.com/fr-FR">
        <img
          type="image"
          src="./logo-wild.png"
          alt="logo-wild"
          className=" w-16 transform hover:scale-110 transition duration-500"
        />
      </Link>
      <Link href="https://www.facebook.com/repar.auto.mobile.florian.leblond">
        <img
          type="image"
          src="./facebook.png"
          alt="facebook-logo"
          className="w-10 h-10 mb-4 transform hover:scale-110 transition duration-500"
        />
      </Link>
    </div>
  );
}
