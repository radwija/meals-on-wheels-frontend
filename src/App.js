import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
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
