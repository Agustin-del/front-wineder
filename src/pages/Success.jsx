import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Anchor from "../components/Anchor";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";
import FormAddress from "../components/FormAddress";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Success = () => {
  const query = new URLSearchParams(location.search);
  const [paymentId, setPaymentId] = useState();
  const [status, setStatus] = useState("");

  const [available, setAvailable] = useState(false);

  const [street, setStreet] = useState("");
  const [number, setNumber] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [country, setCountry] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setPaymentId(query.get("payment_id"));
    setStatus(query.get("status"));
    setAvailable(false);

  }, [query]);

  
  //  const checkData = () => {
  //   if (street !=null  && number !=null && city !=null  && state !=null  && zipCode !=null  && country !=null ) {
  //     setAvailable(true);
  //   }else{
  //     toast("You must complete all the fields");
  //   }
  //   }
  
  const closeBuyOrder = async () => {
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/buyorder/closeorder`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error("Error capturando el pago:", error);
    }
  };

  function handlePurchase() {
    closeBuyOrder();

    toast("Purchase correctly done!");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <div className="flex flex-col ">
      <div className="min-h-[80vh] flex flex-col justify-center items-center">
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <form class="  rounded-lg overflow-hidden lg:w-[80%] shadow-[0px_13px_52px_10px_#5E2A30]">
          <div className="lg:flex lg:flex-wrap">
            <h3 className="w-full pt-2 text-center text-2xl font-semibold text-red-900 mb-6 lg:text-3xl">
              Address Information
            </h3>

            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4 ">
              <label for="name" class="text-gray-800 font-semibold w-32">
                Street:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="Enter your St."
                className="flex-1 px-4 py-2 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
              <label for="number" class="text-gray-800 font-semibold w-32">
                Number:
              </label>
              <input
                type="number"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter number"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
              <label for="name" class="text-gray-800 font-semibold w-32">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
              <label for="name" class="text-gray-800 font-semibold w-32">
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
              <label for="name" class="text-gray-800 font-semibold w-32">
                Country:
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
              <label for="name" class="text-gray-800 font-semibold w-32">
                Zip Code:
              </label>
              <input
                type="number"
                id="zip"
                name="zip"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter your city"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          {/* <button
            onClick={checkData}
            className="justify-center bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none m-4 lg:mt-10"
            > LOAD DATA
        </button> */}

            <button
            onClick={handlePurchase}
            className="justify-center bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none m-4 lg:mt-10"
            > FINISH PURCHASE
        </button>
          {/* { available && (
      )} */}
        </form>

      </div>
    </div>
  );
};

export default Success;
