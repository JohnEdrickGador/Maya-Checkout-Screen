import "./styles/App.css";
import "./styles/Divider.css";
import "./styles/PaymentOptionsContainer.css";
import "./styles/CardInformationForm.css";
import "./styles/OrderSummary.css";
import "./styles/Cart.css";
import PaymentDetails from "./components/PaymentDetails";
import OrderSummary from "./components/OrderSummary";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="app-container">
      <Cart />
      <PaymentDetails />
      <OrderSummary />
    </div>
  );
}

export default App;
