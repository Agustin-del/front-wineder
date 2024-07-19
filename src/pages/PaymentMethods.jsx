import axios from "axios";
import { CiCircleCheck } from "react-icons/ci";
import { Alert } from "flowbite-react";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal } from "flowbite-react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

function PaymentMethods() {


  initMercadoPago("APP_USR-78fc479f-615e-4d74-bdad-96178fa58bf5", {
    locale: "es-AR",
  });



  // ---------------------------------------------------------
  const [loading, setLoading] = useState(true);
  const [totalQuantity, setTotalQuantity] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [response, setResponse] = useState();
  const [buyorder, setBuyorder] = useState();

  const [address, setAddress] = useState("");
  const [number, setNumber] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState(0);
  const [country, setCountry] = useState();

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState(0);
  const [cardType, setCardType] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [preferenceId, setPreferenceId] = useState(null);
  const token = useSelector((store) => store.authReducer.token);

  useEffect(() => {
    setTimeout(() => {
      console.log(preferenceId);
      getAmountToPay();
      createPreference();
    }, 3000);
    setLoading(false);
    // handleBuy();

    console.log(preferenceId);
  }, []);

  //SOLICITUD AL BACK PARA SABER EL MONTO A PAGAR
  const getAmountToPay = async (e) => {
    try {
      const resp = await axios.get(
        // "https://wineder-app.onrender.com/api/buyorder/client/pending",
        "http://localhost:8080/api/buyorder/client/pending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      setBuyorder(resp.data);
      setResponse(resp.data.orderProducts);
      console.log(resp);


      // Multiplicar price y quantity
      // const total = response.map((product) => product.price * product.quantity)
      //   .reduce((acc, curr) => acc + curr, 0);



      // setTotalAmount(total);
      // setDescription("Winder purchase");

      // console.log(totalAmount);

      // const aux = response.map((product) => product.quantity)
      //   .reduce((acc, curr) => acc + curr, 0);
      // setTotalQuantity(aux);
      // console.log(totalQuantity);

    } catch (error) {
      console.log(error);
    }
  };

  const createPreference = async () => {
    try {
      //ARMADO DE LOS PRODUCTOS QUE NOS PIDE MERCADO PAGO
      console.log(buyorder.id);
      const response = await axios.post(
        `http://localhost:8080/api/mp/createPreference/${buyorder.id}`, [],
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        },
        //MANDAR ID DE BUYoRDER?--> BACK LO GESTIONE CON LOS PRODUCTOS         
      );
      console.log(response);
      const id = response.data;
      console.log(response.data);
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      console.log(preferenceId)
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const array = [...response];

  //   const total = array
  //     .map((product) => product.price * product.quantity) // Multiplicar price y quantity
  //     .reduce((acc, curr) => acc + curr, 0);

  //   setTotalAmount(total);
  //   setDescription("Winder purchase");

  //   const aux = array
  //     .map((product) => product.quantity) // Multiplicar price y quantity
  //     .reduce((acc, curr) => acc + curr, 0);

  //   setTotalQuantity(aux);

  //   try {
  //     const data = {
  //       cardNumber: `${cardNumber}`,
  //       totalAmount: `${totalAmount}`,
  //       cvv: `${cvv}`,
  //       cardType: `${cardType}`,
  //       description: `${description}`,
  //     };

  //     const balance = { balance: `${totalAmount}` };

  //     const transaction = await axios.post(
  //       // "https://wineder-app.onrender.com/api/buyorder/closeorder",
  //       "http://localhost:8080/api/buyorder/closeorder",
  //       balance,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     //     const debit = await axios.post(
  //     //       "https://argentumhomebanking-1.onrender.com/api/clients/debitWinder",
  //     //       data
  //     //     );

  //     //     console.log(debit.data);

  //     setOpenModal(true);
  //     setTimeout(() => {
  //       setOpenModal(false);

  //       navigate("/");
  //     }, 3000);
  //   } catch (error) {
  //     console.log("Forbidden");
  //   }
  // };

  return (
    <div>
      <body className="bg-gray-100">
        {loading ? (
          <div className="flex items-center justify-center w-full h-screen bg-[#232323]">
            <img className="w-[300px]" src="./assets/copa.gif" alt="" />
          </div>
        ) : (
          <div className="container mx-auto px-4 py-8 lg:w-[80%] md:w-[60%] min-h-screen ">
            <h1 className="w-full text-center italic text-3xl font-semibold text-gray-800 mb-6 lg:text-4xl ">
              Finish Your Purchase
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 p-4 justify-center">
  <section className="bg-[#f0c3c8] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg overflow-hidden p-6 lg:w-1/3">
    <h2 className="text-3xl font-semibold text-wine-800 mb-4 text-center">Test Data</h2>

    <article className="border-b-2 border-[#522025]">
      <h3 className="text-2xl font-medium text-wine-700 mt-4">Seller User</h3>
      <p><strong>Username: </strong>TESTUSER720792236</p>
      <p className="mb-4"><strong>Password: </strong>6Xz31czKT1</p>
    </article>

    <article className="border-b-2 border-[#522025]">
      <h3 className="text-2xl font-medium text-wine-700 mt-4">Test Buyer</h3>
      <p><strong>Username: </strong>TESTUSER659438814</p>
      <p className="mb-4"><strong>Password: </strong>cuuklEzGTq</p>
    </article>

    <article className="border-b-2 border-[#522025]">
      <h3 className="text-2xl font-medium text-wine-700 mt-4">Test Card</h3>
      <p><strong>Number: </strong>5031 7557 3453 0604</p>
      <p><strong>Expiration Date: </strong>11/25</p>
      <p className="mb-4"><strong>CVV: </strong>123</p>
    </article>
  </section>

  <figure className="flex items-center justify-center">
    <img src="./assets/copa-wine.gif" alt="Wine glass animation" />
  </figure>

  <section className="bg-[#ebaeb5] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg overflow-hidden p-6 md:w-[500px] flex justify-center items-center italic flex-col md:justify-center md:flex md:items-center md:h-auto lg:h-auto lg:my-auto">
    <p className="text-2xl font-medium text-center">
      Please remember that this page is a simulation of an e-commerce wine sales platform.
      Transactions and orders made here are not real and will not result in the purchase or shipment of products.
      This platform is for demonstration and educational purposes only.
    </p>
    <p className="text-2xl font-medium text-center">
      <strong>Thank you for your understanding. Enjoy the experience.</strong>
    </p>
    <br />
    <p className="text-2xl font-medium text-center">
      If you have any additional test data for Mercado Pago, you can also use it to make a test purchase.
    </p>
  </section>
</div>


            {/* <form
              //onSubmit={handleSubmit}
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
                  >
                    Payments Methods:
                  </label>
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
                    <option value="mercadoPago">PAYPAL</option>
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
                    value={cardholderName}
                    onChange={(e) => setCardholderName(e.target.value)}
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
                  //type="submit"
                  onClick={handleBuy}
                  className="bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none m-4"
                >
                  Send Payment
                </button>

                {preferenceId && (
                  <Wallet initialization={{ preferenceId: preferenceId }} />
                )}



              </div>
            </form> */}
            <div className="flex flex-wrap justify-center">
              <button
                //type="submit"
                onClick={handleBuy}
                className="bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none m-4"
              >
                Continue
              </button>

              {preferenceId && (<Wallet initialization={{ preferenceId: preferenceId, redirectMode: "modal" }} customization={{ texts: { valueProp: 'smart_option' } }} />)}





            </div>

          </div>
        )}
      </body>
      {/* <div className="w-2/3 container mx-auto px-4 py-8 flex flex-col">

        <h1 className="text-2xl text-left font-semibold text-gray-800 lg:w-[70%] lg:ml-[20%]">
          Current Purchase
        </h1>

        <div className="w-3/4 flex items-center justify-between flex-col flex-wrap border-b border-gray-200 py-4 ">
          <div className=" w-full flex flex-wrap items-start">
            <div className="w-full flex justify-end items-center bg-gray-100 px-6 py-4">
              <p className="text-gray-800 font-semibold">Products :</p>

              <p className="text-gray-800 font-semibold">
                 {totalQuantity}
                {totalQuantity}
              </p>
            </div>

            <div className=" w-full flex justify-end items-center bg-gray-100 px-6 py-4">
              <div className="text-xl text-[#5e2a30] font-bold mr-4">
                Total Amount in this purchase
              </div>
              <div className="text-xl text-[#5e2a30] font-bold">
                ${totalAmount}
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {openModal && (
        <Modal
          show={openModal}
          size="md"
          onClose={() => setOpenModal(false)}
          popup
        >
          <div className="text-center flex flex-col p-2 justify-center">
            <CiCircleCheck className="mx-auto mb-4 h-12 w-12 text-green-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Bottles on their way! Transaction Successful
            </h3>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default PaymentMethods;
