'use client';

import { useEffect, useRef } from "react";
import Hero from "./hero";
import Services from "./services";
import AboutContact from './about-contact';
import Counter from "./counter-visitor";

export default function Home() {
  // Define a ref for the sections array
  const sections = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold for your needs
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            history.replaceState(null, "", `#${id}`);
          }
        }
      });
    }, observerOptions);

    // Observe all the sections
    sections.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="home" ref={(el) => { sections.current[0] = el; }}>
        <Hero />
      </section>
      <section id="service" ref={(el) => { sections.current[1] = el; }}>
        <Services />
      </section>
      <section id="contact" ref={(el) => { sections.current[2] = el; }}>
        <AboutContact />
      </section>
      <section id="counter" ref={(el) => { sections.current[3] = el; }}>
        <Counter />
      </section>
    </>
  );
}
