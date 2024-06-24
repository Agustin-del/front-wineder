import React from 'react';

import Contenedor from './layouts/Contenedor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';



function App() {


  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </Contenedor>
      </BrowserRouter>

    </>

  );
}

export default App;
