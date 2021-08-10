import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <AnimatePresence>
      <>
        <Nav />
        {children}
        <Footer />
      </>
    </AnimatePresence>
  );
}
