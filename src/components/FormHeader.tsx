import amex from "../assets/logos/amex.png";
import mastercard from "../assets/logos/mastercard.png";
import jcb from "../assets/logos/jcb.png";
import visa from "../assets/logos/visa.png";

export default function FormHeader() {
  return (
    <div className="form-header">
      <h1>Debit/Credit Card</h1>
      <div className="card-logos-container">
        <img src={mastercard} alt="" />
        <img src={visa} alt="" />
        <img src={jcb} alt="" />
        <img src={amex} alt="" />
      </div>
    </div>
  );
}
