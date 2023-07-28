import React from "react";
import Payment from "../styles/components/assets/images/payment.gif";

const PaymentGateway = () => {
  return (
    <div className="flex-center mt-5">
      <div className="card flex-center">
        {/* <i className="checkmark flex-center">✓</i> */}
        <div className="flex-center">
        <img src={Payment} alt="payment-gif" className="flex-center"/>
        </div>

        <h1 className="heading flex-center">Success</h1>
        <p className="info">We received your purchase request</p>
      </div>
    </div>
  );
};

export default PaymentGateway;
