import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';

function HomePage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <HeroSection />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
