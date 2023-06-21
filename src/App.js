import logo from "./logo.svg";
import "./App.css";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Registration from "./pages/Registration";
import { Footer } from "./components/Footer";
import Partnership from "./pages/Partnership";

function App() {
  return (
    <div className="App">
      <Partnership />
      <Footer />
    </div>
  );
}

export default App;
