import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import ServiceHistory from "./pages/ServiceHistory";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/history" element={<ServiceHistory />} />
        <Route path="/billing" element={<ServiceHistory />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
