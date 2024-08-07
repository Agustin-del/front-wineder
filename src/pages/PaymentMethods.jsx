import axios from "axios";
import { CiCircleCheck } from "react-icons/ci";
import { Alert } from "flowbite-react";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { API_BASE_URL } from '../utils/config'


import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

function PaymentMethods() {


  initMercadoPago("APP_USR-78fc479f-615e-4d74-bdad-96178fa58bf5", {
    locale: "es-AR",
  });



  // ---------------------------------------------------------
  const [loading, setLoading] = useState(true);
  const [buyorder, setBuyorder] = useState();

 


  const navigate = useNavigate();
  
  const [preferenceId, setPreferenceId] = useState(null);
  const token = useSelector((store) => store.authReducer.token);

  useEffect(() => {
    setTimeout(() => {

      getAmountToPay();

    }, 3000);

    setLoading(false);

  }, []);

  //SOLICITUD AL BACK PARA SABER EL MONTO A PAGAR
  const getAmountToPay = async (e) => {
    try {
      const resp = await axios.get(
        // "https://wineder-app.onrender.com/api/buyorder/client/pending",
        `${API_BASE_URL}/api/buyorder/client/pending`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      setBuyorder(resp.data);
      setResponse(resp.data.orderProducts);
      console.log(resp);


    } catch (error) {
      console.log(error);
    }
  };

  const createPreference = async () => {
    try {
      //ARMADO DE LOS PRODUCTOS QUE NOS PIDE MERCADO PAGO y creacion de preferencias de MP
      console.log(buyorder.id);
      const response = await axios.post(
        ` ${API_BASE_URL}/api/mp/createPreference/${buyorder.id}`, [],
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
  //       //  `${API_BASE_URL}/api/buyorder/closeorder`,
  //       //
  //       balance,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     //     const debit = await axios.post(
  //     //        `${API_BASE_URL}/api/debitWinder`,
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
            <div className="flex flex-col  gap-6 p-4 justify-center items-center">
              <section className="bg-[#eccdd0] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg overflow-hidden p-6 lg:w-[80%] ">
                <h2 className="text-3xl font-semibold text-wine-800 mb-4 text-center">Test Data</h2>

                {/* <article className="border-b-2 border-[#522025]">
                        <h3 className="text-2xl font-medium text-wine-700 mt-4">Seller User</h3>
                        <p><strong>Username: </strong>TESTUSER720792236</p>
                        <p className="mb-4"><strong>Password: </strong>6Xz31czKT1</p>
                      </article> */}
                <section className="flex flex-row mx-5 lg:justify-between  ">
                  <article className="border-b-2 border-[#522025]">
                    <h3 className="text-2xl font-medium text-wine-700 mt-4">Test Buyer</h3>
                    <p><strong>Username: </strong>TESTUSER659438814</p>
                    <p ><strong>Password: </strong>cuuklEzGTq</p>
                  </article>

                  <figure className="flex items-center justify-center lg:my-5 lg:w-[100px]">
                    <img src="./assets/copa-wine.gif" alt="Wine glass animation" />
                  </figure>

                  <article className="border-b-2 border-[#522025]">
                    <h3 className="text-2xl font-medium text-wine-700 mt-4">Test Card</h3>
                    <p><strong>Number: </strong>5031 7557 3453 0604</p>
                    <p><strong>Expiration Date: </strong>11/25</p>
                    <p ><strong>CVV: </strong>123</p>
                  </article>
                </section>
              </section>




              <section className="bg-[#eccdd0] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] rounded-lg overflow-hidden p-6 md:w-full flex justify-center items-center italic flex-col md:justify-center md:flex md:items-center md:h-auto lg:h-auto lg:my-auto">
                <p className="text-xl font-medium text-center">
                  Please remember that this page is a simulation of an e-commerce wine sales platform.
                  Transactions and orders made here are not real and will not result in the purchase or shipment of products.
                  This platform is for demonstration and educational purposes only.
                </p>
                <p className="text-xl font-medium text-center">
                  <strong>Thank you for your understanding. Enjoy the experience.</strong>
                </p>
                <br />
                <p className="text-xl font-medium text-center">
                  If you have any additional test data for Mercado Pago, you can also use it to make a test purchase.
                </p>
              </section>
            </div>


           
            <div className="flex flex-wrap justify-center">
              <button
                //type="submit"
                onClick={handleBuy}
                className="bg-[#5e2a30] text-white px-4 py-2 rounded-lg focus:outline-none m-4"
              >
                Continue
              </button>

              {preferenceId && (<Wallet initialization={{ preferenceId: preferenceId }} />)}





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


    </div>
  );
}

export default PaymentMethods;
