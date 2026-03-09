import pci from "../assets/logos/pci.png";

export default function FormFooter() {
  return (
    <div className="form-footer">
      <img src={pci} alt="" />
      <div className="form-footer-text">
        <h1>Maya Checkout is PCI-DSS Certified</h1>
        <h2>Your payment is secured</h2>
      </div>
    </div>
  );
}
