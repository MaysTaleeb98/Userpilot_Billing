import React from "react";
import { FaRegHandPaper } from "react-icons/fa";

const BuyCancel = () => {
  return (
    <div>
      <div className="cancelPageOneBox">
        <FaRegHandPaper size="5rem" className="buy" />
        <div className="buyBox">
          <h>Thanks for your help. Your opinion is really important to us</h>
          <div className="lastt">
            <b>You subscription has been successfully canceled.</b>
          </div>
        </div>
        <div className="buyBtnBox">
          <button className="buyBtn"> Done </button>
        </div>
      </div>
    </div>
  );
};

export default BuyCancel;
