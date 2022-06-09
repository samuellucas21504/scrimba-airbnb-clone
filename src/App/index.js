import React from "react";
import "./style.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards />
    </>
  );
}
