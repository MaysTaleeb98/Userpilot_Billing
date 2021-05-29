import "./Invoices.css";
import OneInvoice from "./OneInvoice";

const Invoices = ({ data }) => {
  return (
    <div>
      <div className="headPlanPos">
        <h className="headIn">Invoices</h>
      </div>

      <div className="boxInvoices">
        <div className="headerInv">
          <div className="styldata">
            <b>Date & TIME</b>
          </div>

          <div className="styldatatwo">
            <b>PLAN</b>
          </div>

          <div className="styldatatwo">
            <b>AMOUNT</b>
          </div>

          <div className="styldatatwo">
            <b>DETAILS</b>
          </div>
        </div>
        {data.organization.invoices.map((data, key) => {
          return (
            <div key={key}>
              <OneInvoice
                key={key}
                date_time={data.date_time}
                plan={data.plan}
                amount={data.amount}
                invoice_number={data.invoice_number}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Invoices;
