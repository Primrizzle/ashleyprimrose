import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
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
      <Skills />
      <About />
    </div>
  );
}

export default App;
