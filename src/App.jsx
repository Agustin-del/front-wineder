import React from 'react';

import Contenedor from './layouts/Contenedor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import RegisterClient from './pages/RegisterClient';
import RegisterProvider from './pages/RegisterProvider';
import Wines from './pages/Wines';
import Home from './pages/Home'
import WineDetails from './pages/WineDetails'  
import Carrito from './pages/Carrito'
import WineIncome from './pages/WineIncome'
import Contact from './pages/Contact'
import Admin from './pages/Admin'
import Client from './pages/Client';
import WinesType from './pages/WinesType';



function App() {


  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Routes>

            <Route path="/" element={<Home />} />
<<<<<<< HEAD
            {/* <Route path="/contact" element={<Contact />} /> */}
=======
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registerClient" element={<RegisterClient />} />
            <Route path="/registerProvider" element={<RegisterProvider />} />
            <Route path="/wines" element={<Wines />} />
            <Route path="/wines/:id" element={<WineDetails />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/wineIncome" element={<WineIncome />} />
            <Route path="/wineDetails/:id" element={<WineDetails />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/client" element={<Client />} />
            <Route path="/winesType" element={<WinesType />} />
            <Route path="/winesType/:type" element={<WinesType />} />


>>>>>>> 1069233cb6176defeb2216c61cec2c6296a73453

          </Routes>
        </Contenedor>
      </BrowserRouter>
    </>

  );
}

export default App;
