import React from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stars from './components/Stars';
import Navbar from "./components/Navbar";  // ✅ Make sure this is imported
import Home from "./components/Home";
import TarotUpdates from "./components/TarotUpdates";
import Contact from "./components/Contact";
import PriceList from "./components/PriceList";

function App() {
  return (
    <Router>
      <div className="App">
        <Stars />   {/* 🌟 This will add your stars */}

        <Navbar />  {/* ✅ Use your Navbar here */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/updates" element={<TarotUpdates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/PriceList" element={<PriceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
