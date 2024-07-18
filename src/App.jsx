import React from "react";

import Contenedor from "./layouts/Contenedor";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import RegisterClient from "./pages/RegisterClient";
import RegisterProvider from "./pages/RegisterProvider";
import Wines from "./pages/Wines";
import Home from "./pages/Home";
import WineDetails from "./pages/WineDetails";
import Carrito from "./pages/Carrito";
import WineIncome2 from "./pages/WineIncome2";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Client from "./pages/Client";
import WinesType from "./pages/WinesType";
import PaymentMethods from "./pages/PaymentMethods";
import Success from "./pages/Success";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./redux/actions/authActions";
import { useEffect } from "react";
import { getRole } from "./redux/actions/roleActions";

function App() {

  const dispatch = useDispatch();


 
  
  const isAuthenticated = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  const role = useSelector((store) => store.roleReducer.role);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role")
    dispatch(login(token));
    dispatch(getRole(role))
    
  }, []);

  

  return (
    <>
      <BrowserRouter>
        <Contenedor>
          <Routes>
            {role === "client" ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/client" element={<Client />} />
                <Route path="/payment" element={<PaymentMethods />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/wineDetails/:id" element={<WineDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wines" element={<Wines />} />
                <Route path="/winesType/:type" element={<WinesType />} />
                <Route path="/success" element={<Success />} />
              </>
            ) : role === "admin" ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route
                  path="/registerProvider"
                  element={<RegisterProvider />}
                />
                <Route path="/contact" element={<Contact />} />

                <Route path="/wineIncome" element={<WineIncome2 />} />
                <Route path="/wines" element={<Wines />} />
                <Route path="/wineDetails/:id" element={<WineDetails />} />
                <Route path="/winesType/:type" element={<WinesType />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registerClient" element={<RegisterClient />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/wines" element={<Wines />} />
                {/* <Route path="/wines/:id" element={<WineDetails />} /> */}
                <Route path="/wineDetails/:id" element={<WineDetails />} />
                <Route path="/winesType" element={<WinesType />} />
                <Route path="/winesType/:type" element={<WinesType />} />
              </>
            )}
          </Routes>
        </Contenedor>
      </BrowserRouter>
    </>
  );
}

export default App;
