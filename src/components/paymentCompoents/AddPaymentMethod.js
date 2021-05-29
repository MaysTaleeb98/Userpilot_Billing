import React from "react";
import VISA from "./imgs/visa.PNG";
import InputMask from "react-input-mask";
import { BsExclamation } from "react-icons/bs";

const AddPaymentMethod = () => {
  return (
    <div className={"content"}>
      <h>Card Number</h>
      <div className="poss">
        <InputMask class="inputPos" mask="9999 9999 9999 9999 9999 " />
        <div className="imgVisa">
          <img src={VISA}></img>
        </div>
      </div>
      <div className="boxCardHolderName">
        <h>Card Holder Name</h>
        <div className="poss">
          <input class="inputPos"></input>
        </div>
      </div>
      <div className="boxCardHolderName">
        <div className="dataCVV">
          <h>Expiry Date</h>
          <div className="cvv">
            <h>CVV/CVC</h>
          </div>
        </div>
      </div>
      <div className="boxCvvData">
        <div className="poss">
          <InputMask class="inputPosCvv" placeholder="MM" mask="99" />
          <div className="line">
            <h>--</h>
          </div>
          <div className="yy">
            <InputMask class="inputPosCvv" placeholder="YY" mask="99" />
          </div>
          <div className="cvvSpace">
            <InputMask class="inputPosCvv" mask="999" />
            <div className="iAdd">
              <BsExclamation size="2.2rem" />
            </div>
          </div>
        </div>
      </div>
      <div className="boxcouponCode">
        <div className="couponCode">
          <h>Do you have a coupon code?</h>
          <div className="couponCodeInputbox">
            <input className="couponCodeInput"></input>
            <button className="couponCodeBtn">Apply</button>
          </div>
        </div>
      </div>
      <div className="planBox">
        <div className="headPlan">
          <h>Standard Plan</h>
        </div>
        <div className="totalAmount">
          <h>Total Amount</h>
        </div>
        <div className="month">
          <b>$200.00</b>
          <h>/month</h>
        </div>
      </div>
      <div className="footerAddPayment">
        <div className="btnCancel">
          <button className="btnCancelStyle">Cancel</button>
        </div>
        <div className="btnUpdate">
          <button className="btnUpdateStyle">Update & Pay</button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentMethod;
