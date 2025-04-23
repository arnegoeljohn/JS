import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Faq from "./components/pages/faq/Faq";
import Strategy from "./components/pages/strategy/Strategy";
import SponsorSection from "./components/pages/sponsor-child/SponsorSection";
import Contact from "./components/pages/contact/Contact";
import Donate from "./components/pages/donate/Donate";
import PageNotFound from "./partials/PageNotFound";
import UserLogin from "./components/pages/access/UserLogin";
import UserCreateAccount from "./components/pages/access/UserCreateAccount";
import UserForgotPassword from "./components/pages/access/UserForgotPassword";
import ChildDetails from "./components/pages/donate/ChildDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/sponsor-child" element={<SponsorSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/create-account" element={<UserCreateAccount />} />
        <Route path="/forgot-password" element={<UserForgotPassword />} />
        <Route path="/child-details" element={<ChildDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
