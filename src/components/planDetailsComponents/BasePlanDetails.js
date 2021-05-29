import React from "react";
import PlanDetails from "./PlanDetails";
import fImg from "./imgs/fImg.PNG";
import SImg from "./imgs/sImg.PNG";
import EImg from "./imgs/eImg.PNG";

const BasePlanDetails = ({ data }) => {
  return (
    <div>
      <PlanDetails
        data={data}
        imgPlan={`${
          data.organization.plan_details.plan_type == "trial"
            ? fImg
            : `${
                data.organization.plan_details.plan_type == "Standard"
                  ? SImg
                  : EImg
              }`
        }`}
        classNameOfNamePlan={`${
          data.organization.plan_details.plan_type == "trial"
            ? "textB"
            : `${
                data.organization.plan_details.plan_type == "Standard"
                  ? "textBS"
                  : "textBE"
              }`
        }`}
        namePlan={`${
          data.organization.plan_details.plan_type == "trial"
            ? "Free"
            : `${
                data.organization.plan_details.plan_type == "Standard"
                  ? "Standard"
                  : "Enterprise"
              }`
        }`}
      />
    </div>
  );
};

export default BasePlanDetails;
