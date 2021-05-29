import React from "react";
import DowngradePlan from "./DowngradePlan";

const AllDowngradePlan = () => {
  return (
    <div>
      <DowngradePlan
        className="boxDowngrade"
        title="Current Plan "
        namePlane="Standard Plan"
        numOfUser="10,000"
        price="700.00"
      />
      <div className="postionBoxsDowngrade">
        <DowngradePlan
          className="boxDowngradeAA"
          title="New Plan "
          namePlane="Standard Plan"
          numOfUser="7,000"
          price="$500.00"
          additionInfo="Any remaining days in your plan will automatically be refunde and discounted from the total price."
        />

        <div className="footerDowngrade">
          <div className="btnCancel">
            <button className="btnCancelStyle">Cancel</button>
          </div>
          <div className="btnUpdate">
            <button className="btnUpdateStyle">Downgrade Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDowngradePlan;
