import React from "react";
import Navigation from "./navigation";
import Banner from "./banner";

import Section from "./section";
import Services from "./services";
import Associates from "./associates";
import Footer from "./footer";
import Header from "./header";

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Banner />
      <Section />
      <Services />
      <Associates />
      <Footer />
    </div>
  );
};

export default Home;
