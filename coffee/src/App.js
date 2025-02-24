import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import AboutUs from "./pages/AboutUs";
import Order from './pages/Order';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
       <Footer />
    </Router>
  );
}

export default App;
