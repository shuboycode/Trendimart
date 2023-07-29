import React from "react";
import Payment from "../styles/components/assets/images/payment.gif";
import { Link } from "react-router-dom";

const PaymentGateway = () => {
  return (
    <div className="flex-center mt-5" style={{ flexDirection: "column"}}>
      <div className="card flex-center">
        {/* <i className="checkmark flex-center">✓</i> */}
        <div className="flex-center">
          <img src={Payment} alt="payment-gif" className="flex-center" />
        </div>

        <h1 className="heading flex-center">Success</h1>
        <p className="info">We received your purchase request</p>
      </div>
      <Link to="/" style={{
        color: "deeppink",
        marginTop: "24px"
      }}>continue shopping</Link>
    </div>
  );
};

export default PaymentGateway;
