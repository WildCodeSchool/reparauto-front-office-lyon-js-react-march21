import React from 'react';

export default function Footer() {
  return (
    <div className="fixed  -bottom-24 flex justify-around items-end w-screen h-36 bg-gray-600 transform hover:-translate-y-24 transition duration-500 ">
      <h1 className="text-xl absolute top-2 items-start text-yellow-400">
        Contact
      </h1>
      <input
        type="image"
        src="./logo.png"
        className="w-10 h-10items-center transform hover:scale-125 transition duration-500 mb-3 "
      />
      <input
        type="image"
        src="./logo-wild.png"
        className=" w-16 transform hover:scale-125 transition duration-500"
      />
      <input
        type="image"
        src="./facebook.png"
        className="w-10 h-10 transform hover:scale-125 transition duration-500 mb-4"
      />
    </div>
  );
}
