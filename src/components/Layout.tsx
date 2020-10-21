import React from 'react';
import { Link as InternalLink } from 'react-scroll';
import { Footer } from './Footer';
import { Header } from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="absolute top-0 mx-auto w-full text-center">
        <InternalLink
          href="#main"
          to="main"
          smooth
          duration={250}
          className="sr-only focus:not-sr-only border border-black bg-yellow-400 cursor-pointer text-gray-800 text-sm font-medium"
        >
          Skip to main content
        </InternalLink>
      </div>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
