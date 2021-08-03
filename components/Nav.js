import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const iconRotation = {
    open: {
      scale: 2,
      rotate: 135,
    },
    close: {
      scale: 1.3,
      rotate: 0,
    },
  };

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
        <div
          onClick={showMenu}
          className="text-gray-300 right-6 top-4 absolute md:hidden"
        >
          <motion.svg
            variants={iconRotation}
            animate={toggleMenu ? 'open' : 'close'}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
              fill="currentColor"
            />
          </motion.svg>
        </div>
        <div className="md:flex justify-around items-center flex-row shadow-lg py-3 md:py-2 px-0 bg-gray-600 z-20">
          <img
            className="md:w-14 md:top-2 absolute left-2 top-1 md:left-3  w-10"
            src="/logo.png"
            alt="logo"
          />
          <motion.div
            whileHover={{ color: '#f7a809' }}
            whileTap={{ scale: 0.97 }}
            className="text-lg text-gray-300 w-52 ml-7 flex justify-around md:text-lg"
          >
            <Link href="/">Repar'AutoMobile</Link>
          </motion.div>
          {toggleMenu && (
            <div className=" md:flex md:items-center my-2">
              <motion.div
                whileHover={{ color: '#f78709' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-20 text-md text-gray-300 md:mx-2 lg:mx-7 my-2 md:text-lg"
              >
                <Link href="/Activities">Activités</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#e95e13' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-28 text-md text-gray-300 md:mx-2 lg:mx-7 md:text-lg"
              >
                <Link href="/Appointments">Rendez-vous</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f04913' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-20 text-md text-gray-300 md:mx-2 lg:mx-7 my-2 md:text-lg"
              >
                <Link href="/Occasions">Occasions</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f4350b' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-12 text-md text-gray-300 md:mx-2 lg:mx-7 my-2 md:text-lg"
              >
                <Link href="/Customers-notices">Avis</Link>
              </motion.div>
              <motion.div
                whileHover={{ color: '#f71b09' }}
                whileTap={{ scale: 0.97 }}
                className="ml-16 w-16 text-md text-gray-300 md:mx-2 lg:mx-7 my-2 md:text-lg"
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
