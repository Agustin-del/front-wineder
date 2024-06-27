import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Contenedor = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#F0E9E1]">
      <Header />

      {children}
 
      <Footer />
    </div>


  )
}

export default Contenedor