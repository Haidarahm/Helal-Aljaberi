import React from "react";
import Hero from "./Hero";
import About from "./About";
import { Statistics } from "./Statistics";
import "./home.css";
import { Story } from "./Story";
import { Adaptation } from "./Adaption";
import { Certificates } from "./Certificates";
import ContactCard from "../../components/ContactCard";
const Home = () => {
  return (
    <section className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <Statistics />
      <Story />
      <Adaptation />
      <Certificates />
      <ContactCard />
    </section>
  );
};

export default Home;
