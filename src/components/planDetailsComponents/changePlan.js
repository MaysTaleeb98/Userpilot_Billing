import React from "react";
import { useState } from "react";
import PlaneType from "./PlaneType";
import SCImg from "./imgs/sCImg.PNG";
import ECImg from "./imgs/eCImg.PNG";
import SliderReact from "./RangeSlider";
import { FaTimes } from "react-icons/fa";
import SlidingPane from "react-sliding-pane";
import DowngradePlan from "./AllDowngradePlan";
import { BsExclamation } from "react-icons/bs";

const ChangePlan = ({ api }) => {
  const [sliderValue, setSliderValue] = useState(
    api.organization.plan_details.mua
  );

  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const price_per_month = 399;
  const [price, setPrice] = useState(price_per_month);
  const DiscontPrice = (wayOfPayment) => {
    if (wayOfPayment === "monthly") {
      setPrice(price_per_month);
    } else {
      const newPrice = (price_per_month - price_per_month * 0.15).toFixed(2);
      setPrice(newPrice);
    }
  };

  const isNotDowngrade = () => {
    return sliderValue >= api.organization.plan_details.mua;
  };

  const features_standard_plan = [
    "People & Trackin",
    "Growth Insights",
    "Engagement layer",
    "User Sentiment",
    "Reporting, Targeting & Customization",
    "Integrations",
  ];

  const features_enterprise_plan = [
    "Unlimited Seats",
    "Unlimited Feature Tags",
    "Phone Support & Priority Troubleshootin",
    "Security Audit",
    "Service Level Agreement (SLA)",
  ];

  return (
    <div>
      <div className="boxChangePlane">
        <div
          className={`${
            api.organization.plan_details.plan_type == "trial"
              ? "titl"
              : "titl-SE"
          }`}
        >
          <b>{`${
            api.organization.plan_details.plan_type == "trial"
              ? "Turn your product into a growth engine"
              : `${
                  api.organization.plan_details.plan_type == "Standard"
                    ? "Your current plan is Standard"
                    : "Your current plan is Enterprise"
                }`
          }`}</b>
        </div>

        <div className="boxChangetwo">
          <h className="textChnane">How would you like to pay?</h>
          <h className="textChnaneA">Monthly Active Users</h>
          <div className="ichange">
            <div className="iIcon">
              <BsExclamation size="1.8rem" />
            </div>
          </div>
        </div>
        <div className="boxChangeth">
          <div class="switches-container">
            <input
              type="radio"
              id="switchMonthly"
              name="switchPlan"
              value="Monthly"
              checked="checked"
            />
            <input
              type="radio"
              id="switchYearly"
              name="switchPlan"
              value="Yearly"
            />
            <label
              for="switchMonthly"
              onClick={() => {
                DiscontPrice("monthly");
              }}
            >
              Monthly
            </label>
            <label
              for="switchYearly"
              onClick={() => {
                DiscontPrice("yearly");
              }}
            >
              Annually
            </label>
            <div class="switch-wrapper">
              <div class="switch">
                <div>Monthly</div>
                <div>Annually</div>
              </div>
            </div>
          </div>

          <div className="btnChangeSaveBox">
            <button className="btnChangeSave"> Save 15% </button>
          </div>
          <div className="muaChange">
            <h>{sliderValue}</h>
          </div>
        </div>
        <div>
          <SliderReact
            api={api}
            onChange={(value) => {
              setSliderValue(value);
            }}
          />
          <div className="maxValue">
            <b>50,000+</b>
          </div>
        </div>
        <div className="boxChangeFo">
          <PlaneType
            data={api}
            className="standardBoxChange"
            imgPlane={SCImg}
            namePlane="Standard"
            price={price}
            pmonth="per month"
            planBtn={`${
              api.organization.plan_details.plan_type === "Standard"
                ? `${
                    sliderValue == api.organization.plan_details.mua
                      ? "Your Current Plan"
                      : `${isNotDowngrade() ? "upgrade" : "downgrade"}`
                  }`
                : "buy now"
            }`}
            onClickStandard={() => {
              if (
                api.organization.plan_details.plan_type === "Standard" &&
                !isNotDowngrade()
              ) {
                setState({ isPaneOpenLeft: true });
              }
            }}
            classNameOfBtn={`${
              api.organization.plan_details.plan_type === "Standard"
                ? isNotDowngrade() &&
                  sliderValue == api.organization.plan_details.mua
                  ? "btnSchEqual"
                  : isNotDowngrade()
                  ? "btnSch"
                  : "redDowngrade"
                : "btnSch"
            } `}
            feturesAll={features_standard_plan}
          />
          <PlaneType
            data={api}
            className="EnterpriseBoxChange"
            imgPlane={ECImg}
            namePlane="Enterprise"
            reach="Reach out for pricing "
            talk="Let's talk"
            planBtn={`${
              api.organization.plan_details.plan_type === "Enterprise"
                ? "Your Current Plan"
                : "Contact Us"
            }`}
            classNameOfBtnEn={`${
              api.organization.plan_details.plan_type === "Enterprise"
                ? "btnEchEqual"
                : "btnEch"
            } `}
            fetureS="Everything in Standard +"
            feturesAll={features_enterprise_plan}
          />

          <SlidingPane
            closeIcon={
              <div>
                <FaTimes className="close" />

                <b className="titleAddPayment">Downgrade your Plan</b>
              </div>
            }
            isOpen={state.isPaneOpenLeft}
            from="right"
            width="500px"
            onRequestClose={() => setState({ isPaneOpenLeft: false })}
          >
            <DowngradePlan />
          </SlidingPane>
        </div>
      </div>
    </div>
  );
};

export default ChangePlan;
