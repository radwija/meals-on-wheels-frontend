import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import { DonationPage } from "./pages/DonationPage";

function App() {
  return (
    <div className="App">
      <DonationPage />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
