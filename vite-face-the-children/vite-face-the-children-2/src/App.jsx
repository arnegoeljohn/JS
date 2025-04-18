import React from "react";
import Home from "./components/home/home";
import About from "./components/about/About";
import Faq from "./components/faq/Faq";
import Strategy from './components/strategy/Strategy';
import Contact from "./components/contact/Contact";



const App = () => {
  return (
    <>
      <Home />
      <About />
      <Faq/>
      <Strategy/>
      <Contact/>
    </>
  );
};

export default App;
