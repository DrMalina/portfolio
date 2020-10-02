import React from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';

function HomePage() {
  return (
    <>
      <a href="#main" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <HeroSection />
    </>
  );
}

export default HomePage;
