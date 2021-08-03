import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(true);

  const showMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="custom-font"
      >
        <motion.input
          whileHover={{ scale: 1.1, originX: 0 }}
          whileTap={{ scale: 0.9 }}
          onClick={showMenu}
          type="image"
          src="/icon-burger.png"
          alt="menu"
          className="w-6 right-6 top-5 absolute md:hidden"
        />
        <div className="md:flex justify-around items-center flex-row shadow-lg py-4 md:py-2 px-0 bg-gray-600 z-20">
          <img
            className="md:w-12 absolute left-2 top-3 md:left-3 md:top-3 w-10"
            src="/logo.png"
            alt="logo"
          />
          <motion.div
            whileHover={{ color: '#f7a809' }}
            whileTap={{ scale: 0.97 }}
            className="text-lg text-gray-300 w-52 ml-8 flex justify-around md:text-lg"
          >
            <Link href="/">Repar'AutoMobile</Link>
          </motion.div>
          {toggleMenu && (
            <div className=" md:flex md:items-center my-2">
              <motion.div
                whileHover={{ color: '#f78709' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-20 text-md text-gray-300 md:mx-4 my-2 md:text-lg"
              >
                <Link href="/Activities">Activités</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#e95e13' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-32 text-md text-gray-300 md:mx-4 md:text-lg"
              >
                <Link href="/Appointments">Rendez-vous</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f04913' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16  text-md text-gray-300 md:mx-4 my-2 md:text-lg"
              >
                <Link href="/Occasions">Occasions</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f4350b' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-12 text-md text-gray-300 md:mx-4 my-2 md:text-lg"
              >
                <Link href="/Customers-notices">Avis</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f71b09' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-16 text-md text-gray-300 md:mx-4 my-2 md:text-lg"
              >
                <Link href="/Contact">Contact</Link>
              </motion.div>
            </div>
          )}
        </div>
        <hr className=" w-screen bg-gradient-to-r from-yellow-400 to-red-600 h-0.5 border-none" />
      </motion.div>
    </>
  );
}
