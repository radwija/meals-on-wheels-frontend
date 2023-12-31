import "./App.css";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import AboutUs from "./pages/AboutUs";
import Partnership from "./pages/Partnership";
import Profile from "./pages/Profile";
import CaregiverDashboard from "./pages/CaregiverDashboard";
import DriverDashboard from "./pages/DriverDashboard";
import PartnerDashboard from "./pages/PartnerDashboard";
import MemberDashboard from "./pages/MemberDashboard";
import MemberMealPackageDetail from "./pages/MemberMealPackageDetail";
import MemberOrderHistory from "./pages/MemberOrderHistory";
import MemberFeedbackPage from "./pages/MemberFeedback";
import { RequireAuth } from "react-auth-kit";
import { DonationPage } from "./pages/DonationPage";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { LandingPage } from "./pages/LandingPage";
import ContactUs from "./pages/ContactUs";
import AdminDashboard from "./pages/AdminPanel/AdminDashboard";
import Members from "./pages/AdminPanel/Members";
import Partners from "./pages/AdminPanel/Partners";
import MealOrderHistory from "./pages/AdminPanel/MealOrderHistory";
// import MealPackages from "./pages/AdminPanel/MealPackages";
import { TermsAndConditions } from "./pages/TermsAndConditions";
import AddMealModal from "./components/modal/AddMealModal";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        {"PUBLIC ROUTES"}
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/donation"
          element={
            <PayPalScriptProvider
              options={{
                clientId:
                  "AX67VeMM2VPi4OP3a21N0e2NpVtfcWcEip_AvG2dZ4ZUi6fhCrn6WR51pdGmI9vrVecbvagqDq6GRIsk",
              }}
            >
              <DonationPage />
            </PayPalScriptProvider>
          }
        />

        {"PRIVATE ROUTES"}
        <Route
          path="/profile"
          element={
            <RequireAuth loginPath="/login">
              <Profile />
            </RequireAuth>
          }
        />

        <Route
          path="/caregiver"
          element={
            <RequireAuth loginPath="/login">
              <CaregiverDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/driver"
          element={
            <RequireAuth loginPath="/login">
              <DriverDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/partner"
          element={
            <RequireAuth loginPath="/login">
              <PartnerDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/member"
          element={
            <RequireAuth loginPath="/login">
              <MemberDashboard />
            </RequireAuth>
          }
        />
        <Route
          path="/meals-package-detail/:id"
          element={
            <RequireAuth loginPath="/login">
              <MemberMealPackageDetail />
            </RequireAuth>
          }
        />
        <Route
          path="/feedback"
          element={
            <RequireAuth loginPath="/login">
              <MemberFeedbackPage />
            </RequireAuth>
          }
        />
        <Route
          path="/order-history"
          element={
            <RequireAuth loginPath="/login">
              <MemberOrderHistory />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth loginPath="/login">
              <AdminDashboard />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/users/drivers"
          element={
            <RequireAuth loginPath="/login">
              <Drivers />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/admin/user"
          element={
            <RequireAuth loginPath="/login">
              <Members />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/partner"
          element={
            <RequireAuth loginPath="/login">
              <Partners />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/users/volunteers"
          element={
            <RequireAuth loginPath="/login">
              <Volunteers />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/order/all"
          element={
            <RequireAuth loginPath="/login">
              <MealOrderHistory />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/meal"
          element={
            <RequireAuth loginPath="/login">
              <MealPackages />
            </RequireAuth>
          }
        /> */}
        <Route
          path="/menu/add"
          element={
            <RequireAuth loginPath="/login">
              <AddMealModal />
            </RequireAuth>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
