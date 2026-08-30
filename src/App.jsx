import { useCallback, useEffect, useState } from "react";
import { Atmosphere, Cursor } from "./components/Atmosphere.jsx";
import { Preloader } from "./components/Preloader.jsx";
import { Nav } from "./components/Nav.jsx";
import { Hero } from "./components/Hero.jsx";
import { Marquee } from "./components/Marquee.jsx";
import {
  About,
  Expertise,
  Experience,
  Skills,
  OtherWork,
  Awards,
  Education,
  Testimonials,
  CTA,
} from "./components/Sections.jsx";
import { Work } from "./components/Work.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

export default function App() {
  const [, setLoaded] = useState(false);

  const handleDone = useCallback(() => {
    setLoaded(true);
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView();
    }
  }, []);

  useEffect(() => {
    // évite un flash de scroll restauré
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
  }, []);

  return (
    <>
      <Atmosphere />
      <Cursor />
      <Preloader onDone={handleDone} />

      <span id="top" />
      <Nav />

      <main className="page">
        <Hero />
        <Marquee />
        <About />
        <Expertise />
        <Experience />
        <Skills />
        <Work />
        <OtherWork />
        <Awards />
        <Education />
        <Testimonials />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
