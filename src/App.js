import "./App.css";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import { DonationPage } from "./pages/DonationPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
      <PayPalScriptProvider options={{ clientId: "AX67VeMM2VPi4OP3a21N0e2NpVtfcWcEip_AvG2dZ4ZUi6fhCrn6WR51pdGmI9vrVecbvagqDq6GRIsk" }}>
        <DonationPage />
      </PayPalScriptProvider>
    </div>
  );
}

export default App;
