import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="navbar"
    >
      <input
        onClick={showMenu}
        type="image"
        src="./icon-burger.png"
        alt="menu"
        className=" w-6 right-6 top-7 absolute md:hidden "
      />
      <div className="md:flex justify-around items-center flex-row shadow-lg py-7 px-0 bg-gradient-to-r from-yellow-400 to-red-500 ">
        <img
          className="md:w-16 absolute left-2 top-3 md:left-1 md:top-2 w-12"
          src="./logo.png"
          alt="logo"
        />
        <div className="text-xl text-gray-900 sm:ml-10 sm:flex sm:justify-around md:flex md:justify-around md:mx-16 ml-20">
          <Link href="/">Repar'Auto Mobile</Link>
        </div>
        {toggleMenu && (
          <div className=" md:flex md:items-center ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-20 md:mx-4 text-gray-800 "
            >
              <Link href="./Appointments">Rendez-vous</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-20 md:mx-4 text-gray-800 "
            >
              <Link href="./Activities">Activités</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-20 md:mx-4 text-gray-800 "
            >
              <Link href="./Occasions">Véhicules d'occasions</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-20 md:mx-4 text-gray-800 "
            >
              <Link href="./Customers-notices">Avis clients</Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-20 md:mx-4 text-gray-800"
            >
              <Link href="./Contact">Contact</Link>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
