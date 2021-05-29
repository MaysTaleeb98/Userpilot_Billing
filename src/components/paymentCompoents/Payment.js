import "./payment.css";
import NoPayment from "./imgs/pay.PNG";
import SlidingPane from "react-sliding-pane";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import AddPaymentMethod from "./AddPaymentMethod";

const Payment = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  return (
    <div>
      <div className="headPlanDetPos">
        <h>Current Payment Method</h>
      </div>
      <div className="boxPayment">
        <div className="noPaymentBox">
          <img src={NoPayment} alt="pic" />
          <div className="headerPay">
            <b> No Payment Method Available</b>
          </div>

          <div className="noPaymentBtnBox">
            <button
              className="noPaymentBtn"
              onClick={() => setState({ isPaneOpenLeft: true })}
            >
              {" "}
              Add Payment Method{" "}
            </button>
          </div>
        </div>
        <SlidingPane
          closeIcon={
            <div>
              <FaTimes className="close" />

              <b className="titleAddPayment">Add Payment Method</b>
            </div>
          }
          isOpen={state.isPaneOpenLeft}
          from="right"
          width="500px"
          onRequestClose={() => setState({ isPaneOpenLeft: false })}
        >
          <AddPaymentMethod />
        </SlidingPane>
      </div>
    </div>
  );
};

export default Payment;
