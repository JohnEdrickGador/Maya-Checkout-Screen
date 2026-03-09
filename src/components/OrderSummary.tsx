import maya from "../assets/logos/maya.png";
import Divider from "./Divider";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";
import OrderSummaryFooter from "./OrderSummaryFooter";

export default function OrderSummary() {
  return (
    <div className="order-summary-container">
      <div className="order-summary">
        <div className="order-header">
          <img src={maya} alt="" />
          <h3>Maya Merchant SRA V2</h3>
        </div>
        <Divider />
        <h2>Order Summary</h2>
        <Divider />
        <OrderItem itemName="PayMaya Card" itemQty={1} itemPrice={250} />
        <Divider />
        <OrderTotal />
        <OrderSummaryFooter />
      </div>
    </div>
  );
}
