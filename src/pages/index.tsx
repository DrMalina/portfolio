import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { Projects } from '../components/Projects';

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
    </>
  );
}

export default HomePage;
