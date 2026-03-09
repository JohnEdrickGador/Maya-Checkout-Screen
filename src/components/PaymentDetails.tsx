import PaymentOptionsContainer from "./PaymentOptionsContainer";
import Divider from "./Divider";
import CardInformationForm from "./CardInformationForm";
import FormFooter from "./FormFooter";

export default function PaymentDetails() {
  return (
    <div className="payment-details-screen">
      <div className="payment-details-container">
        <div className="back-to-merchant">
          <span className="material-icons">arrow_back</span>{" "}
          <p>Back to Merchant</p>
        </div>
        <PaymentOptionsContainer />
        <Divider dividerText="Or pay using your credit/debit card or wallet" />
        <CardInformationForm />
        <FormFooter />
      </div>
    </div>
  );
}
