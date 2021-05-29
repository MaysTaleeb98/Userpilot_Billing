import React from "react";

const PlanUsage = ({ application_name, production_usage, staging_usage }) => {
  return (
    <div>
      <div className="planUsgeBox">
        <div className="planUsgeBoxA">
          <b className="namePlanUsge">{application_name}</b>
          <div className="planUsgeBoxB">
            <h className="pUtextA">Production</h>
            <b className="pUtextB"> {production_usage} MAU</b>
          </div>
          <div className="planUsgeBoxB">
            <h className="pUtextA">Staging</h>

            {staging_usage === "null" && (
              <React.Fragment>
                <button className="btnUtextC"> upgrade</button>
              </React.Fragment>
            )}

            {staging_usage !== "null" && (
              <React.Fragment>
                <b className="pUtextC"> {staging_usage} MAU</b>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanUsage;
