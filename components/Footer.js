/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function Footer() {
  return (
    <div className="absolute bottom-0 flex justify-around w-screen h-16 bg-gray-800">
      <input type="image" src="./logo.png" alt="logo" className=" " />
      <input
        type="image"
        src="./logo-wild.png"
        alt="logo-wild"
        className=" w-16 "
      />
    </div>
  );
}
