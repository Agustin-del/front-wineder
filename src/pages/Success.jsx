import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Anchor from "../components/Anchor";
import axios from "axios";
import { API_BASE_URL } from '../utils/config'

const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  const [paymentId, setPaymentId] = useState();
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  //RESPONSE DE LA PAGINA DE REDIRECCIONAMIENTO

  //https://m.youtube.com/?collection_id=83004058812&collection_status=approved&payment_id=83004058812
  //&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=20849215879
  //&preference_id=1897213967-67a1e631-8894-430c-a9d5-03dbd4828f09&site_id=MLA&processing_mode=aggregator&merchant_account_id=null

  useEffect(() => {
    setPaymentId(query.get("payment_id"));
    setStatus(query.get("status"));

    

    if (paymentId && status=="approved") {
      closeBuyOrder();
    }
  }, [paymentId]);


  const closeBuyOrder = async () => {
    try {
      const response = await axios.post(
         `${API_BASE_URL}/api/buyorder/closeorder/${paymentId}`
      );
      console.log(response);
 
    } catch (error) {
      console.error("Error capturando el pago:", error);
    }
  };



  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>Status: {status}</p>
      <p>ID de Pago: {paymentId}</p>

      <button className=" lg:text-xl flex items-center justify-center px-4    rounded-lg text-white">
        <Anchor href="/" text="Home" />
      </button>
    </div>
  );
};

export default Success;
