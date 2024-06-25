import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import RegisterClient from '../pages/RegisterClient';
import RegisterProvider from '../pages/RegisterProvider';
import Wines from '../pages/Wines';
import Home from '../pages/Home'
import WineDetails from '../pages/WineDetails'  
import Carrito from '../pages/Carrito'
import WineIncome from '../pages/WineIncome'

const Contenedor = ({ children }) => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />

      {children}
      {/* <Home/> */}
      {/* <Contact /> */}

      {/* <Login /> */}
      
      {/* <RegisterClient /> */}
      {/* <RegisterProvider /> */}
      {/* <Wines /> */}
      {/* <WineDetails /> */}
    {/* <Carrito />      */}
    {/* <WineIncome /> */}
      <Footer />
    </div>


  )
}

export default Contenedor