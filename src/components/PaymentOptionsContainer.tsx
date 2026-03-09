import PaymentOption from "./PaymentOption";

export default function PaymentOptionsContainer() {
  return (
    <div className="payment-options-container">
      <h1>QR and e-Wallets</h1>
      <div className="options-container">
        <PaymentOption title="maya" />
        <PaymentOption title="qrph" />
        <PaymentOption title="wechatpay" />
        <PaymentOption title="spay" />
      </div>
    </div>
  );
}
