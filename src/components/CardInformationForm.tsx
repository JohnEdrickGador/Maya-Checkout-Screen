import InputMask from "react-input-mask";
import FormHeader from "./FormHeader";
export default function CardInformationForm() {
  return (
    <div className="card-information-form-container">
      <FormHeader />
      <form action="submit" className="card-form">
        <div className="input-container">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="card-number-container">
          {/* <input type="text" placeholder="Card Number" /> */}
          <InputMask
            mask="9999 9999 9999 9999"
            placeholder="Card Number"
            maskChar=""
          />
        </div>
        <div className="input-container">
          <InputMask mask="99/99" placeholder="Expiry Date" maskChar="_" />
          <input type="text" placeholder="CVV" />
        </div>
        <div className="submit-button-container">
          <button>Confirm and pay</button>
        </div>
      </form>
    </div>
  );
}
