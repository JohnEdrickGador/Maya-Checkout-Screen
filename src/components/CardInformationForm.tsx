import { useState } from "react";
import InputMask from "react-input-mask";
import FormHeader from "./FormHeader";
import { CardInformationFormState } from "../types/FormTypes";

export default function CardInformationForm() {
  const [form, setForm] = useState<CardInformationFormState>({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState<any>({});

  function isValidExpiry(expiry: string) {
    const match = expiry.match(/^(\d{2})\/(\d{2})$/);

    if (!match) return false;

    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10) + 2000;

    if (month < 1 || month > 12) return false;

    const now = new Date();
    const expiryDate = new Date(year, month); // month+1

    return expiryDate > now;
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: any = {};

    if (form.cardNumber.replace(/\s/g, "").length !== 16)
      newErrors.cardNumber = "Card number must be 16 digits";

    if (!/^\d{2}\/\d{2}$/.test(form.expiry))
      newErrors.expiry = "Invalid expiry date";

    if (!/^\d{3,4}$/.test(form.cvv)) newErrors.cvv = "Invalid CVV";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validate()) {
      alert("Payment submitted (mock)");
    }
  };

  const isFormValid =
    form.cardNumber.replace(/\s/g, "").length === 16 &&
    isValidExpiry(form.expiry) &&
    /^\d{3}$/.test(form.cvv);

  return (
    <div className="card-information-form-container">
      <FormHeader />
      <form action="submit" className="card-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className={errors.firstName ? "error" : ""}
            />
          </div>
          {errors.firstName && <p className="error-text">{errors.firstName}</p>}

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && <p className="error-text">{errors.lastName}</p>}
          </div>
        </div>
        <div className="card-number-container">
          <InputMask
            mask="9999 9999 9999 9999"
            placeholder="Card Number"
            maskChar=""
            name="cardNumber"
            value={form.cardNumber}
            onChange={handleChange}
            className={errors.cardNumber ? "error" : ""}
          />
          {errors.cardNumber && (
            <p className="error-text">{errors.cardNumber}</p>
          )}
        </div>

        <div className="input-container">
          <div>
            <InputMask
              mask="99/99"
              maskChar="_"
              name="expiry"
              placeholder="Expiry Date"
              value={form.expiry}
              onChange={handleChange}
              className={errors.expiry ? "error" : ""}
            />
            {errors.expiry && <p className="error-text">{errors.expiry}</p>}
          </div>

          <div>
            <InputMask
              mask="999"
              maskChar=""
              name="cvv"
              placeholder="CVV"
              value={form.cvv}
              onChange={handleChange}
              className={errors.cvv ? "error" : ""}
            />
            {errors.cvv && <p className="error-text">{errors.cvv}</p>}
          </div>
        </div>
        <div className="submit-button-container">
          <button disabled={!isFormValid}>Confirm and pay</button>
        </div>
      </form>
    </div>
  );
}
