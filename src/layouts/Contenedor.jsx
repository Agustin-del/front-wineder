import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Contenedor = ({ children }) => {
  return (
    <div className="h-screen w-full flex flex-col ">
      <Header />

      {children}
 
      <Footer />
    </div>


  )
}

export default Contenedor