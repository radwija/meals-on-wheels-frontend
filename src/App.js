import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Registration />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
