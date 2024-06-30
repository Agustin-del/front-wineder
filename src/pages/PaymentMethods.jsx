import axios from "axios";
import { Alert } from "flowbite-react";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function PaymentMethods() {
  const [loading, setLoading] = useState(true);
  const [paymentMethod, setPaymentMethods] = useState();

  const [address, setAddress] = useState("");
  const [number, setNumber] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState("");

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState(0);
  const [cardType, setCardType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("jdjd");
    // axios.post("http://localhost:5000/api/payment", {
  };

  return (
    <body className="bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center w-full h-screen bg-[#232323]">
          <img className="w-[300px]" src="./assets/copa.gif" alt="" />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8 lg:w-[80%] md:w-[60%]  ">
          <h1 className="w-full text-center italic text-3xl font-semibold text-gray-800 mb-6 ">
            Finish Your Purchase
          </h1>

          <form
            onSubmit={handleSubmit}
            class="bg-white shadow-md rounded-lg overflow-hidden "
          >
            <div className="lg:flex lg:flex-wrap">
              <h3 className="w-full pt-2 text-center text-2xl font-semibold text-red-900 mb-6 ">
                Address Information
              </h3>

              <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                <label for="name" class="text-gray-800 font-semibold w-32">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your St."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
                  Zip:
                </label>
                <input
                  type="number"
                  id="zip"
                  name="zip"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                  placeholder="Enter your city"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="lg:flex lg:flex-wrap">
              <h3 className="w-full pt-2 text-center text-2xl font-semibold text-red-900 mb-6 ">
                Payment Information
              </h3>
              <div className="lg:w-[30%] flex items-center border-b border-gray-200 px-6 py-4">
                <label
                  for="methodPayment"
                  class="text-gray-800 font-semibold w-32"
                ></label>
                <select
                  id="methodPayment"
                  name="methodPayment"
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                >
                  <option disabled>--select--</option>
                  <option value="debit">DEBIT</option>
                  <option value="credit">CREDIT</option>
                  <option value="mercadoPago">MERCADO PAGO</option>
                </select>
              </div>

              <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                <label
                  for="cardholderName"
                  class="text-gray-800 font-semibold w-32"
                >
                  Cardholder Name:
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  placeholder="Enter your St."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                <label
                  for="cardNumber"
                  class="text-gray-800 font-semibold w-32"
                >
                  Card Number:
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter card number with this format 0000-0000-0000-0000"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                <label for="cvv" class="text-gray-800 font-semibold w-32">
                  CVV:
                </label>
                <input
                  type="number"
                  id="cvv"
                  name="cvv"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="Enter CVV"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="lg:w-[50%] flex items-center border-b border-gray-200 px-6 py-4">
                <label for="name" class="text-gray-800 font-semibold w-32">
                  Expiration Date:
                </label>
                <input
                  type="text"
                  id="expDate"
                  name="expDate"
                  placeholder="Enter expitation date MM/YYYY"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              
            </div>

            <div className="flex flex-wrap justify-center">
              <button
                type="submit"
                className="bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none"
              >
                Send Payment
              </button>
            </div>
          </form>
          {alert && <Alert color={alert.type}>{alert.message}</Alert>}
        </div>
      )}
    </body>
  );
}

export default PaymentMethods;
