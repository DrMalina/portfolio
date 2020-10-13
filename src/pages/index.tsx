import React from 'react';
import { AboutMe } from '../components/AboutMe';
import { Contact } from '../components/Contact';
import { HeroSection } from '../components/HeroSection';
import { Projects } from '../components/Projects';
import { SEO } from '../components/Seo';

function HomePage() {
  return (
    <>
      <SEO />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  );
}

export default HomePage;
