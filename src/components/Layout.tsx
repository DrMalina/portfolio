import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <a href="#main" className="sr-only">
        Skip to main content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
