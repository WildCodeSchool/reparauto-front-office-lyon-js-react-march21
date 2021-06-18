import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="navbar">
      <input
        onClick={showMenu}
        type="image"
        src="./icon-burger.png"
        alt="menu"
        className=" w-6 right-6 top-8 absolute md:hidden "
      />
      <div className="md:flex justify-around items-center flex-row shadow-lg py-7 px-0 bg-gradient-to-r from-yellow-400 to-red-500 ">
        <img
          className="md:w-16 absolute left-2 top-5 md:left-0 md:top-2 w-12"
          src="./logo.png"
          alt="logo"
        />
        <div className="text-xl text-gray-900 sm:ml-10 sm:flex sm:justify-around md:flex md:justify-around md:mx-16 ml-20">
          <Link href="/">Repar'Auto Mobile</Link>
        </div>

        {toggleMenu && (
          <div className=" md:flex md:items-center ">
            <div className="ml-20 md:mx-4 text-gray-800">
              <Link href="./Appointments">Rendez-vous</Link>
            </div>
            <div className="ml-20 md:mx-4 text-gray-800">
              <Link href="./Activities">Activités</Link>
            </div>
            <div className="ml-20 md:mx-4 text-gray-800">
              <Link href="./Occasions">Véhicules d'occasions</Link>
            </div>
            <div className="ml-20 md:mx-4 text-gray-800">
              <Link href="./Customers-notices">Avis clients</Link>
            </div>
            <div className="ml-20 md:mx-4 text-gray-800">
              <Link href="./Contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
