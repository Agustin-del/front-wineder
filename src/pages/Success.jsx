import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Success = () => {
  const query = new URLSearchParams(useLocation().search);
  const [paymentId, setPaymentId] = useState();
  const [status, setStatus] = useState("");

  //https://m.youtube.com/?collection_id=83004058812&collection_status=approved&payment_id=83004058812
  //&status=approved&external_reference=null&payment_type=credit_card&merchant_order_id=20849215879
  //&preference_id=1897213967-67a1e631-8894-430c-a9d5-03dbd4828f09&site_id=MLA&processing_mode=aggregator&merchant_account_id=null

  useEffect(() => {
    setPaymentId(query.get("payment_id"));
    setStatus(query.get("status"));

    const capturePayment = async () => {
      try {
        const response = await axios.get(
          `/api/payments/capture?payment_id=${paymentId}`
        );
        console.log("Estado del pago:", response.data);
      } catch (error) {
        console.error("Error capturando el pago:", error);
      }
    };

    if (paymentId) {
      capturePayment();
    }
  }, [paymentId]);

  return (
    <div>
      <h1>Pago Exitoso</h1>
      <p>Status: {status}</p>
      <p>ID de Pago: {paymentId}</p>
    </div>
  );
};

export default Success;
