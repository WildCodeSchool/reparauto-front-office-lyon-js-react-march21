import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="navbar fixed -bottom-24 flex justify-evenly items-end w-screen h-36 bg-gray-600 transform hover:-translate-y-24 transition duration-500 ">
      <h1 className="md:text-xl absolute top-2 items-start text-yellow-400">
        Informations
      </h1>
      <hr className=" absolute top-16 w-5/6 bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none rounded-xl" />
      <Link href="/Contact">
        <img
          type="image"
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 cursor-pointer items-center transform hover:scale-110 transition duration-500 mb-5"
        />
      </Link>
      <Link href="https://www.wildcodeschool.com/fr-FR">
        <img
          type="image"
          src="/logo-wild.png"
          alt="logo-wild"
          className=" w-20 cursor-pointer transform hover:scale-110 transition duration-500"
        />
      </Link>
      <Link href="https://www.facebook.com/repar.auto.mobile.florian.leblond">
        <img
          type="image"
          src="/facebook .png"
          alt="facebook-logo"
          className="w-12 h-12 mb-4 cursor-pointer transform hover:scale-110 transition duration-500"
        />
      </Link>
    </div>
  );
}
