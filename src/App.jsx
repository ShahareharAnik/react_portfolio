import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
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
      title: "Anik | Portfolio",
      description:
        "Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik.",
      keywords:
        "Shaharehar Rahaman Anik, Anik, Shaharehar, Portfolio, Electrical Engineer, SQA, Quality Assurance, Software Engineer,Software Quality Assurance React, Node.js, Brain Station 23, Web Development, Frontend Developer, Backend Developer, Full Stack Developer, JavaScript Expert, Bangladesh Developer, Nitex",
    });
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Anik | Portfolio</title>
        <meta name="title" content="Anik | Portfolio" />
        <meta
          name="description"
          content="Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik."
        />
        <meta
          name="keywords"
          content="Shaharehar Rahaman Anik, Anik, Shaharehar, Portfolio, Electrical Engineer, SQA, Quality Assurance, Software Engineer,Software Quality Assurance React, Node.js, Brain Station 23, Web Development, Frontend Developer, Backend Developer, Full Stack Developer, JavaScript Expert, Bangladesh Developer, Nitex"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shahareharrahamananik.netlify.app/"
        />
        <meta property="og:title" content="Anik | Portfolio" />
        <meta
          property="og:description"
          content="Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik."
        />
        <meta property="og:image" content="/src/assets/logo-white.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://shahareharrahamananik.netlify.app/"
        />
        <meta property="twitter:title" content="Anik | Portfolio" />
        <meta
          property="twitter:description"
          content="Professional portfolio showcasing software development, web development, and design projects by Shaharehar Rahaman Anik."
        />
        <meta property="twitter:image" content="/src/assets/logo-white.png" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Shaharehar Rahaman Anik" />
        <link
          rel="canonical"
          href="https://shahareharrahamananik.netlify.app/"
        />
      </Helmet>

      <div className="relative z-0 bg-primary">
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <div className="fixed top-0 left-0 w-full z-50">
            <Navbar />
          </div>
          <Hero />
        </header>

        <main>
          <section
            id="about"
            className="bg-tech-pattern bg-cover bg-no-repeat bg-center relative"
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>
            <div className="relative z-20">
              <About />
            </div>
          </section>

          <section
            id="experience"
            className="bg-work-pattern bg-cover bg-no-repeat bg-center relative"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <Experience />
            </div>
          </section>

          <section
            id="skills"
            className="bg-road-pattern bg-cover bg-no-repeat bg-center relative"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
            <div className="relative z-20">
              <Tech />
            </div>
          </section>

          <section
            id="projects"
            className="bg-rain-pattern bg-cover bg-no-repeat bg-center relative"
          >
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