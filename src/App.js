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
