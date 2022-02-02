import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import About from "../components/About";
import Tokenomics from "../components/Tokenomics";
import ContactInfo from "../components/ContactInfo";
import Footer from "../components/Footer";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Tiers from "../components/Tiers";
const HomeOne = () => {
  useDocumentTitle(
    "LegioPad"
  );
  return (
    <div className="main-left">
      <Header />
      <Slider />
      <About />
      <Tokenomics />
      <Tiers />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeOne;
