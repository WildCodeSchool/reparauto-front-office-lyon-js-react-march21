import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <div className="custom-font fixed -bottom-32 flex flex-col justify-center items-center w-screen h-44 bg-gray-600 transform hover:-translate-y-32 transition duration-500 ">
      <p className="text-xs md:text-sm text-yellow-400 custom-font absolute top-5 right-12 md:top-5 md:right-20">
        Made by
      </p>
      <Link href="https://www.wildcodeschool.com/fr-FR">
        <img
          type="image"
          src="/logo-wild.png"
          alt="logo-wild"
          className="absolute w-10 top-1 right-1 md:w-16 md:-top-2 md:right-2 cursor-pointer transform hover:scale-110 transition duration-500"
        />
      </Link>
      <h1 className="md:text-xl absolute top-3 items-start text-yellow-400">
        Informations
      </h1>
      <hr className=" absolute top-12 w-5/6 bg-gradient-to-r from-yellow-400 to-red-500 h-px border-none rounded-xl" />
      <div className="absolute bottom-20 my-1">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300 absolute -ml-4 transform hover:text-yellow-400
            transition duration-500"
        >
          <path
            d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
            fill="currentColor"
          />
        </svg>
        <Link href="https://www.facebook.com/repar.auto.mobile.florian.leblond">
          <p
            className="text-gray-300 ml-4 cursor-pointer transform hover:text-yellow-400
          transition duration-500"
          >
            Facebook
          </p>
        </Link>
      </div>

      <div className="absolute bottom-12 -ml-4">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300 absolute -ml-4 transform hover:text-yellow-400
          transition duration-500"
        >
          <path d="M13 16H11V18H13V16Z" fill="currentColor" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM7 4H17V20H7L7 4Z"
            fill="currentColor"
          />
        </svg>
        <p
          className="text-gray-300 ml-4 transform hover:text-yellow-400
          transition duration-500"
        >
          06-34-37-24-42
        </p>
      </div>
      <div className="absolute bottom-2 my-2 ">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-300 absolute -ml-4 transform hover:text-yellow-400
          transition duration-500"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
            fill="currentColor"
          />
        </svg>
        <Link href="mailto:repar-auto-mobile@hotmail.com">
          <p
            className="text-gray-300 ml-4 cursor-pointer transform hover:text-yellow-400
          transition duration-500"
          >
            repar-auto-mobile@hotmail.com
          </p>
        </Link>
      </div>
    </div>
  );
}
