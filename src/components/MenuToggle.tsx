import React from 'react';
import { IconMenu } from './IconMenu';

type MenuToggleProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: () => void;
};

export function MenuToggle({ isMenuOpen, setIsMenuOpen }: MenuToggleProps) {
  return (
    <button
      type="button"
      className="sm:hidden ml-auto p-2 block"
      onClick={setIsMenuOpen}
      aria-expanded={isMenuOpen}
    >
      <span className="sr-only">Open/close menu</span>
      <IconMenu isMenuOpen={isMenuOpen} />
    </button>
  );
}
