import React from 'react';

interface IconMenuProps {
  isMenuOpen: boolean;
}

function IconMenu({ isMenuOpen }: IconMenuProps) {
  if (isMenuOpen) {
    // show close icon
    return (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="fill-current w-8 h-8"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="{2}"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }
  // show burger menu icon
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="fill-current w-8 h-8"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="{2}"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}
interface MenuToggleProps extends IconMenuProps {
  setIsMenuOpen: () => void;
}

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
