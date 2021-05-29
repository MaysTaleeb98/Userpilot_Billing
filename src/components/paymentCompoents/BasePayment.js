import PaymentWithData from "./PaymentWithData";
import Payment from "./Payment";

const BasePayment = ({ data }) => {
  if (data && data.organization && data.organization.payment_method) {
    return (
      <div>
        <PaymentWithData apiData={data} />
      </div>
    );
  }

  return (
    //payment without data
    <Payment />
  );
};

export default BasePayment;
