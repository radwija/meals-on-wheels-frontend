import "./App.css";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Partnership from "./pages/Partnership";
import Profile from "./pages/Profile";
import { RequireAuth } from "react-auth-kit";
import { DonationPage } from "./pages/DonationPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {"PUBLIC ROUTES"}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/partnership" element={<Partnership />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donation" element={
            <PayPalScriptProvider options={{ clientId: "AX67VeMM2VPi4OP3a21N0e2NpVtfcWcEip_AvG2dZ4ZUi6fhCrn6WR51pdGmI9vrVecbvagqDq6GRIsk" }}>
              <DonationPage />
            </PayPalScriptProvider>
          } />

          {"PRIVATE ROUTES"}
          <Route
            path="/profile"
            element={
              <RequireAuth loginPath="/login">
                <Profile />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
