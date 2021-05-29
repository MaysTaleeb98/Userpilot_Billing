import React from "react";
import "./Cancel.css";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import SlidingPane from "react-sliding-pane";
import CancelPageOne from "./CancelPageOne";

const Cancel = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  return (
    <div>
      <div className="boxCancel">
        <div className="cancelHeader">
          <b onClick={() => setState({ isPaneOpenLeft: true })}>
            {" "}
            CANCEL SUBSCRIPTION
          </b>
        </div>
        <h className="cancelTxt">
          All future payments will be canceled. Your plan ends on 11/11/2021
        </h>
      </div>

      <SlidingPane
        closeIcon={
          <div>
            <FaTimes className="close" />

            <b className="titleAddPayment">Cancel Subscription</b>
          </div>
        }
        isOpen={state.isPaneOpenLeft}
        from="right"
        width="500px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <CancelPageOne />
      </SlidingPane>
    </div>
  );
};

export default Cancel;
