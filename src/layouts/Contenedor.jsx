import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../pages/Home';

const Contenedor = ({children}) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />

      {children}

      <Footer />
    </div>


  )
}

export default Contenedor