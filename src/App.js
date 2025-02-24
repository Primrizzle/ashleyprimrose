import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
/*import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";*/

console.log("✅ App.js is running!");

console.log("🔎 Navbar:", Navbar);


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
