import React from "react";
import SubCancelPageOne from "./SubCancelPageOne";
import CImgA from "./imgs/CImgA.PNG";
import CImgB from "./imgs/CImgB.PNG";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import SlidingPane from "react-sliding-pane";
import ReasonsCancel from "./ReasonsCancel";

const CancelPageOne = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const rasons_for_deletion = [
    "Not compatible with our product",
    "Too Complicated",
    "Don't have enough time to optimize Userpilot",
    "My project has finished and I no longer need Userpilot",
    "Poor funtionality",
    "It s too expensive",
    "Going with a different provider",
    "Didn t meet our expectations",
  ];
  return (
    <div>
      <div className="cancelPageOneBox">
        <div className="cancelPageOneBox-A">
          <b>Are you sure you want to cancel your subscription?</b>
          <h className="textCancel">
            You will not longer have access to Userpilot features after May 20,
            2021.
          </h>
        </div>
        <SubCancelPageOne
          imgCancel={CImgA}
          titleCancel="Have Issues or Questions?"
          pragCancel="Our support team can help you with any problems you might be facing."
          nameBtnCancel="Contact Us"
          classNameCancel="SubCancelPageOneBox"
          colorLine="SubCancelPageOneBoxLine"
          btnCancel="SubCancelBtnStyle"
        />

        <SubCancelPageOne
          imgCancel={CImgB}
          titleCancel="Try a Different Plan?"
          pragCancel="Unsatisfied with your plan? Try another"
          nameBtnCancel="Change plan"
          classNameCancel="SubCancelPageOneBoxSecond"
          colorLine="SubCancelPageOneBoxLineSecond"
          btnCancel="SubCancelBtnStyleSecond"
        />

        <div className="footerCancel">
          <div className="btnCancel-AA">
            <button className="btnCancelStyle">Cancel</button>
          </div>
          <div className="btnUpdate">
            <button
              className="btnCancelStyle-A"
              onClick={() => setState({ isPaneOpenLeft: true })}
            >
              Continue to Cancelation
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
          <ReasonsCancel resonsOfCancel={rasons_for_deletion} />
        </SlidingPane>
      </div>
    </div>
  );
};

export default CancelPageOne;
