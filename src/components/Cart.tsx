import OrderTotal from "./OrderTotal";

export default function Cart() {
  return (
    <div className="cart-container">
      <div className="cart-details">
        <span className="material-icons">shopping_cart</span>
        <OrderTotal />
        <span className="material-icons">arrow_drop_down</span>
      </div>
    </div>
  );
}
