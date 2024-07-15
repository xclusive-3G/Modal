import React from "react";
import "./home.scss";
import Navbar from "../../component/navbar/Navbar";
import Section from "../../component/section/Section";
import Testimonials from "../../component/testimonials/Testimonials";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Section />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
