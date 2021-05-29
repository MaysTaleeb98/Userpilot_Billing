import "./PlanDetails.css";
import PlanUsage from "./PlanUsage";
import Charts from "./chart";
import SlidingPane from "react-sliding-pane";
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ChangePlane from "./changePlan";
const PlanDetails = ({ data, imgPlan, namePlan, classNameOfNamePlan }) => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
    isPaneOpenBottom: false,
  });

  const result = data.organization.plan_details.applications.reduce(
    (tot, arr) => {
      // return the sum with previous value
      return tot + arr.production_usage + arr.staging_usage;
      // set initial value as 0
    },
    0
  );
  const valueOfChart = result / data.organization.plan_details.mua;
  const equtionOfChart = valueOfChart.toFixed(4);

  return (
    <div>
      <div className="headPlanPos">
        <h className="headplan">Plan Details</h>
      </div>

      <div className="boxPlanDet">
        <div className="Dfelx">
          <div className="inerBoxA">
            <div className="inerBoxA-B">
              <div className="inerBoxA-B-C">
                <React.Fragment>
                  <img className="fImg" src={imgPlan} alt="pic" />
                </React.Fragment>

                <div className="inerBoxA-B-C-D">
                  <h className="textA">You are on the</h>

                  <b className={classNameOfNamePlan}>{namePlan} Plan</b>

                  <button
                    className="BTTTN"
                    onClick={() => setState({ isPaneOpenBottom: true })}
                  >
                    Change Plan
                  </button>

                  <SlidingPane
                    closeIcon={
                      <div>
                        <FaTimes className="closeChnage" />

                        <b className="titleAddPayment"></b>
                      </div>
                    }
                    isOpen={state.isPaneOpenBottom}
                    from="bottom"
                    width="100%"
                    height="100px"
                    onRequestClose={() => setState({ isPaneOpenBottom: false })}
                  >
                    <ChangePlane api={data} />
                  </SlidingPane>

                  {data.organization.plan_details.plan_type === "trial" && (
                    <React.Fragment>
                      <div classNamn="textC">
                        <h className="textC-A">Your plan expires on</h>
                        <h className="textC-B">
                          {data.organization.plan_details.plan_expiry}{" "}
                        </h>
                      </div>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </div>
            <div className="underBox">
              <h className="underBoxTxt"> Monthly Active Users Allowed </h>
              <b className="underBoxTxtA">
                {data.organization.plan_details.mua}{" "}
              </b>
            </div>
            <div className="underBox">
              <h className="underBoxTxt"> Monthly Cost</h>
              <b className="underBoxTxtB">
                {" "}
                ${data.organization.plan_details.price}
              </b>
            </div>

            <div className="lineD"></div>

            <div className="textDbox">
              <b className="textD">Plan Usage</b>
            </div>
            <div className="mapBox">
              {data.organization.plan_details.applications.map((data, key) => {
                return (
                  <div key={key}>
                    <PlanUsage
                      key={key}
                      application_name={data.application_name}
                      production_usage={data.production_usage}
                      staging_usage={data.staging_usage}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="inerBoxB">
            <div className="inerBoxB-A">
              <div className="inerBoxBTitle">
                <b>Plan Total Usage</b>
              </div>

              {equtionOfChart > 1 && (
                <React.Fragment>
                  <div className="Chart">
                    <Charts percentage={1} />
                  </div>
                </React.Fragment>
              )}

              {equtionOfChart < 1 && (
                <React.Fragment>
                  <div className="Chart">
                    <Charts percentage={equtionOfChart} />
                  </div>
                </React.Fragment>
              )}

              <div className="totused">
                <b>Total Used</b>
              </div>
              <div className="fotUse">
                <b className="fotUseT">{result}</b>
                <h className="fotUseTT">out of </h>
                <b className="fotUseTTT">
                  {data.organization.plan_details.mua} MAU
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
