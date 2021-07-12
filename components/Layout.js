import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

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
