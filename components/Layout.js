<<<<<<< HEAD
import React from "react";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
=======
import React from 'react'
import Nav from './Nav';
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}
>>>>>>> commun
