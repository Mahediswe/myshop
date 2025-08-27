import React from "react";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AllProducts from "./AllProducts";
const Home = () => {
  return (
    <div>
      <Topbar />
      <Header />
      <Navbar />
      <Hero />
      <AllProducts/>
      <Footer/>
    </div>
  );
};

export default Home;
