import React from "react";
import InputMask from "react-input-mask";
import { BsExclamation } from "react-icons/bs";

const UpdatePaymentMethod = () => {
  return (
    <div>
      <h>Card Number</h>
      <div className="poss">
        <InputMask
          class="inputPosUpdate"
          placeholder="Enter card number Here...
"
          mask="9999 9999 9999 9999 9999"
        />
      </div>
      <div className="boxCardHolderName">
        <h>Card Holder Name</h>
        <div className="poss">
          <input
            class="inputPosCardUpdate"
            placeholder="Cardholder name...
"
          ></input>
        </div>
      </div>
      <div className="boxCardHolderName">
        <h>Expiry Date</h>
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
        </div>
      </div>
      <div className="cvvboxUpdate">
        <h>CVV/CVC</h>
        <div className="cvvSpaceUpdate">
          <InputMask class="inputPosCvv" placeholder="123" mask="999" />
          <div className="iAdd">
            <BsExclamation size="2.2rem" />
          </div>
        </div>
      </div>

      <div className="footerUpdatePayment">
        <div className="btnUpdateCancel">
          <button className="btnCancelStyle">Cancel</button>
        </div>
        <div className="btnUpdate">
          <button className="btnUpdateStyleA">Update</button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePaymentMethod;
