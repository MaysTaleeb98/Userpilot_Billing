import React from "react";
import "./Invoices.css";

const OneInvoice = ({ date_time, plan, amount, invoice_number }) => {
  return (
    <div>
      <div className="allInv">
        <div className="posData">
          <h>{date_time}</h>
        </div>

        <div className="posDataTwo">
          <h>{plan}</h>
        </div>

        <div className="posDataTwo">
          <h>${amount}</h>
        </div>

        <div className="posDataTwo">
          <h>Invoice #{invoice_number}</h>
          <div className="download">
            <h>View | Download</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneInvoice;
