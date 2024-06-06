import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.body.style.overflow = "auto";
  return (
    <section
      className=" bg-cover bg-center"
      style={{ backgroundImage: "url(/pexels-skylar-kang-6044198.jpg)" }}
    >
      <Navbar />
      <Hero />
    </section>
  );
};

export default Home;
