import React from 'react';
import { useToggle } from '../hooks/useToggle';
import { Logo } from './Logo';
import { MenuToggle } from './MenuToggle';
import { Nav } from './Nav';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useToggle();

  return (
    <header className="text-gray-800">
      <div className="container mx-auto p-5">
        <div className="relative flex items-center">
          <Logo />
          <MenuToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </header>
  );
}
