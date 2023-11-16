import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import TopDestination from "./components/TopDestination"
import TravelPoint from "./components/TravelPoint"
import Features from "./components/Features"
import Subscribe from "./components/Subscribe"
import Footer from "./components/Footer"

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <TopDestination />
      <TravelPoint />
      <Features />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
