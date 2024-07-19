import React from 'react'
import { useState } from 'react';

function FormAddress() {
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState(0);
  const [country, setCountry] = useState();

  return (

    <form class="  rounded-lg overflow-hidden lg:w-[80%] shadow-[0px_13px_52px_10px_#5E2A30]" >
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

    </form>

  )
}

export default FormAddress