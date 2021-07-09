/* eslint-disable prettier/prettier */
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';


export default function Layout({ children }) {
  return (
    <AnimatePresence>
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
    </AnimatePresence>
  );
}
