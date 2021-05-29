import VISA from "./imgs/visatwo.PNG";
import "./payment.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import React from "react";
import SlidingPane from "react-sliding-pane";
import UpdatePaymentMethod from "./UpdatePaymentMethod";
import Pay from "./imgs/pay.PNG";
const PaymentWithData = ({ apiData }) => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div>
      <div className="headPlanDetPos">
        <h>Current Payment Method</h>
      </div>
      <div className="boxPaymentData">
        <div className="noPaymentBox">
          <img
            className="visiImg"
            src={`${
              apiData.organization.payment_method.cc_type === "VISA"
                ? VISA
                : Pay
            }`}
          />

          <div className="paymentDatabox">
            <div className="paymentDataboxA">
              <b>{apiData.organization.payment_method.cc_type}</b>
              <div className="paymentDataboxAA">
                <b>*{apiData.organization.payment_method.last_four_digits}</b>
              </div>
            </div>
            <div className="paymentDataboxB">
              <h>{apiData.organization.payment_method.card_holder_name}</h>
            </div>
          </div>
          <div className="noPaymentDataBtnBox">
            <button
              className="noPaymentDataBtn"
              onClick={() => setState({ isPaneOpenLeft: true })}
            >
              {" "}
              Update Method{" "}
            </button>
          </div>
        </div>
        <SlidingPane
          closeIcon={
            <div>
              <FaTimes
                className="close"
                //style={{ color: "red", cursor: "pointer" }}
              />

              <b className="titleAddPayment">Update Payment Method</b>
            </div>
          }
          isOpen={state.isPaneOpenLeft}
          //title="Hey, it is optional pane title.  I can be React component too."
          from="right"
          width="500px"
          onRequestClose={() => setState({ isPaneOpenLeft: false })}
        >
          <UpdatePaymentMethod />
        </SlidingPane>
      </div>
    </div>
  );
};

export default PaymentWithData;
