import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import SlidingPane from "react-sliding-pane";
import BuyCancel from "./BuyCancel";

const ReasonsCancel = ({ resonsOfCancel = [] }) => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  return (
    <div>
      <div className="cancelPageOneBox">
        <div className="resonBox">
          <h className="textCancelReson">
            We re sorry to see you go. In order to process the cancelation, we
            need to ask you a few simple questions. This will help us improve
            the products for others.
          </h>
        </div>
        <div className="resonQuestion">
          <b>Why have you decided to cancel your subscription?</b>
        </div>

        {resonsOfCancel.map((data, key) => {
          return (
            <div key={key}>
              <div className="causesCancel">
                <input className="inputCancel" value={data}></input>
              </div>
            </div>
          );
        })}

        <div className="footerCancel">
          <div className="btnCancel-AA">
            <button className="btnCancelStyle">Don't Cancel</button>
          </div>
          <div className="btnUpdate">
            <button
              className="btnCancelStyle-A"
              onClick={() => setState({ isPaneOpenLeft: true })}
            >
              Cancel Subscription
            </button>
          </div>
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
          <BuyCancel />
        </SlidingPane>
      </div>
    </div>
  );
};

export default ReasonsCancel;
