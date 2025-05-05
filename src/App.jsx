import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { updateSEO } from "./utils/seo";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  //StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  useEffect(() => {
    // Set up main SEO information
    updateSEO({
      title: "Shaharehar Rahaman Anik - Software Engineer Portfolio",
      description: "Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik.",
      keywords: "Shaharehar Rahaman Anik, Portfolio, MERN Stack Developer, Software Engineer, Figma Designer, React, Node.js, Brain Station 23, Web Development, Frontend Developer, Backend Developer",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          <Hero />
        </header>
        
        <main>
          <section id="about" className="bg-tech-pattern bg-cover bg-no-repeat bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="relative z-20">
              <About />
            </div>
          </section>
          
          <section id="experience" className="bg-work-pattern bg-cover bg-no-repeat bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <Experience />
            </div>
          </section>
          
          <section id="skills" className="bg-road-pattern bg-cover bg-no-repeat bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <Tech />
            </div>
          </section>

          <section id="projects" className="bg-rain-pattern bg-cover bg-no-repeat bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <Works />
            </div>
          </section>
        </main>

        <footer className="bg-universe-pattern bg-cover bg-no-repeat bg-center relative">
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          <div className="relative z-20">
            <Contact />
            <Footer />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;
