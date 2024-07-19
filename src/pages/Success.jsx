import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Anchor from "../components/Anchor";
import axios from "axios";
import { API_BASE_URL } from "../utils/config";
import FormAddress from "../components/FormAddress";


const Success = () => {
  const query = new URLSearchParams(location.search);
  const [paymentId, setPaymentId] = useState();
  const [status, setStatus] = useState("");

  const navigate = useNavigate();
 

  //RESPONSE DE LA PAGINA DE REDIRECCIONAMIENTO

  //http://localhost:5173/success?collection_id=83178903684&collection_status=approved&payment_id=83178903684&status=approved&
  //external_reference=null&payment_type=credit_card&merchant_order_id=20919470479&
  //preference_id=1897213967-dfa018ce-aee4-49a7-a576-89ab01599877&site_id=MLA&processing_mode=aggregator&merchant_account_id=null

  useEffect(() => {
    setPaymentId(query.get("payment_id"));
    setStatus(query.get("status"));

    console.log(paymentId);
    console.log(status);

    if (paymentId && status == "approved") {
      closeBuyOrder();
    }
  }, [query]);

  const closeBuyOrder = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/buyorder/closeorder`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );

      console.log(response);
    } catch (error) {
      console.error("Error capturando el pago:", error);
    }
  };

  return (
    <div>
      <div className="w-full">
        <h1>Pago Exitoso</h1>
        {/* <p>Status: {status}</p>
        <p>ID de Pago: {paymentId}</p> */}
      </div>

      <FormAddress/>

      <button onClick={closeBuyOrder} className=" lg:text-xl flex items-center justify-center px-4    rounded-lg text-white">
        <Anchor href="/wines" text="Go to buy more!" />
      </button>
    </div>
  );
};

export default Success;
