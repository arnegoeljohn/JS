import React from "react";
import Header from "../home/header";
import Navigation from "../home/navigation";
import Strategy1 from "./Strategy1";
import Strategy2 from "./Strategy2";
import GiftAbout from "../about/GiftAbout";
import Footer from "../home/footer";

const Strategy = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="mt-11">
        <Strategy1 />
      </div>
      <Strategy2 />
      <GiftAbout />
      <Footer />
    </div>
  );
};

export default Strategy;
