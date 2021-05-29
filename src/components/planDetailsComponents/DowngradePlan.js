import React from "react";

const DowngradePlan = ({
  className,
  title,
  namePlane,
  numOfUser,
  price,
  additionInfo,
}) => {
  return (
    <div>
      <div className={className}>
        <div className="posDowngrade">
          <b>{title}</b>
          <h className="PlanNDowngrade">{namePlane}</h>
        </div>
        <div className="boxDowngrade-A">
          <b>Monthly Active Users : </b>
          <h className="numberDowngrade">{numOfUser}</h>
        </div>

        <div className="boxDowngrade-B">
          <b>{price}</b>
          <h>/month</h>
        </div>
        <div className="addDowngrade">
          <h>{additionInfo}</h>
        </div>
      </div>
    </div>
  );
};

export default DowngradePlan;
