import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Navbar from "./components/Navbar";
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  const [location, setLocation] = useState("/");

  return (
    <HashRouter>
      <div className={location === "/" ? "home" : location.slice(1)}>
        <Navbar location={location} />
        <Routes>
          <Route path="/" element={<Home setLocation={setLocation} />} />
          <Route
            path="destination"
            element={<Destination setLocation={setLocation} />}
          />
          <Route path="crew" element={<Crew setLocation={setLocation} />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
