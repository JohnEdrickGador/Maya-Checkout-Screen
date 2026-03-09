import "./styles/App.css";
import "./styles/Divider.css";
import "./styles/PaymentOptionsContainer.css";
import "./styles/CardInformationForm.css";
import "./styles/OrderSummary.css";
import PaymentDetails from "./components/PaymentDetails";
import OrderSummary from "./components/OrderSummary";
function App() {
  return (
    <div className="app-container">
      <PaymentDetails />
      <OrderSummary />
    </div>
  );
}

export default App;
